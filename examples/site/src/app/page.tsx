'use client';

import { useState } from 'react';
import { useOfflineDetector } from '@/hooks/useOfflineDetector';
import Footer from '../components/Footer';
import InstallationSection from '../components/InstallationSection';
import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';

interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export default function Home() {
  return (
    <div className="min-h-screen hero-gradient">
      <HeroSection />
      <FeatureSection />
      <InstallationSection />
      <Footer />
    </div>
  );
}