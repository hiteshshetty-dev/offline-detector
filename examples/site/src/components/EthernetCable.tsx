import React from 'react';

interface EthernetCableProps {
  isOnline: boolean;
}
const EthernetCable = ({ isOnline }: EthernetCableProps) => {
  return (
    <div
      className={`cable-container justify-end h-60 sm:h-80 ${isOnline ? 'connected' : 'disconnected'}`}
    >
      <EthernetCableRJ45 isOnline={isOnline} />
      <CableConnector isOnline={isOnline} />
    </div>
  );
};

const EthernetCableRJ45 = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <div className={`cable-rj45 ${isOnline ? 'connected' : 'disconnected'}`}>
      <div className="cable"></div>
      <div className="rj45Connector">
        <div className="lines">
          <div className="semi-line line"></div>
          <div className="full-line line"></div>
          <div className="semi-line line"></div>
          <div className="full-line line"></div>
          <div className="semi-line line"></div>
        </div>
      </div>
      <div className="connector">
        <div className="gold-pins">
          <div className="gold-pin"></div>
          <div className="gold-pin"></div>
          <div className="gold-pin"></div>
          <div className="gold-pin"></div>
          <div className="gold-pin"></div>
          <div className="gold-pin"></div>
        </div>
      </div>
    </div>
  );
};
const CableConnector = ({ isOnline }: { isOnline: boolean }) => {
  return (
    <div
      className={`cable-connector flex items-center justify-center ${isOnline ? 'connected' : 'disconnected'}`}
    >
      <div
        className={`led w-3 h-3 sm:w-4 sm:h-4 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
      ></div>
      <div className="cable-connector-text px-1 sm:px-2 text-sm sm:text-base">
        {isOnline ? 'Connected' : 'Disconnected'}
      </div>
    </div>
  );
};
export default EthernetCable;
