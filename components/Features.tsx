const FEATURES = [
  {
    title: "Satışla eş zamanlı e-Fatura",
    desc: "Satış faturasını düzenlerken ayrı bir işlem yapmadan hal tipi e-Faturanızı otomatik hazırlar.",
    icon: "📄",
  },
  {
    title: "Otomatik künye (HKS)",
    desc: "Satış anında Hal Kayıt Sistemi üzerinden 19 haneli künye oluşturulur, bildirim anında iletilir.",
    icon: "🏷️",
  },
  {
    title: "e-Müstahsil Makbuzu",
    desc: "Kayıt tutmayan üretici için e-Müstahsil Makbuzunu tek tuşla, mevzuata uygun kesersiniz.",
    icon: "🧾",
  },
  {
    title: "Belge tipini otomatik seçer",
    desc: "Müşteri/müstahsilin e-Fatura, e-Arşiv ya da kağıt mükellefi olduğunu denetler, doğru belgeyi üretir.",
    icon: "✅",
  },
  {
    title: "Gönderim öncesi hata kontrolü",
    desc: "Elektronik belgeleri hazırlamadan önce doğrular; olası GİB/HKS hatalarını baştan engeller.",
    icon: "🛡️",
  },
  {
    title: "Portal derdi yok",
    desc: "e-Fatura, e-Müstahsil gibi belgeleri hazırlamak için ayrı program ya da web portalına ihtiyaç kalmaz.",
    icon: "🔗",
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="section bg-white">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Elektronik Belge Otomasyonu</span>
          <h2 className="heading mt-5">Tek işlemde tüm resmi belgeler</h2>
          <div className="heading-divider" />
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Halinizin günlük operasyonunda kağıt, portal ve manuel bildirim
            derdini ortadan kaldırır. Siz satışı yaparsınız, belgeler kendi
            kendine hazır olur.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-halos-50 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
