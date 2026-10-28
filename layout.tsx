import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Viva Connecta | Soluções em Conectividade para Empresas",
    template: "%s | Viva Connecta",
  },
  description:
    "Viva Connecta — soluções em telecomunicações e conectividade para empresas em Guarulhos e região. Parceira Vivo Empresas.",
  keywords: [
    "telecomunicações para empresas",
    "internet empresarial Guarulhos",
    "telefonia móvel empresarial",
    "fibra para empresas",
    "Vivo Empresas parceira",
    "conectividade corporativa Guarulhos",
  ],
  authors: [{ name: "Viva Connecta" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Viva Connecta | Soluções em Conectividade para Empresas",
    description:
      "Soluções em telecomunicações e conectividade para empresas em Guarulhos e região. Parceira Vivo Empresas.",
    url: SITE_URL,
    siteName: "Viva Connecta",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viva Connecta | Soluções em Conectividade para Empresas",
    description:
      "Soluções em telecomunicações e conectividade para empresas em Guarulhos e região. Parceira Vivo Empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base-deep font-body text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
