import DonationCard from '~/components/DonationCard/DonationCard';
import ToolCard from '~/components/ToolCard/ToolCard';

const reasons = [
  {
    title: "Keep It Free",
    description: "Your donations ensure Astrakit remains free for everyone"
  },
  {
    title: "Server Costs",
    description: "Help us maintain reliable servers and infrastructure"
  },
  {
    title: "Development",
    description: "Support ongoing development and new features"
  }
];

export default function Donate() {
  return (
    <main className="min-h-screen pt-32 relative overflow-hidden max-w-[1400px] mx-auto px-10 z-10">
      <div className="max-w-7xl mx-auto py-10 relative">
        <h1 className="text-5xl text-center mb-5 font-semibold" style={{ color: 'var(--text-50)' }}>Support Astrakit</h1>
        <p className="text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed" style={{ color: 'var(--text-200)' }}>
          Free and open-source, funded by donations.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-20">
          <DonationCard
            title="One-Time Donation"
            amounts={['$5', '$10', '$25', '$50']}
            buttonText="Donate Now"
          />
          <DonationCard
            title="Monthly Support"
            amounts={['$5/mo', '$10/mo', '$25/mo', '$50/mo']}
            buttonText="Subscribe"
          />
        </div>

        <div>
          <h2 className="text-4xl text-center mb-10 font-semibold" style={{ color: 'var(--text-50)' }}>Why Donate?</h2>
          <div className="grid grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <ToolCard key={reason.title} title={reason.title} description={reason.description} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
