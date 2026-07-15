"use client";
import { useRef, useEffect } from "react";
import { Star, ShieldCheck, MapPin, Home } from "lucide-react";

export default function HeroSection() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const fn = () => {
      if (!imgRef.current) return;
      if (window.scrollY < window.innerHeight * 1.2)
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const stats = [
    { Icon: Star, num: "4.73", label: "Rating Google" },
    { Icon: Home, num: "100%", label: "Aman & Nyaman" },
    { Icon: ShieldCheck, num: "24/7", label: "Keamanan" },
    { Icon: MapPin, num: "Gempol", label: "Lokasi Strategis" },
  ];

  return (
    <section className="relative bg-white pt-20 pb-12 md:py-20 overflow-hidden" id="home">
      {/* Background Gradient Blob */}
      <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-500 text-sm font-bold tracking-wide px-4 py-1.5 rounded-full mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              Kos Pintu Berkah
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.15] mb-6 tracking-tight opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Temukan Hunian<br />
              <span className="text-orange-500">Nyaman & Berkah</span><br />
              di Gempol
            </h1>

            <p
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              Kos Pintu Berkah – tempat tinggal nyaman, aman, dan strategis di jantung Gempol, Pasuruan. Dekat pasar, keramaian, dan mudah akses ke mana saja.
            </p>

            {/* Stats Chips */}
            <div
              className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              {stats.map(({ Icon, num, label }, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-full py-2.5 px-4 shadow-sm w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} strokeWidth={2} color="#fff" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-900 leading-tight">{num}</div>
                    <div className="text-xs text-slate-500 font-semibold">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+menanyakan+kamar+kos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-orange-sm hover:shadow-orange hover:-translate-y-1 text-center"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-h-[400px] md:max-h-[600px] bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src="/kos.jpg"
                alt="Kos Pintu Berkah"
                className="w-full h-full object-cover origin-bottom scale-110"
              />
            </div>

            {/* Float Card - Rating */}
            <div className="absolute left-4 bottom-4 md:-left-8 md:bottom-12 bg-white/90 backdrop-blur-md p-3.5 pr-6 rounded-2xl shadow-xl flex items-center gap-3 border border-white z-20 animate-fade-up" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-50 text-orange-500">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <div className="font-extrabold text-navy-900">4.73</div>
                <div className="text-xs font-semibold text-slate-500">Rating Google</div>
              </div>
            </div>

            {/* Float Card - Location */}
            <div className="absolute right-4 top-4 md:-right-8 md:top-12 bg-white/90 backdrop-blur-md p-3.5 pr-6 rounded-2xl shadow-xl flex items-center gap-3 border border-white z-20 animate-fade-up" style={{ animationDelay: "1.2s" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-50 text-green-500">
                <MapPin size={20} />
              </div>
              <div>
                <div className="font-extrabold text-navy-900">Gempol</div>
                <div className="text-xs font-semibold text-slate-500">Pasuruan, Jatim</div>
              </div>
            </div>

            {/* Dotted Pattern */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 -z-10 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(#1E3A5F 2px, transparent 2px)", backgroundSize: "16px 16px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
