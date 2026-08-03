"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletAvatar } from "@/components/WalletAvatar";
import { BalanceCard } from "@/components/BalanceCard";
import { MessageBoard } from "@/components/MessageBoard";
import { InfoTooltip } from "@/components/InfoTooltip";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-[#0d0221] via-[#1a0b2e] to-[#0a1f1c] text-white">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <header className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Edy on Solana
            </h1>
            {publicKey && <WalletAvatar address={publicKey.toBase58()} />}
          </div>
          <WalletMultiButton />
        </header>

        <div className="mb-6 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200 text-xs flex items-center">
          Você está na <strong className="mx-1">Devnet</strong> — rede de testes da Solana, sem dinheiro real.
          <InfoTooltip text="A Devnet é uma versão de testes da blockchain Solana, feita para desenvolvedores praticarem. O SOL usado aqui não tem valor real e pode ser obtido de graça (faucet)." />
        </div>

        {!publicKey && (
          <div className="text-center py-16 text-white/50">
            <p className="mb-2 inline-flex items-center">
              Conecte sua carteira Phantom para começar
              <InfoTooltip text="Uma carteira (wallet) é como uma conta bancária da blockchain — guarda suas moedas e permite provar que ações são suas, através de assinaturas digitais." />
            </p>
          </div>
        )}

        {publicKey && (
          <div className="space-y-6">
            <BalanceCard />
            <MessageBoard />
          </div>
        )}

        <footer className="mt-12 text-center text-white/20 text-xs">
          Construído por Edy com Claude Code + Solana AI Kit
        </footer>
      </div>
    </main>
  );
}
