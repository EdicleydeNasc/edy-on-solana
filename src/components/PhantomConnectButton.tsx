"use client";

import { useEffect, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";

const PHANTOM_NAME = "Phantom";
const PHANTOM_INSTALL_URL = "https://phantom.app/";

export function PhantomConnectButton() {
  const { wallets, wallet, select, connect, connecting, connected, publicKey, disconnect } =
    useWallet();

  const phantomWallet = useMemo(
    () => wallets.find((w) => w.adapter.name === PHANTOM_NAME),
    [wallets]
  );

  const isInstalled = phantomWallet?.adapter.readyState === WalletReadyState.Installed;

  useEffect(() => {
    if (phantomWallet && wallet?.adapter.name !== PHANTOM_NAME) {
      select(phantomWallet.adapter.name);
    }
  }, [phantomWallet, wallet, select]);

  async function handleClick() {
    if (connected) {
      await disconnect();
      return;
    }
    if (!isInstalled) {
      window.open(PHANTOM_INSTALL_URL, "_blank", "noopener,noreferrer");
      return;
    }
    try {
      await connect();
    } catch {
      // usuário cancelou a conexão no popup da Phantom
    }
  }

  const label = connected
    ? `${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}`
    : connecting
      ? "Conectando..."
      : isInstalled
        ? "Conectar Phantom"
        : "Instalar Phantom";

  return (
    <div className="relative inline-block group">
      <button
        onClick={handleClick}
        disabled={connecting}
        className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(153,69,255,0.6)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_-6px_rgba(20,241,149,0.55)] hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="6" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.5" cy="14" r="1.4" fill="currentColor" />
        </svg>
        {label}
      </button>

      <div
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 translate-y-1 rounded-xl border border-white/10 bg-black/90 p-4 text-xs leading-relaxed text-white/70 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="mb-1 font-semibold text-white/90">O que é a Phantom?</p>
        <p>
          É uma carteira digital (extensão do navegador) para a blockchain Solana. Você precisa
          dela para conectar, ver seu saldo e assinar mensagens neste app.
        </p>
      </div>
    </div>
  );
}
