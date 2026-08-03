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
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
    >
      👻 {label}
    </button>
  );
}
