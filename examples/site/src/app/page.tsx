'use client';

import { useOfflineDetector } from '@/hooks/useOfflineDetector';
import Footer from '../components/Footer';
import InstallationSection from '../components/InstallationSection';
import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';
import NetworkToggle from '../components/NetworkToggle';
import StructuredData from '../components/StructuredData';

export default function Home() {
  const { isOnline } = useOfflineDetector();

  return (
    <>
      <StructuredData />
      <main className="min-h-screen hero-gradient">
        <NetworkToggle />
        <HeroSection isOnline={isOnline} />
        <FeatureSection />
        <InstallationSection />
        <Footer />
      </main>
    </>
  );
}
