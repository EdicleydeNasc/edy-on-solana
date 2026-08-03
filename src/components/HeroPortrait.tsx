export function HeroPortrait() {
  const braidCount = 7;

  return (
    <div className="relative w-56 h-72 mx-auto md:mx-0 shrink-0" aria-hidden>
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/30 to-emerald-400/30 blur-2xl" />
      <svg
        viewBox="0 0 240 300"
        className="relative w-full h-full drop-shadow-[0_0_25px_rgba(153,69,255,0.35)]"
      >
        <defs>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5a3826" />
            <stop offset="100%" stopColor="#2a1810" />
          </linearGradient>
          <linearGradient id="braidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9945FF" />
            <stop offset="100%" stopColor="#14F195" />
          </linearGradient>
        </defs>

        {Array.from({ length: braidCount }, (_, i) => {
          const startX = 55 + i * 18;
          const sway = i % 2 === 0 ? 16 : -16;
          return (
            <path
              key={i}
              d={`M ${startX} 72 C ${startX + sway} 140, ${startX - sway} 210, ${startX + sway / 2} 285`}
              stroke="url(#braidGrad)"
              strokeWidth={6}
              fill="none"
              strokeLinecap="round"
              opacity={0.85}
            />
          );
        })}

        <rect x="100" y="148" width="40" height="55" fill="url(#skinGrad)" rx="12" />
        <ellipse cx="120" cy="102" rx="46" ry="55" fill="url(#skinGrad)" />

        <circle cx="103" cy="98" r="3.5" fill="#0d0221" />
        <circle cx="137" cy="98" r="3.5" fill="#0d0221" />
        <path
          d="M 108 122 Q 120 128 132 122"
          stroke="#0d0221"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        <circle cx="76" cy="88" r="3" fill="#14F195" />
        <circle cx="167" cy="112" r="3" fill="#9945FF" />
        <circle cx="185" cy="80" r="2" fill="#14F195" />
        <path d="M 76 88 L 92 94" stroke="#14F195" strokeWidth="1.5" opacity="0.7" />
        <path d="M 167 112 L 150 108" stroke="#9945FF" strokeWidth="1.5" opacity="0.7" />
        <path d="M 185 80 L 167 90" stroke="#14F195" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
}
