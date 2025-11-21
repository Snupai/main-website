interface DonationCardProps {
  title: string;
  amounts: string[];
  buttonText: string;
}

export default function DonationCard({ title, amounts, buttonText }: DonationCardProps) {
  return (
    <div
      className="p-9 rounded-xl transition-all duration-300 text-center hover:-translate-y-1 hover:bg-black/40 hover:shadow-[0_10px_30px_rgba(127,0,255,0.3)]"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--primary-800)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-600)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--primary-800)'}
    >
      <h2 className="text-2xl font-semibold mb-5" style={{ color: 'var(--text-50)' }}>{title}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {amounts.map((amount) => (
          <button
            key={amount}
            className="py-3 px-4 rounded-lg text-lg cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--primary-800)',
              color: 'var(--text-200)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(127, 0, 255, 0.2)';
              e.currentTarget.style.borderColor = 'var(--primary-500)';
              e.currentTarget.style.color = 'var(--primary-300)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'var(--primary-800)';
              e.currentTarget.style.color = 'var(--text-200)';
            }}
          >
            {amount}
          </button>
        ))}
      </div>
      <button
        className="border-none py-4 px-8 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 w-full hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(127,0,255,0.5)]"
        style={{
          backgroundColor: 'var(--primary-500)',
          color: 'var(--text-50)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
      >
        {buttonText}
      </button>
    </div>
  );
}
