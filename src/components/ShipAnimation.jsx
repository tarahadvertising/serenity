import React from 'react';

function ShipAnimation({ variant = 'default' }) {
  const shipClasses = variant === 'hero' 
    ? 'absolute bottom-20 left-10 w-32 h-24 animate-ship-sail opacity-80'
    : 'relative w-24 h-18 animate-ship-float';

  return (
    <div className={shipClasses}>
      <svg
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Ship Hull */}
        <path
          d="M10 40 Q10 60 30 65 L90 65 Q110 60 110 40 Z"
          fill="#1e293b"
          stroke="#0f172a"
          strokeWidth="2"
        />
        
        {/* Ship Deck */}
        <rect
          x="20"
          y="35"
          width="80"
          height="8"
          fill="#334155"
          rx="1"
        />
        
        {/* Bridge/Cabin */}
        <rect
          x="45"
          y="20"
          width="30"
          height="15"
          fill="#475569"
          stroke="#334155"
          strokeWidth="1"
          rx="2"
        />
        
        {/* Windows */}
        <rect x="50" y="23" width="6" height="4" fill="#0ea5e9" rx="1" />
        <rect x="58" y="23" width="6" height="4" fill="#0ea5e9" rx="1" />
        <rect x="66" y="23" width="6" height="4" fill="#0ea5e9" rx="1" />
        
        {/* Mast */}
        <rect
          x="58"
          y="5"
          width="4"
          height="20"
          fill="#64748b"
        />
        
        {/* Flag */}
        <path
          d="M62 5 L75 8 L62 11 Z"
          fill="#0d9488"
        />
        
        {/* Wake/Water effect */}
        <ellipse
          cx="30"
          cy="70"
          rx="15"
          ry="3"
          fill="#0ea5e9"
          opacity="0.3"
          className="animate-wave-move"
        />
        <ellipse
          cx="60"
          cy="72"
          rx="20"
          ry="4"
          fill="#0ea5e9"
          opacity="0.2"
          className="animate-wave-move"
          style={{ animationDelay: '0.5s' }}
        />
        <ellipse
          cx="90"
          cy="70"
          rx="15"
          ry="3"
          fill="#0ea5e9"
          opacity="0.3"
          className="animate-wave-move"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
}

export default ShipAnimation;
