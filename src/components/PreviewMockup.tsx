export function PreviewMockup() {
  return (
    <div className="relative">
      <div aria-hidden className="space-y-6 blur-[3px] opacity-40 select-none pointer-events-none">
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <div className="text-sm text-white/60 mb-1">Saldo</div>
          <div className="text-3xl font-bold text-white">
            2.4180 <span className="text-lg text-purple-300">SOL</span>
          </div>
          <div className="text-sm text-emerald-300 mt-1">≈ R$ 1.024,30</div>
        </div>
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
          <div className="text-sm text-white/60 mb-3">Mural de mensagens assinadas</div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-black/20 p-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-emerald-400 shrink-0" />
              <div className="flex-1">
                <p className="text-white text-sm">Explorando Web3 pela primeira vez 🚀</p>
                <p className="text-white/30 text-[11px] mt-1">assinado por 7xKp...3mQa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-6 py-5 text-center max-w-xs">
          <p className="text-sm text-white/70">
            Conecte sua carteira para ver seu saldo e assinar mensagens em tempo real
          </p>
        </div>
      </div>
    </div>
  );
}
