"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletAvatar } from "@/components/WalletAvatar";
import { BalanceCard } from "@/components/BalanceCard";
import { MessageBoard } from "@/components/MessageBoard";
import { PhantomConnectButton } from "@/components/PhantomConnectButton";
import { CandlestickBackground } from "@/components/CandlestickBackground";
import { HeroPortrait } from "@/components/HeroPortrait";
import { GrainOverlay } from "@/components/GrainOverlay";
import { DevnetCard } from "@/components/DevnetCard";
import { PreviewMockup } from "@/components/PreviewMockup";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <main className="relative flex-1 min-h-screen overflow-hidden bg-[#08090b] text-white">
      <GrainOverlay />
      <CandlestickBackground />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-purple-600/10 blur-[160px]"
        aria-hidden
      />

      <div className="relative">
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-white/80">
            Edy <span className="text-white/30">on Solana</span>
          </span>
          {publicKey && (
            <div className="flex items-center gap-2">
              <WalletAvatar address={publicKey.toBase58()} size={24} />
              <span className="text-xs text-white/40">
                {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
              </span>
            </div>
          )}
        </header>

        <section className="max-w-6xl mx-auto px-6 pt-10 pb-20 md:pt-16 md:pb-28 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up">
              Construindo o futuro da{" "}
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Web3
              </span>{" "}
              com IA
            </h1>
            <p
              className="text-white/50 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Aplicativo Web3 na blockchain Solana. Conecte sua carteira, assine mensagens
              on-chain e descubra como a nova geração de aplicações descentralizadas funciona na
              prática.
            </p>
            <div
              className="flex flex-col items-center md:items-start gap-3 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <PhantomConnectButton />
              <p className="text-xs text-white/30">
                Requer a extensão Phantom · ambiente de testes, sem custo
              </p>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
            <HeroPortrait />
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-6 pb-24">
          <div className="mb-6">
            <DevnetCard />
          </div>

          {publicKey ? (
            <div className="space-y-6 animate-fade-slide-in">
              <BalanceCard />
              <MessageBoard />
            </div>
          ) : (
            <PreviewMockup />
          )}

          <footer className="mt-16 text-center text-white/20 text-xs">
            Edy Nascimento · 2026
          </footer>
        </section>
      </div>
    </main>
  );
}
