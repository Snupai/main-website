export default function DownloadSection() {
  return (
    <section id="download" className="py-24 text-center">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Download</h2>
        <p className="text-text-300 mb-6">Current version: <strong>ALPHA</strong></p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary-200 px-5 py-2.5 font-semibold text-background-950 hover:bg-primary-300 transition-colors"
          >
            F-Droid
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary-200 px-5 py-2.5 font-semibold text-background-950 hover:bg-primary-300 transition-colors"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
