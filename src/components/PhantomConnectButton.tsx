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
    <button
      onClick={handleClick}
      disabled={connecting}
      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(153,69,255,0.6)] transition hover:shadow-[0_0_40px_-6px_rgba(20,241,149,0.55)] hover:brightness-110 disabled:opacity-60"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.5" cy="14" r="1.4" fill="currentColor" />
      </svg>
      {label}
    </button>
  );
}
