import React from 'react';

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.1),transparent_50%)]" />
      </div>
      <div className="absolute inset-0 animate-pulse-slow opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.2),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,107,0,0.15),transparent_40%)]" />
      </div>
    </div>
  );
};

export default GradientBackground;