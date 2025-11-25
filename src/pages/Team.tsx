import { Link } from 'react-router-dom';

export default function Team() {
    return (
        <main className="min-h-screen pt-32 max-w-[1400px] mx-auto px-10">
            <h1 className="text-5xl text-center mb-12 font-semibold" style={{ color: 'var(--text-50)' }}>
                Meet The Team
            </h1>
            <p className="text-center text-lg mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-200)' }}>
                Discover the talented individuals behind Astrakit and learn how their expertise shapes our platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl pb-20">
                {['catpawzz', 'snupai', 'yuuiko'].map((username) => (
                    <div key={username} className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(127,0,255,0.3)]">
                        <iframe src={`https://api.astrakit.cc/iframe-profile?username=${username}`} className="w-full h-64 md:h-56 border-0"></iframe>
                    </div>
                ))}
            </div>
        </main>
    );
}
