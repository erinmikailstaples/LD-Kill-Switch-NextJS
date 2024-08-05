'use client'

import { useState } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

export default function Home() {
  const { emergencySheltersOpen } = useFlags();
  const [isKillSwitchActive, setIsKillSwitchActive] = useState(false);

  const handleKillSwitch = () => {
    setIsKillSwitchActive(!isKillSwitchActive);
  };

  return (
    <div className="container">
      <h1>Jurassic World Control Panel</h1>
      <div className="control-panel">
        <button 
          className={`kill-switch ${isKillSwitchActive ? 'active' : ''}`} 
          onClick={handleKillSwitch}
        >
          {isKillSwitchActive ? 'DEACTIVATE' : 'ACTIVATE'} KILL SWITCH
        </button>
        <div className="status">
          <p>Emergency Shelters: {emergencySheltersOpen ? 'OPEN' : 'CLOSED'}</p>
          <p>Dinosaurs: {isKillSwitchActive ? 'LOCKED DOWN' : 'ROAMING'}</p>
        </div>
      </div>
    </div>
  );
}
