import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Card from './ui/CardComponent';

const CodeBlock = ({
  code,
  language = 'javascript',
  title,
}: {
  code: string;
  language?: string;
  title?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="mb-2">
          <span className="text-sm text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 text-xs bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white rounded transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          customStyle={{
            borderRadius: '8px',
            fontSize: '14px',
            padding: '16px',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const basicCode = `import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => console.log('Back online!'),
  onOffline: () => console.log('Gone offline!')
});

detector.start();`;

const advancedCode = `import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => {
    // Sync pending data
  },
  onOffline: () => {
    // Show offline indicator
  },
  stateChangeDebounceDelay: 1000,
  networkVerification: {
    enabled: true,
    url: 'https://api.example.com/health',
    requestTimeout: 5000,
    interval: 30000,
    maxFailures: 3
  },
  nativeEvents: {
    enabled: true
  }
});

detector.start();`;

const reactCode = `import { useEffect, useState } from 'react';
import { createOfflineDetector } from 'offline-detector';

function useOfflineDetector() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const detector = createOfflineDetector({
      onOnline: () => setIsOnline(true),
      onOffline: () => setIsOnline(false),
      networkVerification: {
        enabled: true,
        interval: 5000,
        maxFailures: 2
      }
    });

    detector.start();
    setIsOnline(detector.isOnline());

    return () => detector.destroy();
  }, []);

  return isOnline;
}

// Usage in component
function App() {
  const isOnline = useOfflineDetector();

  return (
    <div>
      <h1>My App</h1>
      {!isOnline && (
        <div className="offline-banner">
          You're currently offline
        </div>
      )}
    </div>
  );
}`;
const InstallationSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Get Started</h2>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Install the package
              </h3>
              <CodeBlock code="npm install offline-detector" language="bash" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Basic Usage
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Simple setup with default configuration
              </p>
              <CodeBlock code={basicCode} language="javascript" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Advanced Configuration
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Custom network verification, debouncing, and native events
              </p>
              <CodeBlock code={advancedCode} language="javascript" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                React Hook Example
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Custom hook for React applications with automatic cleanup
              </p>
              <CodeBlock code={reactCode} language="javascript" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InstallationSection;
