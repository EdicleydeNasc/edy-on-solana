import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WalletContextProvider } from "@/components/WalletContextProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Edy on Solana";
const description =
  "Conecte sua carteira Solana, veja seu saldo e assine mensagens on-chain.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://edy-on-solana.vercel.app",
    siteName: title,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
