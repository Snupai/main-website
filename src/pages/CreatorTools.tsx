import ToolCard from '~/components/ToolCard/ToolCard';

const tools = [
  {
    title: "Stream Integration",
    description: "Integrate Astrakit chat into your live streams."
  },
  {
    title: "Moderation Suite",
    description: "Advanced moderation tools to keep your community safe."
  },
  {
    title: "Analytics Dashboard",
    description: "Track engagement and community metrics."
  },
  {
    title: "Custom Bots",
    description: "Create custom bots to automate tasks and engage with your audience."
  }
];

export default function CreatorTools() {
  return (
    <main className="min-h-screen pt-32 relative overflow-hidden max-w-[1400px] mx-auto px-10 z-10">
      <div className="max-w-7xl mx-auto py-10 relative">
        <h1 className="text-5xl text-center mb-5 font-semibold" style={{ color: 'var(--text-50)' }}>Creator Tools</h1>
        <p className="text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed" style={{ color: 'var(--text-200)' }}>
          Tools for content creators.
        </p>

        <div className="grid grid-cols-2 gap-6 px-5">
          {tools.map((tool) => (
            <ToolCard key={tool.title} title={tool.title} description={tool.description} />
          ))}
        </div>
      </div>
    </main>
  );
}
