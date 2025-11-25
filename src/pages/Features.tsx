export default function Features() {
    return (
        <main className="min-h-screen pt-32 relative overflow-hidden max-w-[1400px] mx-auto px-10 z-10">
            <h1 className="text-5xl text-center mb-12 font-semibold" style={{ color: 'var(--text-50)' }}>Features</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-20">
                <FeatureCard
                    title="Secure & Encrypted"
                    description="You have control over your data, with options to delete it at any time and customizable encryption methods."
                />
                <FeatureCard
                    title="Temporary Message Storage"
                    description="Messages are stored on our servers only until delivered and read, then automatically deleted, ensuring no long-term record on our infrastructure."
                />
                <FeatureCard
                    title="Open source & Free"
                    description="We believe that open source software combined with privacy should be accessible to everyone. We're funded only by donations."
                />
                <FeatureCard
                    title="Transparent"
                    description="We operate with complete transparency, providing open access to our source code and development process, by still keeping your data secure at any time."
                />
                <FeatureCard
                    title="Feature packed"
                    description="Astrakit is loaded with features that enhance your chatting experience. Stay tuned for upcoming features that will make communication even more enjoyable."
                />
                <FeatureCard
                    title="Community Driven"
                    description="Join a vibrant community of users and cats (hehe) who contribute to the continuous improvement and evolution of Astrakit."
                />
            </div>
        </main>
    )
}

function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-[var(--primary-400)]">{title}</h3>
            <p className="text-[var(--text-200)] leading-relaxed">
                {description}
            </p>
        </div>
    )
}
