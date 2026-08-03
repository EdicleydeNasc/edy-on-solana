"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomConnectButton } from "@/components/PhantomConnectButton";
import { WalletAvatar } from "@/components/WalletAvatar";
import { BalanceCard } from "@/components/BalanceCard";
import { MessageBoard } from "@/components/MessageBoard";
import { InfoTooltip } from "@/components/InfoTooltip";
import { CandlestickBackground } from "@/components/CandlestickBackground";
import { HeroPortrait } from "@/components/HeroPortrait";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <main className="relative flex-1 min-h-screen overflow-hidden bg-gradient-to-br from-[#0d0221] via-[#1a0b2e] to-[#0a1f1c] text-white">
      <CandlestickBackground />

      <div className="relative max-w-4xl mx-auto px-4 py-10">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-emerald-300/80 mb-2">
              Um novo app Solana
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Edy on Solana
            </h1>
            <p className="text-white/50 mb-6 max-w-md mx-auto md:mx-0">
              Conecte sua carteira, acompanhe seu saldo e deixe uma mensagem assinada na
              blockchain — construído do zero com IA.
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <PhantomConnectButton />
              {publicKey && <WalletAvatar address={publicKey.toBase58()} />}
            </div>
          </div>
          <HeroPortrait />
        </section>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200 text-xs flex items-center">
            Você está na <strong className="mx-1">Devnet</strong> — rede de testes da Solana, sem
            dinheiro real.
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
      </div>
    </main>
  );
}
