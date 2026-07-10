# HalOS — Tanıtım Sitesi

Sebze-meyve hal ERP ürünü **HalOS** için Next.js 14 + TypeScript + Tailwind ile
yapılmış statik tanıtım (landing) sitesi. Vercel'de yayınlanmak üzere hazırdır.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Yapı

```
halos-web/
├── app/
│   ├── layout.tsx      # metadata (SEO) + Microsoft Clarity
│   ├── page.tsx        # tek sayfa; bölümleri sırayla birleştirir
│   └── globals.css     # Tailwind + tema bileşen sınıfları
├── components/
│   ├── Header.tsx      # sticky nav + mobil menü
│   ├── Hero.tsx        # üst bölüm
│   ├── Stats.tsx       # sayısal şerit
│   ├── Features.tsx    # e-belge otomasyon kartları
│   ├── Modules.tsx     # accordion — entegre ticari modüller (Atlas tarzı)
│   ├── WhyHalOS.tsx    # farklılaştırıcılar (AI/bulut/offline/IoT)
│   ├── Compare.tsx     # HalOS vs klasik programlar tablosu
│   ├── Pricing.tsx     # 3 paket (statik, tanıtım fiyatı)
│   ├── Contact.tsx     # iletişim + demo formu
│   ├── Footer.tsx
│   └── ClarityAnalytics.tsx
└── .env.example
```

## Microsoft Clarity

`clarity.microsoft.com` üzerinden bir proje aç, ID'yi al ve ortam değişkeni olarak
ver. ID yoksa hiçbir analitik scripti yüklenmez (dev'de sessiz).

- Yerelde: `.env.local` içine `NEXT_PUBLIC_CLARITY_ID=xxxxx`
- Vercel'de: **Project Settings → Environment Variables → `NEXT_PUBLIC_CLARITY_ID`**

## Vercel'e Yayınlama

1. Bu klasörü bir Git deposuna koy (veya `vercel` CLI ile deploy et).
2. Vercel'de **New Project** → repoyu seç → framework otomatik "Next.js".
3. Environment Variables'a `NEXT_PUBLIC_CLARITY_ID` ekle.
4. Deploy. Özel alan adı (halos.com.tr) Vercel → Domains'ten bağlanır.

> İçerik şimdilik **statiktir**. Form `mailto` ile açılır; ileride Resend/Formspree
> bağlanabilir. Fiyatlar tanıtım amaçlıdır.
