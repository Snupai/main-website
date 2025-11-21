import { Link } from 'react-router-dom';

export default function Gallery() {
    return (
        <main className="min-h-screen pt-32 max-w-[1400px] mx-auto px-10">
            <h1 className="text-5xl text-center mb-5 font-semibold" style={{ color: 'var(--text-50)' }}>
                Gallery – Coming Soon
            </h1>
            <p className="text-center" style={{ color: 'var(--text-200)' }}>
                This page will showcase a gallery of screenshots and media.
            </p>
        </main>
    );
}
