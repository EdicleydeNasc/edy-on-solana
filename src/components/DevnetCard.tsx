import { InfoTooltip } from "./InfoTooltip";

export function DevnetCard() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <p className="flex items-center text-xs text-white/45">
        Ambiente de testes (Devnet) — nenhum valor real é movimentado.
        <InfoTooltip text="A Devnet é uma versão de testes da blockchain Solana, feita para desenvolvedores praticarem. O SOL usado aqui não tem valor real e pode ser obtido de graça (faucet)." />
      </p>
    </div>
  );
}
