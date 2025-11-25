import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <main className="pt-32 max-w-[1400px] mx-auto px-10">
            <h1 className="text-5xl text-center mb-12 font-semibold" style={{ color: 'var(--text-50)' }}>
                Get In Touch
            </h1>
            <p className="text-center text-lg mb-16 max-w-2xl mx-auto" style={{ color: 'var(--text-200)' }}>
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ContactLink
                    title="Report Issues"
                    url="https://astrakit.featurebase.app"
                    description="Found a bug? Let us know!"
                />
                <ContactLink
                    title="GitHub ORG"
                    url="https://github.com/astrakit"
                    description="Check out our source code."
                />
                <ContactLink
                    title="Network Status"
                    url="https://status.astrakit.cc"
                    description="Check if systems are operational."
                />
                <ContactLink
                    title="Documentation / Help"
                    url="https://docs.astrakit.cc"
                    description="Guides and support resources."
                />
            </div>
        </main>
    );
}

function ContactLink({ title, url, description }: { title: string, url: string, description: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-lg group"
        >
            <h3 className="text-xl font-semibold mb-2 text-[var(--primary-400)] group-hover:text-[var(--primary-300)] transition-colors">
                {title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </h3>
            <p className="text-[var(--text-200)]">
                {description}
            </p>
        </a>
    )
}
