import HeroSection from '~/components/HeroSection/HeroSection';
import TeamSection from '~/components/TeamSection/TeamSection';
import DownloadSection from '~/components/DownloadSection/DownloadSection';

export default function Home() {
  return (
    <div className="relative z-10">
      <HeroSection />
      <TeamSection />
      <DownloadSection />
    </div>
  );
}
