export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* arka plan yumuşak yeşil ışıma + ince grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-halos-100/70 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(18,183,106,0.10),transparent_55%)]" />
      </div>

      <div className="container-x relative py-24 text-center md:py-32">
        <span className="eyebrow">Sebze &amp; Meyve Hali İşletim Sistemi</span>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Halinizi eski masaüstü programıyla değil,{" "}
          <span className="text-halos-600">yapay zekayla</span> yönetin.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          HalosERP; HKS künye, hal tipi e-fatura, müstahsil makbuzu, cari, kasa ve
          çek/senet süreçlerini tek ekranda toplar — üstüne borcu hatırlatan,
          fireyi önceden söyleyen, kârı cebinizde gösteren bir AI ekler.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#iletisim" className="btn-primary">
            Ücretsiz Demo Talep Et
          </a>
          <a href="#moduller" className="btn-ghost">
            Modülleri İncele
          </a>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Dot /> HKS &amp; künye tam entegre
          </span>
          <span className="flex items-center gap-2">
            <Dot /> Hal tipi e-Fatura / e-Müstahsil
          </span>
          <span className="flex items-center gap-2">
            <Dot /> Bulut — her yerden erişim
          </span>
          <span className="flex items-center gap-2">
            <Dot /> Yapay zeka muhasebeci
          </span>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-2 w-2 rounded-full bg-halos-500" />;
}
