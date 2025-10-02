import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      title: 'Real-time Detection',
      description:
        'Instantly detect network changes with event-driven monitoring',
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
          <svg
            className="w-6 h-6 text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      title: 'TypeScript Ready',
      description:
        'Built with TypeScript for better developer experience and type safety',
    },
    {
      icon: (
        <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      title: 'Lightweight',
      description:
        'Minimal footprint with minimal dependencies for optimal performance',
    },
  ];

  return (
    <section id="features" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Network Monitoring Made Simple
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A lightweight, reliable solution for monitoring network connectivity
            in your applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const borderColors = [
              'hover:border-blue-500/50',
              'hover:border-green-500/50',
              'hover:border-yellow-500/50',
            ];
            return (
              <div
                key={index}
                className={`bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:bg-gray-800/70 text-center transition-colors duration-200 ${borderColors[index]}`}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
