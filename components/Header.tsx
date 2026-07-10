"use client";

import { useState } from "react";

const NAV = [
  { href: "#ozellikler", label: "Özellikler" },
  { href: "#moduller", label: "Modüller" },
  { href: "#neden", label: "Neden HalOS?" },
  { href: "#fiyat", label: "Fiyatlandırma" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-halos-500 font-black text-white">
            H
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Hal<span className="text-halos-600">OS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-600 transition hover:text-halos-700"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#iletisim" className="btn-primary">
            Demo Talep Et
          </a>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-slate-600"
              >
                {n.label}
              </a>
            ))}
            <a href="#iletisim" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Demo Talep Et
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
