"use client";

import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { InfoTooltip } from "./InfoTooltip";

export function BalanceCard() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [brlPrice, setBrlPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!publicKey) {
      setSolBalance(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    connection
      .getBalance(publicKey)
      .then((lamports) => {
        if (!cancelled) setSolBalance(lamports / LAMPORTS_PER_SOL);
      })
      .catch(() => {
        if (!cancelled) setSolBalance(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [connection, publicKey]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=brl")
      .then((res) => res.json())
      .then((data) => setBrlPrice(data?.solana?.brl ?? null))
      .catch(() => setBrlPrice(null));
  }, []);

  if (!publicKey) return null;

  const brlValue = solBalance != null && brlPrice != null ? solBalance * brlPrice : null;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
      <div className="flex items-center text-sm text-white/60 mb-1">
        Saldo
        <InfoTooltip text="É o quanto de SOL (a moeda da rede Solana) essa carteira tem. Como estamos na Devnet, é SOL de teste — não vale dinheiro real." />
      </div>
      {loading ? (
        <div className="text-2xl font-semibold text-white/40">Carregando...</div>
      ) : (
        <>
          <div className="text-3xl font-bold text-white">
            {solBalance != null ? solBalance.toFixed(4) : "0.0000"}{" "}
            <span className="text-lg text-purple-300">SOL</span>
          </div>
          <div className="text-sm text-emerald-300 mt-1">
            {brlValue != null ? `≈ R$ ${brlValue.toFixed(2)}` : "Cotação indisponível"}
          </div>
        </>
      )}
    </div>
  );
}
