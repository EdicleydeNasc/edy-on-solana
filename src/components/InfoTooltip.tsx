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
        className="w-4 h-4 rounded-full bg-white/15 text-[10px] leading-4 text-center text-white/80 hover:bg-white/25 transition cursor-help"
        aria-label="Mais informações"
      >
        ?
      </button>
      {open && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 top-6 w-60 rounded-lg bg-zinc-900 text-zinc-100 text-xs leading-relaxed p-3 shadow-xl border border-white/10">
          {text}
        </span>
      )}
    </span>
  );
}
