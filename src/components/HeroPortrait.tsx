export function HeroPortrait() {
  const braids = [
    { x: 52, sway: 20, width: 5, dotAt: 0.4 },
    { x: 68, sway: -14, width: 6, dotAt: null },
    { x: 84, sway: 16, width: 5, dotAt: 0.6 },
    { x: 100, sway: -10, width: 6, dotAt: null },
    { x: 116, sway: 12, width: 5, dotAt: 0.3 },
    { x: 132, sway: -16, width: 6, dotAt: null },
    { x: 148, sway: 14, width: 5, dotAt: 0.55 },
    { x: 164, sway: -20, width: 6, dotAt: null },
  ];

  return (
    <div className="relative w-64 h-80 mx-auto md:mx-0 shrink-0" aria-hidden>
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-purple-500/25 via-fuchsia-400/10 to-emerald-400/25 blur-3xl" />
      <div className="absolute inset-x-8 top-6 h-40 rounded-full bg-emerald-400/15 blur-2xl" />

      <svg
        viewBox="0 0 240 320"
        className="relative w-full h-full drop-shadow-[0_0_35px_rgba(153,69,255,0.3)]"
      >
        <defs>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6b4530" />
            <stop offset="100%" stopColor="#2a1810" />
          </linearGradient>
          <radialGradient id="faceHighlight" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="braidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9945FF" />
            <stop offset="55%" stopColor="#6b8fe0" />
            <stop offset="100%" stopColor="#14F195" />
          </linearGradient>
          <radialGradient id="rimLight" cx="50%" cy="35%" r="55%">
            <stop offset="70%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#14F195" stopOpacity="0.25" />
          </radialGradient>
        </defs>

        {/* soft particles for depth */}
        {[
          [30, 40, 1.4],
          [205, 60, 1.1],
          [20, 140, 1],
          [215, 180, 1.3],
          [40, 230, 1],
          [195, 250, 1.2],
        ].map(([px, py, pr], i) => (
          <circle key={i} cx={px} cy={py} r={pr} fill="#ffffff" opacity={0.35} />
        ))}

        {/* braids */}
        {braids.map((b, i) => (
          <g key={i}>
            <path
              d={`M ${b.x} 76 C ${b.x + b.sway} 150, ${b.x - b.sway} 220, ${b.x + b.sway / 2} 300`}
              stroke="url(#braidGrad)"
              strokeWidth={b.width}
              fill="none"
              strokeLinecap="round"
              opacity={0.8}
            />
            {b.dotAt && (
              <circle
                cx={b.x + b.sway * (b.dotAt - 0.5)}
                cy={76 + (300 - 76) * b.dotAt}
                r={2.2}
                fill="#c9f7e5"
                opacity={0.9}
              />
            )}
          </g>
        ))}

        <ellipse cx="120" cy="112" rx="52" ry="60" fill="url(#rimLight)" />

        {/* neck + head */}
        <rect x="100" y="158" width="40" height="55" fill="url(#skinGrad)" rx="12" />
        <ellipse cx="120" cy="108" rx="46" ry="55" fill="url(#skinGrad)" />
        <ellipse cx="120" cy="108" rx="46" ry="55" fill="url(#faceHighlight)" />

        {/* face */}
        <path
          d="M 96 100 Q 103 94 111 98"
          stroke="#1a0f08"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 129 98 Q 137 94 144 100"
          stroke="#1a0f08"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="103" cy="104" r="3.2" fill="#0d0221" />
        <circle cx="137" cy="104" r="3.2" fill="#0d0221" />
        <path
          d="M 106 130 Q 120 138 136 128"
          stroke="#1a0f08"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />

        {/* holographic accents, asymmetric */}
        <g opacity={0.8}>
          <circle cx="58" cy="70" r="2.5" fill="#14F195" />
          <path d="M 58 70 L 78 82" stroke="#14F195" strokeWidth="1.2" opacity="0.6" />
          <circle cx="190" cy="130" r="2.5" fill="#9945FF" />
          <path d="M 190 130 L 165 118" stroke="#9945FF" strokeWidth="1.2" opacity="0.6" />
          <circle cx="205" cy="60" r="1.6" fill="#14F195" />
          <path
            d="M 40 190 a 18 18 0 0 1 25 -10"
            stroke="#9945FF"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            strokeDasharray="3 4"
          />
          <path
            d="M 190 210 a 22 22 0 0 0 -28 -14"
            stroke="#14F195"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            strokeDasharray="3 4"
          />
        </g>
      </svg>
    </div>
  );
}
