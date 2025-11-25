import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import { Upload, Music, Play, Pause, Info, Shield, Clock, Scissors } from 'lucide-react';

export default function AudioTrimmer() {
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [trimRegion, setTrimRegion] = useState<{ start: number; end: number } | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const regionsRef = useRef<RegionsPlugin | null>(null);

    useEffect(() => {
        if (audioSrc && containerRef.current) {
            const ws = WaveSurfer.create({
                container: containerRef.current,
                waveColor: 'rgba(127, 0, 255, 0.5)',
                progressColor: '#7f00ff',
                cursorColor: '#ffffff',
                barWidth: 2,
                barGap: 1,
                height: 128,
            });

            const wsRegions = RegionsPlugin.create();
            ws.registerPlugin(wsRegions);

            ws.on('decode', () => {
                const dur = ws.getDuration();
                setDuration(dur);

                // Add default region (10s or max duration)
                const end = Math.min(dur, 10);
                wsRegions.addRegion({
                    start: 0,
                    end: end,
                    color: 'rgba(127, 0, 255, 0.2)',
                    drag: true,
                    resize: true,
                });
                setTrimRegion({ start: 0, end: end });
            });

            ws.on('play', () => setIsPlaying(true));
            ws.on('pause', () => setIsPlaying(false));
            ws.on('finish', () => setIsPlaying(false));

            wsRegions.on('region-updated', (region) => {
                setTrimRegion({ start: region.start, end: region.end });
                setError(null);
            });

            ws.load(audioSrc);
            wavesurferRef.current = ws;
            regionsRef.current = wsRegions;

            return () => {
                ws.destroy();
            };
        }
    }, [audioSrc]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                setAudioSrc(url);
                setError(null);
            }
        }
    };

    const handlePlayPause = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
        }
    };

    const bufferToWav = (buffer: AudioBuffer, start: number, end: number): Blob => {
        const sampleRate = buffer.sampleRate;
        const startSample = Math.floor(start * sampleRate);
        const endSample = Math.floor(end * sampleRate);
        const length = endSample - startSample;
        const numOfChannels = buffer.numberOfChannels;

        const wavBuffer = new ArrayBuffer(44 + length * numOfChannels * 2);
        const view = new DataView(wavBuffer);

        const writeString = (view: DataView, offset: number, string: string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        // RIFF identifier
        writeString(view, 0, 'RIFF');
        // file length
        view.setUint32(4, 36 + length * numOfChannels * 2, true);
        // RIFF type
        writeString(view, 8, 'WAVE');
        // format chunk identifier
        writeString(view, 12, 'fmt ');
        // format chunk length
        view.setUint32(16, 16, true);
        // sample format (raw)
        view.setUint16(20, 1, true);
        // channel count
        view.setUint16(22, numOfChannels, true);
        // sample rate
        view.setUint32(24, sampleRate, true);
        // byte rate (sample rate * block align)
        view.setUint32(28, sampleRate * numOfChannels * 2, true);
        // block align (channel count * bytes per sample)
        view.setUint16(32, numOfChannels * 2, true);
        // bits per sample
        view.setUint16(34, 16, true);
        // data chunk identifier
        writeString(view, 36, 'data');
        // data chunk length
        view.setUint32(40, length * numOfChannels * 2, true);

        // write the PCM samples
        let offset = 44;
        for (let i = 0; i < length; i++) {
            for (let channel = 0; channel < numOfChannels; channel++) {
                const sample = buffer.getChannelData(channel)[startSample + i] ?? 0;
                // clip sample
                const s = Math.max(-1, Math.min(1, sample));
                // scale to 16-bit integer
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                offset += 2;
            }
        }

        return new Blob([view], { type: 'audio/wav' });
    };

    const handleDownload = async () => {
        const currentRegion = trimRegion;
        if (!wavesurferRef.current || !currentRegion) return;

        const regionDuration = currentRegion.end - currentRegion.start;
        if (regionDuration < 10 || regionDuration > 30) {
            setError('Selection must be between 10 and 30 seconds.');
            return;
        }

        setIsProcessing(true);
        try {
            const decodedData = wavesurferRef.current.getDecodedData();
            if (decodedData) {
                const { start, end } = currentRegion;
                const wavBlob = bufferToWav(decodedData, start, end);
                const url = URL.createObjectURL(wavBlob);
                const link = document.createElement('a');
                link.download = 'trimmed-audio.wav';
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            }
        } catch (e) {
            console.error(e);
            setError('Failed to process audio.');
        }
        setIsProcessing(false);
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-[var(--text-50)]">
                    Audio <span className="text-[var(--primary-500)]">Trimmer</span>
                </h2>
                <p className="text-[var(--text-200)] max-w-2xl mx-auto">
                    Upload an audio file and trim it to a perfect 10-30 second clip with custom fade effects - ideal for Astrakit audio posts.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Tool */}
                <div className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl border border-[var(--primary-900)] p-6 flex flex-col h-[600px]">
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary-500)] text-[var(--primary-500)] hover:bg-[var(--primary-500)]/10 transition-colors">
                                <Upload size={18} />
                                <span className="font-medium">Choose an audio file</span>
                            </button>
                            <input
                                type="file"
                                accept="audio/*"
                                onChange={onFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        <div className="bg-[var(--primary-500)]/10 text-[var(--primary-500)] px-4 py-1.5 rounded-full text-sm font-medium border border-[var(--primary-500)]/20 flex items-center gap-2">
                            <Clock size={14} />
                            Duration limit: 10-30 seconds
                        </div>
                    </div>

                    <div className="flex-1 bg-[#111] rounded-xl overflow-hidden relative border border-white/5 mb-6 flex flex-col items-center justify-center group p-6">
                        {!audioSrc ? (
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-[var(--primary-500)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Music size={32} className="text-[var(--primary-500)]" />
                                </div>
                                <p className="text-[var(--text-300)] font-medium mb-2">Upload an audio file to start trimming</p>
                                <p className="text-[var(--text-400)] text-sm">Supported formats: MP3, WAV, OGG, M4A</p>
                            </div>
                        ) : (
                            <div className="w-full h-full flex flex-col justify-center">
                                <div ref={containerRef} className="w-full" />

                                {trimRegion && (
                                    <div className="mt-4 text-center">
                                        <span className="text-[var(--text-300)] text-sm">Selection: </span>
                                        <span className={`font-mono font-medium ${(trimRegion.end - trimRegion.start) >= 10 && (trimRegion.end - trimRegion.start) <= 30
                                            ? 'text-[var(--primary-500)]'
                                            : 'text-red-400'
                                            }`}>
                                            {(trimRegion.end - trimRegion.start).toFixed(2)}s
                                        </span>
                                    </div>
                                )}

                                {error && (
                                    <div className="mt-2 text-red-400 text-sm font-medium text-center bg-red-500/10 py-1 px-3 rounded-full mx-auto">
                                        {error}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => {
                                setAudioSrc(null);
                                setTrimRegion(null);
                            }}
                            disabled={!audioSrc}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-[var(--text-200)] hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handlePlayPause}
                            disabled={!audioSrc}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 text-white hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                        <button
                            onClick={handleDownload}
                            disabled={!audioSrc || isProcessing}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-bold ml-auto"
                        >
                            {isProcessing ? <Scissors size={18} className="animate-spin" /> : <Scissors size={18} />}
                            {isProcessing ? 'Processing...' : 'Trim Selection'}
                        </button>
                    </div>
                </div>

                {/* Right Column - Info */}
                <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 p-8 h-fit">
                    <div className="flex items-center gap-2 mb-6">
                        <Info className="text-[var(--primary-500)]" size={20} />
                        <h3 className="text-xl font-bold text-[var(--primary-500)]">How to use this tool</h3>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">1.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Click <strong className="text-white">"Choose an audio file"</strong> to upload audio from your device
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">2.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Drag the waveform <strong className="text-white">handles</strong> to select a 10-30 second portion
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">3.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Adjust <strong className="text-white">fade in/out</strong> duration to smooth the start and end
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">4.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Click <strong className="text-white">"Trim Selection"</strong> to process your audio clip
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">5.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Download your trimmed audio using the download button
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-8">
                        <p className="text-[var(--text-300)] text-sm leading-relaxed">
                            This tool helps you create the perfect audio clips for your Astrakit profile. The 10-30 second duration is ideal for audio posts that engage without overwhelming.
                        </p>
                    </div>

                    <div className="bg-[var(--primary-900)]/20 border border-[var(--primary-900)] rounded-xl p-4 flex gap-3">
                        <Shield className="text-[var(--primary-500)] shrink-0" size={20} />
                        <p className="text-[var(--primary-100)] text-sm leading-relaxed">
                            This tool processes your audio directly in your browser - no files are uploaded to our servers, ensuring your privacy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
