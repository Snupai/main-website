export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-white tracking-tight">
          Better Chat.<br />
          <span className="text-[var(--primary-200)]">Astrakit.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[var(--text-200)]">
          Experience truly secure and seamless communication with our free and open-source chat app.
        </p>
        <div className="flex gap-5 justify-center">
          <a
            href="#download"
            className="px-6 py-3 rounded-lg font-semibold bg-[var(--primary-200)] text-[var(--background-950)] hover:bg-[var(--primary-300)] transition-colors"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
