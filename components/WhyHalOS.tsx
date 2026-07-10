const REASONS = [
  {
    title: "Bulut doğuştan",
    desc: "Kurulum yok, her yerden erişim, otomatik güncelleme ve yedek. Rakipler Windows masaüstüne buluta sonradan yamalarken HalosERP ilk günden bulutta.",
    icon: "☁️",
  },
  {
    title: "Yapay zeka muhasebeci",
    desc: "\"Bu ay kârım ne?\", geciken tahsilat uyarısı, fire tahmini, evrak fotoğrafından otomatik mal geliş. Kayıt tutan değil, akıl veren yazılım.",
    icon: "🧠",
  },
  {
    title: "Gerçek mobil",
    desc: "Patron cebinden günlük satışı, hakedişi, açık cariyi ve soğuk oda alarmını canlı görür. İzleme değil, yönetim.",
    icon: "📱",
  },
  {
    title: "Offline Hal Terminali",
    desc: "İnternet kopsa bile satış devam eder; bağlantı gelince güvenle senkronlanır. Halin gerçek koşulları için tasarlandı.",
    icon: "🔌",
  },
  {
    title: "Soğuk zincir & IoT",
    desc: "Soğuk oda sıcaklığı sensörle izlenir; eşik aşılınca anında alarm ve bildirim. Bozulan malı fatura değil, sistem yakalar.",
    icon: "🌡️",
  },
  {
    title: "Çok kiracılı & güvenli",
    desc: "Her işletmenin verisi izole; rol bazlı yetki, denetim günlüğü ve 2FA. Kurumsal güvenlik, esnaf kolaylığı.",
    icon: "🔐",
  },
];

export default function WhyHalOS() {
  return (
    <section id="neden" className="section bg-white">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Neden HalosERP?</span>
          <h2 className="heading mt-5">
            Diğer hal programları kayıt tutar. HalosERP işi yönetir.
          </h2>
          <div className="heading-divider" />
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Piyasadaki programların çoğu 2000'lerin masaüstü mimarisinde. HalosERP,
            bulut + yapay zeka + mobil üzerine sıfırdan kuruldu.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-halos-50 text-2xl">
                {r.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
