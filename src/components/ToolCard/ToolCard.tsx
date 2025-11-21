interface ToolCardProps {
  title: string;
  description: string;
}

export default function ToolCard({ title, description }: ToolCardProps) {
  return (
    <div
      className="p-9 rounded-xl transition-all duration-300 flex flex-col gap-5 hover:-translate-y-1 hover:bg-black/40 hover:shadow-[0_10px_30px_rgba(127,0,255,0.3)]"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--primary-800)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-600)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--primary-800)'}
    >
      <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-50)' }}>{title}</h2>
      <p className="leading-relaxed" style={{ color: 'var(--text-200)' }}>{description}</p>
    </div>
  );
}
