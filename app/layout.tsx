import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClarityAnalytics from "@/components/ClarityAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://halos.com.tr"),
  title: "HalOS — Sebze Meyve Hali için AI'lı Bulut ERP",
  description:
    "HalOS, sebze-meyve hal komisyoncuları için HKS künye, hal tipi e-fatura, müstahsil makbuzu, cari, kasa ve çek/senet süreçlerini tek ekranda yöneten; yapay zeka, bulut ve mobil doğuştan bir hal işletim sistemidir.",
  keywords: [
    "hal programı",
    "hal yazılımı",
    "hal otomasyonu",
    "sebze meyve hal ERP",
    "HKS künye",
    "hal tipi e-fatura",
    "komisyoncu programı",
    "müstahsil makbuzu",
  ],
  openGraph: {
    title: "HalOS — Sebze Meyve Hali için AI'lı Bulut ERP",
    description:
      "Künye, e-fatura, cari, kasa, çek/senet + yapay zeka muhasebeci. Bulut doğuştan, her yerden, oto-güncel.",
    type: "website",
    locale: "tr_TR",
    siteName: "HalOS",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        {children}
        <ClarityAnalytics />
      </body>
    </html>
  );
}
