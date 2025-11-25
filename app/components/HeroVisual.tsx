"use client";

export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0">
        {/* Primary gradient - soft blue from center */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(0, 113, 227, 0.08) 0%, transparent 60%)',
          }}
        />
        
        {/* Secondary gradient - subtle accent */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0, 113, 227, 0.06) 0%, transparent 50%)',
          }}
        />
        
        {/* Tertiary gradient - complementary */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 80% 60%, rgba(0, 119, 237, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Animated gradient orbs - very subtle */}
      <div className="absolute inset-0">
        {/* Large orb - top center */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'heroOrbFloat 20s ease-in-out infinite'
          }}
        />
        
        {/* Medium orb - bottom right */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(0, 119, 237, 0.12) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-5%',
            animation: 'heroOrbFloat 25s ease-in-out infinite 5s'
          }}
        />
        
        {/* Small orb - top left */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-12"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)',
            top: '10%',
            left: '-5%',
            animation: 'heroOrbFloat 18s ease-in-out infinite 10s'
          }}
        />
      </div>

      {/* Minimal geometric pattern - bridge concept */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <svg 
          viewBox="0 0 1200 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full max-w-6xl h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="heroBridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0071e3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0.3" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Elegant bridge arc */}
          <path
            d="M100 450 Q600 150 1100 450"
            stroke="url(#heroBridgeGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#heroGlow)"
            style={{
              strokeDasharray: '2000',
              strokeDashoffset: '2000',
              animation: 'drawLine 10s ease-in-out forwards'
            }}
          />
          
          {/* Minimal connection nodes */}
          <circle 
            cx="200" 
            cy="450" 
            r="4" 
            fill="#0071e3" 
            opacity="0.4"
            style={{
              animation: 'pulseSubtle 4s ease-in-out infinite'
            }}
          />
          <circle 
            cx="600" 
            cy="250" 
            r="5" 
            fill="#0071e3" 
            opacity="0.5"
            style={{
              animation: 'pulseSubtle 4s ease-in-out infinite 1.5s'
            }}
          />
          <circle 
            cx="1000" 
            cy="450" 
            r="4" 
            fill="#0071e3" 
            opacity="0.4"
            style={{
              animation: 'pulseSubtle 4s ease-in-out infinite 3s'
            }}
          />
        </svg>
      </div>

      {/* Premium mesh overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 30% 20%, rgba(0, 113, 227, 0.04) 0%, transparent 50%),
            radial-gradient(at 70% 80%, rgba(0, 119, 237, 0.03) 0%, transparent 50%),
            radial-gradient(at 50% 50%, rgba(0, 113, 227, 0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle noise texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
