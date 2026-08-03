"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { InfoTooltip } from "./InfoTooltip";
import { WalletAvatar } from "./WalletAvatar";

type SignedMessage = {
  id: string;
  text: string;
  address: string;
  timestamp: number;
};

export function MessageBoard() {
  const { publicKey, signMessage } = useWallet();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<SignedMessage[]>([]);
  const [signing, setSigning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSend() {
    if (!publicKey || !signMessage || !text.trim()) return;
    setSigning(true);
    setError(null);
    try {
      const encoded = new TextEncoder().encode(text.trim());
      await signMessage(encoded);
      setMessages((prev) => [
        {
          id: crypto.randomUUID(),
          text: text.trim(),
          address: publicKey.toBase58(),
          timestamp: Date.now(),
        },
        ...prev,
      ]);
      setText("");
    } catch {
      setError("Assinatura cancelada ou algo deu errado. Tente de novo.");
    } finally {
      setSigning(false);
    }
  }

  if (!publicKey) return null;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
      <div className="flex items-center text-sm text-white/60 mb-3">
        Mural de mensagens assinadas
        <InfoTooltip text="Ao enviar, sua carteira 'assina' a mensagem digitalmente — uma prova criptográfica de que foi você quem escreveu, sem gastar nada e sem enviar transação para a blockchain." />
      </div>

      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escreva algo e assine com sua carteira..."
          className="flex-1 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-purple-400"
        />
        <button
          onClick={handleSend}
          disabled={signing || !text.trim()}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-medium disabled:opacity-40 whitespace-nowrap"
        >
          {signing ? "Assinando..." : "Assinar e enviar"}
        </button>
      </div>

      {error && <p className="text-red-400 text-xs mb-3">{error}</p>}

      <div className="space-y-3 max-h-72 overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-white/30 text-sm">Nenhuma mensagem ainda. Seja a primeira!</p>
        )}
        {messages.map((m) => (
          <div key={m.id} className="flex items-start gap-3 rounded-lg bg-black/20 p-3">
            <WalletAvatar address={m.address} size={28} />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm break-words">{m.text}</p>
              <p className="text-white/30 text-[11px] mt-1">
                assinado por {m.address.slice(0, 4)}...{m.address.slice(-4)} ·{" "}
                {new Date(m.timestamp).toLocaleTimeString("pt-BR")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
