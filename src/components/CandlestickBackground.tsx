function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  const value = x - Math.floor(x);
  return Math.round(value * 10000) / 10000;
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

const BAR_COUNT = 48;
const VIEW_W = 1440;
const VIEW_H = 500;

export function CandlestickBackground() {
  const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
    const height = 20 + pseudoRandom(i) * 140;
    const bodyTop = 10 + pseudoRandom(i + 100) * 60;
    const wickExtra = 10 + pseudoRandom(i + 200) * 30;
    const isUp = pseudoRandom(i + 300) > 0.45;
    return { height, bodyTop, wickExtra, isUp };
  });

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] overflow-hidden opacity-[0.06]"
      style={{
        maskImage: "linear-gradient(to top, black, transparent)",
        WebkitMaskImage: "linear-gradient(to top, black, transparent)",
      }}
      aria-hidden
    >
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      >
        {bars.map((bar, i) => {
          const x = (VIEW_W / BAR_COUNT) * i + 6;
          const width = VIEW_W / BAR_COUNT - 6;
          const color = bar.isUp ? "#14F195" : "#f87171";
          const bodyY = round(VIEW_H - bar.bodyTop - bar.height);
          const cx = round(x + width / 2);
          return (
            <g key={i}>
              <line
                x1={cx}
                x2={cx}
                y1={round(bodyY - bar.wickExtra)}
                y2={round(bodyY + bar.height + bar.wickExtra)}
                stroke={color}
                strokeWidth={2}
              />
              <rect x={x} y={bodyY} width={width} height={round(bar.height)} fill={color} rx={2} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
