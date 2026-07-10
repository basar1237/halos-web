export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-x py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-halos-500 font-black text-white">
              H
            </span>
            <span className="text-lg font-bold text-slate-900">
              Halos<span className="text-halos-600">ERP</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <a href="#ozellikler" className="hover:text-halos-700">Özellikler</a>
            <a href="#moduller" className="hover:text-halos-700">Modüller</a>
            <a href="#neden" className="hover:text-halos-700">Neden HalosERP?</a>
            <a href="#fiyat" className="hover:text-halos-700">Fiyatlandırma</a>
            <a href="#iletisim" className="hover:text-halos-700">İletişim</a>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} HalosERP — Sebze Meyve Hal ERP. Türk hal
            mevzuatına (5957 sayılı Kanun · HKS · GİB e-Belge) uyumludur.
          </p>
          <p className="mt-2">
            Bu bir tanıtım sitesidir; içerik statiktir ve güncellenmektedir.
          </p>
        </div>
      </div>
    </footer>
  );
}
