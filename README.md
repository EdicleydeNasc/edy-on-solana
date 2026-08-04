# 🪐 Edy on Solana

Aplicativo Web3 onde você conecta a carteira **Phantom**, vê seu saldo em **SOL**
(convertido também para Reais) e assina mensagens **on-chain** — tudo na **Devnet**
da Solana, sem gastar nada.

---

## ✨ O que o app faz

- 🔌 **Conecta a carteira Phantom** via Solana Wallet Adapter
- 💰 **Mostra o saldo em SOL**, convertido em tempo real para Reais (BRL)
- ✍️ **Mural de mensagens assinadas digitalmente** — prova criptográfica de
  autoria, sem custo e sem transação on-chain
- 🎨 **Avatar único** gerado a partir do endereço de cada carteira conectada
- ℹ️ **Tooltips explicativos** nos termos técnicos, pensados para quem nunca
  usou Web3
- 🌌 **Design premium**: fundo de candlestick discreto, animações suaves e
  retrato ilustrado com iluminação neon

---

## 🌐 Demo

🔗 App publicado: [edy-on-solana.vercel.app](https://edy-on-solana.vercel.app)

---

## 🛠️ Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [@solana/web3.js](https://github.com/anza-xyz/solana-web3.js)
- [Solana Wallet Adapter](https://github.com/anza-xyz/wallet-adapter) (`wallet-adapter-react`, `wallet-adapter-react-ui`, `wallet-adapter-base`, `wallet-adapter-wallets`)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Configurando a Phantom para Devnet

Por padrão a Phantom mostra a Mainnet. Para testar sem gastar SOL de verdade:

1. Abra a Phantom → ⚙️ **Configurações** → **Developer Settings**
2. Ative **Testnet Mode**
3. No seletor de rede da Phantom, escolha **Solana Devnet**
4. Sem saldo? Pegue SOL de teste grátis em https://faucet.solana.com

## 📁 Estrutura

```
src/
├─ app/
│  ├─ layout.tsx                # Provider da carteira + fontes
│  ├─ page.tsx                  # Página principal
│  └─ globals.css               # Estilos globais e animações
└─ components/
   ├─ WalletContextProvider.tsx # Contexto do Wallet Adapter (Phantom)
   ├─ PhantomConnectButton.tsx  # Botão de conexão (somente Phantom)
   ├─ BalanceCard.tsx           # Saldo em SOL / BRL
   ├─ MessageBoard.tsx          # Mural de mensagens assinadas
   ├─ WalletAvatar.tsx          # Avatar gerado a partir do endereço
   ├─ HeroPortrait.tsx          # Ilustração da hero section
   ├─ CandlestickBackground.tsx # Fundo decorativo animado
   ├─ DevnetCard.tsx            # Aviso de rede de testes
   ├─ PreviewMockup.tsx         # Prévia para visitantes sem carteira
   ├─ GrainOverlay.tsx          # Textura sutil de fundo
   └─ InfoTooltip.tsx           # Tooltip "?" explicativo
```

## ⚠️ Aviso

Este projeto usa exclusivamente a **Devnet** (rede de testes) da Solana —
nenhum valor real é movimentado. As mensagens do mural vivem apenas na sessão
do navegador (sem banco de dados) e são apagadas ao recarregar a página.
