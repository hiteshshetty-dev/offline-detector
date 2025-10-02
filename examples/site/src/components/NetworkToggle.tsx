'use client';

import React, { useState, useEffect } from 'react';
import {
  createNetworkInterceptor,
  getNetworkInterceptor,
} from '@/utils/networkInterceptor';

const NetworkToggle = () => {
  const [isNetworkBlocked, setIsNetworkBlocked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interceptor = createNetworkInterceptor();

    return () => {
      interceptor.destroy();
    };
  }, []);

  const handleToggle = () => {
    const interceptor = getNetworkInterceptor();
    if (interceptor) {
      interceptor.toggleNetwork();
      const newState = interceptor.isNetworkBlocked();
      setIsNetworkBlocked(newState);
    }
  };

  const getStatusText = () => {
    return isNetworkBlocked ? 'Network Blocked' : 'Network Active';
  };

  const getStatusColor = () => {
    return isNetworkBlocked ? 'text-red-400' : 'text-green-400';
  };

  const getToggleColor = () => {
    return isNetworkBlocked ? 'bg-red-500' : 'bg-green-500';
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl max-w-sm">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col w-32">
              <span className="text-xs text-gray-400 font-medium">
                Network Simulator
              </span>
              <span className={`text-sm font-semibold ${getStatusColor()}`}>
                {getStatusText()}
              </span>
            </div>

            <div className="relative">
              <button
                onClick={handleToggle}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${getToggleColor()}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isNetworkBlocked ? 'translate-x-1' : 'translate-x-6'
                  }`}
                />
              </button>

              {showTooltip && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 shadow-lg border border-gray-600">
                  <div className="text-center">
                    Click to {isNetworkBlocked ? 'unblock' : 'block'} network
                    requests
                  </div>
                  <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkToggle;
