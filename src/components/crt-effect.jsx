/**
 * @typedef {Object} CrtEffectProps
 * @property {React.ReactNode} children
 */

/**
 * CRT screen effect wrapper component
 * @param {CrtEffectProps} props
 */
export function CrtEffect({ children }) {
  return (
    <div className="relative w-full max-w-4xl">
      {/* CRT screen effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanlines */}
        <div className="absolute inset-0 bg-scanlines opacity-10 z-10"></div>

        {/* Screen flicker */}
        <div className="absolute inset-0 screen-flicker opacity-20 z-10"></div>

        {/* CRT glow */}
        <div className="absolute -inset-1 bg-green-500 opacity-10 blur-xl z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>
        {`
        @keyframes flicker {
          0% { opacity: 0.27861; }
          5% { opacity: 0.34769; }
          10% { opacity: 0.23604; }
          15% { opacity: 0.90626; }
          20% { opacity: 0.18128; }
          25% { opacity: 0.83891; }
          30% { opacity: 0.65583; }
          35% { opacity: 0.67807; }
          40% { opacity: 0.26559; }
          45% { opacity: 0.84693; }
          50% { opacity: 0.96019; }
          55% { opacity: 0.08594; }
          60% { opacity: 0.20313; }
          65% { opacity: 0.71988; }
          70% { opacity: 0.53455; }
          75% { opacity: 0.37288; }
          80% { opacity: 0.71428; }
          85% { opacity: 0.70419; }
          90% { opacity: 0.7003; }
          95% { opacity: 0.36108; }
          100% { opacity: 0.24387; }
        }
        
        .screen-flicker {
          animation: flicker 0.15s infinite;
        }
        
        .bg-scanlines {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(32, 128, 32, 0.2) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
        }
        `}
      </style>
    </div>
  )
}
