"use client";

import { useState } from "react";

export function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block ml-1.5 align-middle">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        className="w-4 h-4 rounded-full border border-white/20 text-[9px] leading-[14px] text-center text-white/45 hover:text-white/85 hover:border-white/50 transition cursor-help"
        aria-label="Mais informações"
      >
        i
      </button>
      {open && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 top-6 w-60 rounded-xl bg-black/80 backdrop-blur-md text-zinc-100 text-xs leading-relaxed p-3 shadow-2xl border border-white/10">
          {text}
        </span>
      )}
    </span>
  );
}
