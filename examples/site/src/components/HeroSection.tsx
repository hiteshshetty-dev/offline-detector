import React from 'react';
import EthernetCable from './EthernetCable';
import { useOfflineDetector } from '@/hooks/useOfflineDetector';

const scrollToFeatures = () => {
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const HeroSection = () => {
  const { isOnline } = useOfflineDetector();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span
            className={`title-gradient bg-clip-text text-transparent transition-all duration-500`}
          >
            Offline Detector
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Real-time network connectivity detection for modern web applications
        </p>

        <div className="pt-8 mr-[10%]">
          <EthernetCable isOnline={isOnline} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
            onClick={() =>
              window.open(
                'https://github.com/hiteshshetty-dev/offline-detector',
                '_blank'
              )
            }
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToFeatures}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Scroll to features section"
          >
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn More
            </span>
            <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
              <svg
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
