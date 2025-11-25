import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import type { Point, Area } from 'react-easy-crop';
import { Upload, Crop, RotateCcw, Info, Shield, Image as ImageIcon } from 'lucide-react';

export default function ImageCropper() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [isCropping, setIsCropping] = useState(false);

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const readFile = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result as string));
            reader.readAsDataURL(file);
        });
    };

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file) {
                const imageDataUrl = await readFile(file);
                setImageSrc(imageDataUrl);
            }
        }
    };

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => resolve(image));
            image.addEventListener('error', (error) => reject(error));
            image.setAttribute('crossOrigin', 'anonymous');
            image.src = url;
        });

    const getCroppedImg = async (
        imageSrc: string,
        pixelCrop: Area
    ): Promise<Blob | null> => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return null;
        }

        // set canvas size to match the bounding box
        canvas.width = 500;
        canvas.height = 250;

        // draw the image
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            500,
            250
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/jpeg');
        });
    };

    const handleDownload = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        setIsCropping(true);
        try {
            const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
            if (croppedImageBlob) {
                const url = URL.createObjectURL(croppedImageBlob);
                const link = document.createElement('a');
                link.download = 'cropped-image.jpg';
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            }
        } catch (e) {
            console.error(e);
        }
        setIsCropping(false);
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-[var(--text-50)]">
                    Image <span className="text-[var(--primary-500)]">Cropper</span>
                </h2>
                <p className="text-[var(--text-200)] max-w-2xl mx-auto">
                    Upload your image and crop it to exactly 500x250 pixels - perfect for Astrakit banners and thumbnails.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Tool */}
                <div className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl border border-[var(--primary-900)] p-6 flex flex-col h-[600px]">
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary-500)] text-[var(--primary-400)] hover:bg-[var(--primary-900)]/20 transition-colors">
                                <Upload size={18} />
                                <span className="font-medium">Choose an image</span>
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                        <div className="bg-[var(--primary-900)]/30 text-[var(--primary-400)] px-4 py-1.5 rounded-full text-sm font-medium border border-[var(--primary-900)] flex items-center gap-2">
                            <Crop size={14} />
                            Target dimensions: 500×250px
                        </div>
                    </div>

                    <div className="flex-1 bg-[#111] rounded-xl overflow-hidden relative border border-white/5 mb-6 flex items-center justify-center group">
                        {!imageSrc ? (
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-[var(--primary-900)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <ImageIcon size={32} className="text-[var(--primary-500)]" />
                                </div>
                                <p className="text-[var(--text-300)] font-medium">Upload an image to start cropping</p>
                            </div>
                        ) : (
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={500 / 250}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleDownload}
                            disabled={!imageSrc || isCropping}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--primary-600)] text-white hover:bg-[var(--primary-500)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            <Crop size={18} />
                            {isCropping ? 'Cropping...' : 'Crop Image'}
                        </button>
                        <button
                            onClick={() => {
                                setImageSrc(null);
                                setZoom(1);
                                setCrop({ x: 0, y: 0 });
                            }}
                            disabled={!imageSrc}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-[var(--text-200)] hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                        >
                            <RotateCcw size={18} />
                            Reset
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
                                Click <strong className="text-white">"Choose an image"</strong> to upload an image from your device
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">2.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Adjust the crop area by dragging the corners to select the portion you want to keep
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">3.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Click <strong className="text-white">"Crop Image"</strong> to generate your 500×250px image
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-[var(--text-400)] font-mono">4.</span>
                            <p className="text-[var(--text-200)] leading-relaxed">
                                Download your cropped image using the download button
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-8">
                        <p className="text-[var(--text-300)] text-sm leading-relaxed">
                            This tool helps you create the perfect banner images for your Astrakit profile. The 500×250px size ensures your images look great across all devices.
                        </p>
                    </div>

                    <div className="bg-[var(--primary-900)]/20 border border-[var(--primary-900)] rounded-xl p-4 flex gap-3">
                        <Shield className="text-[var(--primary-500)] shrink-0" size={20} />
                        <p className="text-[var(--primary-100)] text-sm leading-relaxed">
                            This tool processes your image directly in your browser - no images are uploaded to our servers, ensuring your privacy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
