import { Link } from 'react-router-dom';

export default function DownloadPage() {
    return (
        <main className="min-h-screen pt-32 max-w-[1400px] mx-auto px-10">
            <h1 className="text-5xl text-center mb-6 font-semibold" style={{ color: 'var(--text-50)' }}>
                Download Astrakit
            </h1>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-200)' }}>
                Get started with Astrakit today. It's completely free!
                <br />
                <span className="text-sm opacity-70 mt-2 block">Current version: ALPHA</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-20">
                <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--primary-600)] px-8 py-4 font-semibold text-white hover:bg-[var(--primary-500)] transition-all hover:shadow-[0_0_20px_rgba(127,0,255,0.4)] hover:-translate-y-1 min-w-[200px]"
                >
                    F-Droid
                </a>
                <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-all hover:shadow-lg hover:-translate-y-1 min-w-[200px]"
                >
                    Google Play
                </a>
            </div>
        </main>
    );
}
