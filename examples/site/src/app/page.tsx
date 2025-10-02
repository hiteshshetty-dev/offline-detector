'use client';

import { useOfflineDetector } from '@/hooks/useOfflineDetector';
import Footer from '../components/Footer';
import InstallationSection from '../components/InstallationSection';
import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';
import NetworkToggle from '../components/NetworkToggle';

export default function Home() {
  const { isOnline } = useOfflineDetector();

  return (
    <div className="min-h-screen hero-gradient">
      <NetworkToggle />
      <HeroSection isOnline={isOnline} />
      <FeatureSection />
      <InstallationSection />
      <Footer />
    </div>
  );
}
