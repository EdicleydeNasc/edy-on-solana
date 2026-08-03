function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function WalletAvatar({ address, size = 40 }: { address: string; size?: number }) {
  const hash = hashString(address);
  const hue1 = Math.abs(hash) % 360;
  const hue2 = (hue1 + 65) % 360;

  return (
    <div
      className="rounded-full shrink-0 ring-2 ring-white/20"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, hsl(${hue1}, 75%, 55%), hsl(${hue2}, 75%, 45%))`,
      }}
      title={address}
    />
  );
}
