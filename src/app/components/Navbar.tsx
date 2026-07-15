"use client";
import { useEffect, useState } from "react";
import { Home, Phone, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-100" : "bg-white/90 backdrop-blur-md border-b border-slate-100"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo Kos Pintu Berkah"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {["Kategori:#categories", "Fasilitas:#fasilitas", "Ulasan:#ulasan", "Lokasi:#lokasi"].map(item => {
            const [label, href] = item.split(":");
            return (
              <li key={label}>
                <a href={href} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+menanyakan+kamar+kos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-orange-sm hover:shadow-orange hover:-translate-y-[1px]"
          >
            <MessageCircle size={16} />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg transition-all duration-300 origin-top ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
        <div className="flex flex-col p-4 gap-2">
          {["Kategori:#categories", "Fasilitas:#fasilitas", "Ulasan:#ulasan", "Lokasi:#lokasi"].map(item => {
            const [label, href] = item.split(":");
            return (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {label}
              </a>
            );
          })}
          <div className="h-px bg-slate-100 my-2"></div>
          <a href="tel:085649814066" className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-slate-700">
            <Phone size={18} /> 0856-4981-4066
          </a>
          <a
            href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+menanyakan+kamar+kos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-base px-4 py-3 rounded-xl"
          >
            <MessageCircle size={18} /> Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
