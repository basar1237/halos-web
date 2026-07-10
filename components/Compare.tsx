const ROWS = [
  { label: "HKS künye & hal tipi e-fatura", halos: true, others: true },
  { label: "Cari, kasa, çek/senet, stok", halos: true, others: true },
  { label: "Bulut doğuştan (kurulumsuz, her yerden)", halos: true, others: "kısmi" },
  { label: "Yapay zeka muhasebeci & proaktif uyarı", halos: true, others: false },
  { label: "Evrak fotoğrafından otomatik mal geliş", halos: true, others: false },
  { label: "Offline çalışan hal terminali", halos: true, others: false },
  { label: "Soğuk zincir / IoT sensör alarmı", halos: true, others: false },
  { label: "Gerçek mobil yönetim (patron app)", halos: true, others: "kısmi" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="font-bold text-halos-600">✓</span>;
  if (value === false) return <span className="text-slate-300">—</span>;
  return <span className="text-xs font-medium text-amber-600">{value}</span>;
}

export default function Compare() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow">Karşılaştırma</span>
          <h2 className="heading mt-5">HalOS vs. klasik hal programları</h2>
          <div className="heading-divider" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_auto_auto] bg-halos-600 text-sm font-semibold text-white">
            <div className="px-5 py-4">Özellik</div>
            <div className="w-24 px-4 py-4 text-center">HalOS</div>
            <div className="w-28 px-4 py-4 text-center text-halos-100">Diğerleri</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1fr_auto_auto] items-center border-t border-slate-100 text-sm ${
                i % 2 ? "bg-white" : "bg-slate-50/60"
              }`}
            >
              <div className="px-5 py-4 text-slate-700">{r.label}</div>
              <div className="w-24 px-4 py-4 text-center text-lg">
                <Cell value={r.halos} />
              </div>
              <div className="w-28 px-4 py-4 text-center text-lg">
                <Cell value={r.others} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
