export default function TeamSection() {
  return (
    <section id="team" className="-py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-10">Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-7xl">
          {['catpawzz', 'snupai', 'yuuiko'].map((username) => (
            <div key={username} className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(127,0,255,0.3)]">
              <iframe src={`https://api.astrakit.cc/iframe-profile?username=${username}`} className="w-full h-64 md:h-56 border-0"></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
