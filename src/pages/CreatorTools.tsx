import { useState } from 'react';
import ImageCropper from '~/components/CreatorTools/ImageCropper';
import AudioTrimmer from '~/components/CreatorTools/AudioTrimmer';

export default function CreatorTools() {
  const [activeTool, setActiveTool] = useState<'cropper' | 'trimmer'>('cropper');

  return (
    <main className="pt-32 relative overflow-hidden max-w-[1400px] mx-auto px-10 z-10">
      <div className="max-w-7xl mx-auto py-10 relative">
        <h1 className="text-5xl text-center mb-5 font-semibold" style={{ color: 'var(--text-50)' }}>
          Content <span className="text-[var(--primary-500)]">Creator Tools</span>
        </h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-200)' }}>
          Easy-to-use tools that help you create optimized content for Astrakit. Crop images and trim audio files to the perfect size for your profile.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTool('cropper')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTool === 'cropper'
              ? 'bg-[var(--primary-600)] text-white shadow-[0_0_20px_rgba(127,0,255,0.4)]'
              : 'bg-black/30 text-[var(--text-300)] hover:bg-black/50 hover:text-[var(--text-100)] border border-[var(--primary-900)]'
              }`}
          >
            Image Cropper
          </button>
          <button
            onClick={() => setActiveTool('trimmer')}
            className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTool === 'trimmer'
              ? 'bg-[var(--primary-600)] text-white shadow-[0_0_20px_rgba(127,0,255,0.4)]'
              : 'bg-black/30 text-[var(--text-300)] hover:bg-black/50 hover:text-[var(--text-100)] border border-[var(--primary-900)]'
              }`}
          >
            Audio Trimmer
          </button>
        </div>

        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTool === 'cropper' ? <ImageCropper /> : <AudioTrimmer />}
        </div>
      </div>
    </main>
  );
}
