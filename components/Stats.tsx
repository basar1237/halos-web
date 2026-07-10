const STATS = [
  { value: "10+", label: "Entegre servis modülü" },
  { value: "19 hane", label: "Otomatik HKS künye" },
  { value: "%100", label: "Hal mevzuatına uyum (5957 / HKS)" },
  { value: "7/24", label: "Bulut erişim & yedekleme" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-halos-50/50">
      <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-halos-600 md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
