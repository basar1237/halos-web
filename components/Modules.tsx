"use client";

import { useState } from "react";

const MODULES = [
  {
    name: "Stok",
    body: "Çoklu birim ve döviz desteğiyle ihracat dahil stok alış/satış ve takibi. Stok Giriş, Çıkış ve Transfer Fişleri; anlık kalan mal, fire ve düşük stok uyarıları.",
  },
  {
    name: "Cari",
    body: "Cariye ait birden fazla şubeyi tek kartta izleyin. Detaylı cari kartlar, dekont fişleri, hızlı cari fişler ve gelişmiş anlık cari ekstre / yaşlandırma raporları.",
  },
  {
    name: "Fatura",
    body: "Fiber hızında künye. Satış faturaları, müstahsil faturaları, rehin fişleri, çıkış/giriş fişleri, sevk irsaliyesi ve e-Bildirimler; çoklu sipariş fişiyle iş yükü hafifler.",
  },
  {
    name: "Kasa",
    body: "Birden fazla kasa tanımı ve virman fişleriyle rehin kasası ile ticari kasayı ayrı ayrı takip edin. Kasa Tahsil/Tediye Fişleri, Virman Fişleri.",
  },
  {
    name: "POS",
    body: "Banka ve kasa bağlantılı POS tahsilat işlemleri. POS Fişleri, Banka ve POS İşlem Fişleri ile kart tahsilatı doğrudan cariye işlenir.",
  },
  {
    name: "Çek / Senet",
    body: "Banka ve kasa bağlantılı çek/senet tahsil ve tediye işlemleriyle hesapları tek hamlede kapatın. Çek-Senet Dekontu, portföy ve hareket fişleri, karşılıksız takibi.",
  },
  {
    name: "e-Fatura & e-Belge",
    body: "Fatura kayıtlarıyla eş zamanlı elektronik belgeler: e-Fatura, e-Müstahsil Makbuzu, e-Arşiv, e-İrsaliye, e-SMM ve e-Defter altyapısı.",
  },
  {
    name: "Kantar & Otomatik Dara",
    body: "Terazi/kantar donanım entegrasyonu ile tartı doğrudan satışa akar; otomatik dara, rehin ve ambar oluşturma ile manuel giriş sıfırlanır.",
  },
  {
    name: "Genel Muhasebe",
    body: "Tüm ön muhasebe belgeleriyle entegre çalışır, yevmiye kayıtlarını otomatik oluşturur. Muhasebe Fişleri, Tek Düzen Hesap Planı ve tüm muhasebe raporları.",
  },
  {
    name: "Yapay Zeka Modülü",
    body: "Rakiplerde olmayan fark: doğal dille sor (\"Ali'nin borcu ne?\"), evrak fotoğrafından mal geliş taslağı, geciken tahsilat & fire uyarıları, WhatsApp sipariş asistanı.",
    highlight: true,
  },
  {
    name: "Yardımcı Modüller",
    body: "Kullanıcı ve şube tanımları, rol/yetkilendirme, günce (log) takibi, uygulama içi mesajlaşma, akıllı ajanda (ödeme/tahsilat hatırlatma), kasa denetimi ve otomatik yedekleme.",
  },
];

export default function Modules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="moduller" className="section bg-slate-50">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Entegre Ticari Modüller</span>
          <h2 className="heading mt-5">İşinizi büyüten tüm modüller tek çatıda</h2>
          <div className="heading-divider" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {MODULES.map((m, i) => {
            const isOpen = open === i;
            return (
              <div key={m.name}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-halos-50/50"
                >
                  <span className="flex items-center gap-3">
                    {m.highlight && (
                      <span className="rounded-md bg-halos-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Yeni
                      </span>
                    )}
                    <span className="text-base font-semibold text-slate-900 md:text-lg">
                      {m.name}
                    </span>
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-halos-400 text-halos-600 transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600">
                    {m.body}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
