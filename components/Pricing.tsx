const PLANS = [
  {
    name: "Başlangıç",
    tagline: "Tek kullanıcı, temel operasyon",
    price: "₺1.500",
    period: "/ay (yıllık)",
    features: [
      "HKS künye & hal tipi e-fatura",
      "Müstahsil makbuzu (e-MM)",
      "Cari, kasa, stok",
      "Gün sonu & satış raporları",
      "Bulut erişim + otomatik yedek",
      "1 kullanıcı",
    ],
    cta: "Demo Talep Et",
    highlight: false,
  },
  {
    name: "Profesyonel",
    tagline: "Büyüyen hal işletmesi için",
    price: "₺3.500",
    period: "/ay (yıllık)",
    features: [
      "Başlangıç'taki her şey",
      "Çek/senet + POS + virman",
      "e-Arşiv, e-İrsaliye, e-SMM",
      "Kantar & otomatik dara entegrasyonu",
      "Mobil patron uygulaması",
      "5 kullanıcı",
    ],
    cta: "Demo Talep Et",
    highlight: true,
  },
  {
    name: "Kurumsal",
    tagline: "Çok şube + AI + entegrasyon",
    price: "Teklif",
    period: "size özel",
    features: [
      "Profesyonel'deki her şey",
      "Yapay zeka muhasebeci & proaktif ajan",
      "Offline hal terminali",
      "Soğuk zincir / IoT",
      "Çoklu şube & konsolidasyon",
      "Sınırsız kullanıcı + öncelikli destek",
    ],
    cta: "İletişime Geç",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="fiyat" className="section bg-white">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Fiyatlandırma</span>
          <h2 className="heading mt-5">Halinize göre şeffaf paketler</h2>
          <div className="heading-divider" />
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Kurulum ve eğitim dahildir. Yıllık ödemede 2 ay hediye. Fiyatlar
            tanıtım amaçlıdır; kesin teklif için bizimle görüşün.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition ${
                p.highlight
                  ? "border-halos-500 bg-white shadow-2xl shadow-halos-500/15 ring-1 ring-halos-500/20 lg:-translate-y-2"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-lg"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-halos-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  En Popüler
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">
                  {p.price}
                </span>
                <span className="mb-1 text-sm text-slate-500">{p.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 font-bold text-halos-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#iletisim"
                className={`mt-8 ${p.highlight ? "btn-primary" : "btn-ghost"} w-full`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
