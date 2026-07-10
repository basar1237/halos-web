export default function Contact() {
  return (
    <section id="iletisim" className="section bg-slate-50">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">İletişim</span>
            <h2 className="heading mt-5">Halinizi 30 dakikada tanıyalım</h2>
            <div className="mt-5 h-1 w-14 rounded-full bg-halos-500" />
            <p className="mt-6 max-w-md text-slate-600">
              Formu doldurun; ekibimiz sizi arayıp halinize özel ücretsiz bir
              demo planlasın. Mevcut programınızdan veri taşıma dahil.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href="tel:+905465314910"
                className="flex items-center gap-3 text-slate-700 hover:text-halos-700"
              >
                <IconBox>📞</IconBox> 0546 531 49 10
              </a>
              <a
                href="mailto:basaryldrm1237@gmail.com"
                className="flex items-center gap-3 text-slate-700 hover:text-halos-700"
              >
                <IconBox>✉️</IconBox> basaryldrm1237@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <IconBox>📍</IconBox> İstanbul, Türkiye
              </div>
            </div>
          </div>

          {/* Statik form — Vercel'de Formspree/Resend ile bağlanabilir */}
          <form
            action="mailto:basaryldrm1237@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4">
              <Field label="Ad Soyad" name="ad" placeholder="Adınız Soyadınız" />
              <Field label="İşletme / Hal" name="isletme" placeholder="Firma adı" />
              <Field
                label="Telefon"
                name="telefon"
                type="tel"
                placeholder="05xx xxx xx xx"
              />
              <Field
                label="E-posta"
                name="eposta"
                type="email"
                placeholder="ornek@firma.com"
              />
              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-slate-700">
                  Mesajınız
                </span>
                <textarea
                  name="mesaj"
                  rows={3}
                  placeholder="Kaç kullanıcı, hangi hal, mevcut programınız..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-halos-500 focus:outline-none focus:ring-2 focus:ring-halos-500/20"
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                Demo Talebi Gönder
              </button>
              <p className="text-center text-xs text-slate-400">
                Göndererek gizlilik politikamızı kabul etmiş olursunuz.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-halos-500 focus:outline-none focus:ring-2 focus:ring-halos-500/20"
      />
    </label>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-halos-50 text-lg">
      {children}
    </span>
  );
}
