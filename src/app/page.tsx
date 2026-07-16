import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollReveal from "./components/ScrollReveal";
import {
  Phone, MessageCircle, MapPin, Clock,
  BedDouble, ShowerHead, Wind, Wifi,
  ShieldCheck, Droplets, Car, Sparkles,
  User, Users, Building2, Home,
  Star, Award, CheckCircle2,
  ArrowRight, Smartphone,
} from "lucide-react";

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const WhatsAppIcon = ({ size = 28, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const rooms = [
  { img: "/kos_room_card1.png", name: "Kamar Standar", price: "Rp 500rb", period: "/bulan", rating: "4.8", reviews: "(12 ulasan)", badge: "Tersedia", badgeColor: "bg-emerald-500", size: "3×4 m", type: "Putra/Putri" },
  { img: "/kos_room_card2.png", name: "Kamar Deluxe", price: "Rp 750rb", period: "/bulan", rating: "4.9", reviews: "(8 ulasan)", badge: "Populer", badgeColor: "bg-orange-500", size: "4×4 m", type: "Putra/Putri" },
  { img: "/kos_common_area.png", name: "Kamar Premium", price: "Rp 950rb", period: "/bulan", rating: "5.0", reviews: "(5 ulasan)", badge: "Baru", badgeColor: "bg-orange-500", size: "4×5 m", type: "Putra/Putri" },
  { img: "/kos_hero_modern.png", name: "Kamar Ekonomis", price: "Rp 400rb", period: "/bulan", rating: "4.7", reviews: "(18 ulasan)", badge: "Tersedia", badgeColor: "bg-emerald-500", size: "3×3 m", type: "Putra/Putri" },
];

const categories = [
  { Icon: User, name: "Kos Putra", count: "Tersedia" },
  { Icon: User, name: "Kos Putri", count: "Tersedia" },
  { Icon: Building2, name: "Kos Keluarga", count: "Tersedia" },
];

const benefits = [
  "Lokasi dekat pasar & keramaian kota",
  "Keamanan 24 jam terjaga",
  "Lingkungan tenang & kondusif",
  "Air bersih & listrik tanpa gangguan",
  "Fasilitas lengkap harga terjangkau",
];

const fasilitasList = [
  { Icon: BedDouble, label: "Kasur & Bantal", desc: "Tersedia" },
  { Icon: ShowerHead, label: "Kamar Mandi", desc: "Dalam" },
  { Icon: ShieldCheck, label: "Keamanan", desc: "24 Jam" },
  { Icon: Droplets, label: "Air Bersih", desc: "PDAM" },
  { Icon: Car, label: "Parkir Motor", desc: "Gratis" },
  { Icon: Sparkles, label: "Kebersihan", desc: "Terjaga" },
];

const lokasiItems = [
  { Icon: MapPin, label: "Alamat", value: "Jembrung Dua, Bulusari, Gempol, Pasuruan Regency, Jawa Timur 67155", href: null },
  {
    Icon: Phone,
    label: "Telepon / WA",
    value: (
      <div className="flex flex-col gap-1">
        <a href="tel:085649814066" className="font-bold text-orange-500 hover:text-orange-600 text-sm transition-colors">0856-4981-4066</a>
        <a href="tel:082233276629" className="font-bold text-orange-500 hover:text-orange-600 text-sm transition-colors">0822-3327-6629</a>
      </div>
    ),
    href: null
  },
  { Icon: Clock, label: "Jam Survei", value: "Setiap hari 08.00 – 20.00 WIB", href: null },
  { Icon: MessageCircle, label: "WhatsApp", value: "Chat 24 jam siap dibalas", href: null },
];

const reviews = [
  { stars: 5, text: "Kos Pintu Berkah nyaman. Dekat dengan keramaian dan pasar, mudah akses segala keperluan. Pemiliknya juga sangat baik!", name: "Pak Crepes", role: "Penghuni 2 Tahun", bg: "bg-orange-500", initial: "A" },
  { stars: 4, text: "Tempat tinggal yang tenang dan bersih. Pengelola ramah dan cepat respon jika ada masalah. Sangat rekomendasikan untuk yang cari kos di Bulusari, Gempol", name: "Mas Faisal", role: "Penghuni 1 Tahun", bg: "bg-navy-900", initial: "S" },
  { stars: 5, text: "Strategis banget! Dekat pasar Gempol, mudah kemana-mana. Harga terjangkau dengan fasilitas yang lengkap, apalagi kamar mandi dalam", name: "Pak Surtijo", role: "Penghuni 6 Bulan", bg: "bg-emerald-500", initial: "B" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        <HeroSection />

        {/* ===== TENTANG KAMI ===== */}
        <section className="py-20 bg-slate-50" id="tentang">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left – Image collage */}
              <ScrollReveal>
                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-xl aspect-[4/7]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/kosGambar.png" alt="Kos Pintu Berkah" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="col-span-1 rounded-3xl overflow-hidden shadow-md aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/kosGambar.png" alt="Kamar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="col-span-1 rounded-3xl overflow-hidden shadow-md aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/kosGambar.png" alt="Area bersama" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 left-6 md:left-8 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Award size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="font-extrabold text-navy-900 text-lg">Rating 4.73</div>
                      <div className="text-sm font-semibold text-slate-500 flex items-center gap-1">
                        <Star size={14} className="text-amber-500 fill-amber-500" /> Google Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right – Text */}
              <ScrollReveal delay={0.15}>
                <span className="inline-block text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Tentang Kami</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
                  Hunian Berkah untuk<br />Kehidupan Lebih Baik
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Kos Pintu Berkah adalah pilihan hunian terpercaya di Gempol, Pasuruan. Kami hadir untuk memberikan kenyamanan, keamanan, dan suasana kekeluargaan bagi setiap penghuni.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((b, i) => (
                    <div className="flex items-start gap-3" key={i}>
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                      </div>
                      <span className="font-semibold text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/6285649814066" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-orange-sm hover:-translate-y-1">
                    <MessageCircle size={18} /> Chat WhatsApp
                  </a>
                  <a href="#lokasi" className="flex justify-center items-center gap-2 border-2 border-slate-200 hover:border-navy-900 text-navy-900 font-bold px-8 py-3.5 rounded-xl transition-colors">
                    <MapPin size={18} /> Lihat Lokasi
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>



        {/* ===== KATEGORI ===== */}
        <section className="py-20 bg-slate-50" id="categories">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Kategori</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Tipe Kamar Kos</h2>
              <p className="text-slate-600 text-lg">Kami menyediakan berbagai tipe kamar sesuai kebutuhan Anda</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {categories.map(({ Icon, name, count }, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:border-orange-500 hover:shadow-orange-sm transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-navy-900 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors mb-4">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-extrabold text-navy-900 text-lg mb-1">{name}</h3>
                    <p className="text-sm font-semibold text-slate-500">{count}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FASILITAS ===== */}
        <section className="py-20 bg-white" id="fasilitas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left – Fasilitas grid */}
              <ScrollReveal>
                <span className="inline-block text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Fasilitas Lengkap</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
                  Semua yang Anda<br />Butuhkan Ada di Sini
                </h2>
                <p className="text-lg text-slate-600 mb-10">
                  Nikmati fasilitas lengkap yang kami sediakan untuk kenyamanan hidup sehari-hari Anda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fasilitasList.map(({ Icon, label, desc }, i) => (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 group" key={i}>
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:shadow-md transition-all">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="font-extrabold text-navy-900 text-sm">{label}</div>
                        <div className="text-xs font-semibold text-slate-500 mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Right – Image */}
              <ScrollReveal delay={0.15}>
                <div className="relative mt-8 lg:mt-0">
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/depanKos.jpg" alt="Fasilitas kamar" className="w-full h-full object-cover" />
                  </div>
                  {/* Floating Price */}
                  <div className="absolute top-8 -left-4 md:-left-8 bg-white rounded-2xl p-5 shadow-xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Mulai dari</div>
                    <div className="text-2xl font-extrabold text-orange-500">Rp 450rb</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">per bulan</div>
                  </div>
                  {/* Floating Rating */}
                  <div className="absolute bottom-8 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Star size={24} className="text-amber-500 fill-amber-500" />
                    </div>
                    <div>
                      <div className="font-extrabold text-navy-900 text-base">4.73 / 5.0</div>
                      <div className="text-xs font-semibold text-slate-500">Penghuni Puas</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== ULASAN ===== */}
        <section className="py-20 bg-slate-50" id="ulasan">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Testimoni</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Kata Mereka yang Sudah Tinggal</h2>
              <p className="text-slate-600 text-lg">Kepuasan penghuni adalah motivasi terbesar kami</p>
            </div>

            {/* Rating Summary */}
            <ScrollReveal>
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center md:text-left flex-shrink-0">
                  <div className="text-5xl font-extrabold text-navy-900 mb-2">4.73</div>
                  <div className="flex gap-1 justify-center md:justify-start mb-2">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-amber-500 fill-amber-500" />)}
                  </div>
                  <div className="text-sm font-semibold text-slate-500">Berdasarkan Google Reviews</div>
                </div>

                <div className="hidden md:block w-px h-24 bg-slate-200"></div>
                <div className="md:hidden w-24 h-px bg-slate-200"></div>

                <div className="flex-1 w-full max-w-sm">
                  {[
                    { label: "5", pct: "85%" }, { label: "4", pct: "10%" },
                    { label: "3", pct: "3%" }, { label: "2", pct: "1%" }, { label: "1", pct: "1%" },
                  ].map((row, i) => (
                    <div className="flex items-center gap-3 text-sm font-bold mb-2 last:mb-0" key={i}>
                      <span className="text-navy-900 w-3">{row.label}</span>
                      <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: row.pct }}></div>
                      </div>
                      <span className="text-slate-500 w-8 text-right">{row.pct}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block w-px h-24 bg-slate-200"></div>
                <div className="md:hidden w-24 h-px bg-slate-200"></div>

                <div className="text-center flex-shrink-0">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Temukan di</div>
                  <div className="flex items-center gap-2 justify-center font-extrabold text-navy-900">
                    <GoogleIcon /> Google Maps
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="text-amber-500 fill-amber-500" />)}
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-8 flex-1 italic">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${r.bg} text-white flex items-center justify-center font-bold text-lg`}>
                        {r.initial}
                      </div>
                      <div className="flex-1">
                        <div className="font-extrabold text-navy-900 text-sm">{r.name}</div>
                        <div className="text-xs font-semibold text-slate-500">{r.role}</div>
                      </div>
                      <GoogleIcon />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LOKASI ===== */}
        <section className="py-20 bg-white" id="lokasi">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left – Info (Span 5) */}
              <ScrollReveal className="lg:col-span-5">
                <span className="inline-block text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Lokasi</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
                  Mudah Dijangkau<br />dari Mana Saja
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Lokasi strategis di jantung Gempol, Pasuruan — dekat fasilitas umum dan akses transportasi.
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  {lokasiItems.map(({ Icon, label, value, href }, i) => (
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-orange-200 transition-colors" key={i}>
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0 border border-orange-100">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</div>
                        {href
                          ? <a href={href} className="font-bold text-orange-500 hover:text-orange-600 text-sm">{value}</a>
                          : <div className="font-semibold text-navy-900 text-sm">{value}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://maps.app.goo.gl/LYSUe7JoSm6ASYzcA" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-orange-sm hover:-translate-y-1">
                    <MapPin size={18} /> Buka Google Maps
                  </a>
                  <a href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+survei+kos" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 border-2 border-slate-200 hover:border-navy-900 text-navy-900 font-bold px-6 py-3.5 rounded-xl transition-colors">
                    <MessageCircle size={18} /> Jadwal Survei
                  </a>
                </div>
              </ScrollReveal>

              {/* Right – Map (Span 7) */}
              <ScrollReveal delay={0.15} className="lg:col-span-7">
                <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.18304561533125!2d112.68605988201305!3d-7.582737023193731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7df00637ef025%3A0x18de1ac09d7a3d91!2sKos%20Pintu%20Berkah!5e0!3m2!1sen!2sid!4v1784130606917!5m2!1sen!2sid"
                    className="w-full h-full border-0"
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kos Pintu Berkah"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,107,53,0.15)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-navy-800/80 border border-navy-700 text-orange-400 text-sm font-bold px-4 py-2 rounded-full mb-8 backdrop-blur">
              <Smartphone size={16} /> Siap Pindah Sekarang?
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Tertarik Tinggal di<br />
              <span className="text-orange-500">Kos Pintu Berkah?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk mengetahui ketersediaan kamar dan harga terbaik. Tim kami siap membantu Anda menemukan kamar yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+menanyakan+kamar+Kos+Pintu+Berkah" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold px-8 py-4 rounded-xl transition-transform hover:-translate-y-1">
                <MessageCircle size={20} /> Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Brand (Span 4) */}
            <div className="lg:col-span-4">
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="Logo Kos Pintu Berkah"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-slate-600 font-semibold mb-6 pr-4">
                Hunian nyaman, aman, dan terjangkau di Gempol, Pasuruan. Pilihan terpercaya sejak lama.
              </p>
              <div className="flex flex-col gap-3 font-semibold text-slate-700 text-sm">
                <a href="tel:085649814066" className="flex items-center gap-3 hover:text-orange-500"><Phone size={16} className="text-slate-400" /> 0856-4981-4066 <br /> 0822-3327-6629</a>
                <a href="https://wa.me/6285649814066" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-500"><MessageCircle size={16} className="text-slate-400" /> Chat WhatsApp</a>
                <a href="https://maps.google.com/?q=Gempol+Pasuruan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-500"><MapPin size={16} className="text-slate-400" /> Lihat di Maps</a>
              </div>
            </div>

            {/* Navigasi (Span 2) */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="font-extrabold text-navy-900 mb-6">Navigasi</h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
                {[["Beranda", "#home"], ["Tentang Kami", "#tentang"], ["Fasilitas", "#fasilitas"], ["Ulasan", "#ulasan"], ["Lokasi", "#lokasi"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-orange-500 transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>

            {/* Fasilitas (Span 2) */}
            <div className="lg:col-span-2">
              <h4 className="font-extrabold text-navy-900 mb-6">Fasilitas</h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
                {["Kamar Mandi", "Parkir Motor", "Keamanan 24 Jam", "Air Bersih"].map(f => (
                  <li key={f}><a href="#" className="hover:text-orange-500 transition-colors">{f}</a></li>
                ))}
              </ul>
            </div>

            {/* Informasi (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="font-extrabold text-navy-900 mb-6">Informasi</h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold text-slate-600 mb-8">
                {["Syarat & Ketentuan", "Kebijakan Privasi", "FAQ", "Cara Booking"].map(f => (
                  <li key={f}><a href="#" className="hover:text-orange-500 transition-colors">{f}</a></li>
                ))}
              </ul>
              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm inline-block">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Clock size={14} /> Jam Operasional
                </div>
                <div className="text-sm font-semibold text-slate-700">Setiap hari</div>
                <div className="text-base font-extrabold text-orange-500 mt-1">08.00 – 20.00 WIB</div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold text-slate-500">
            <span>© 2026 Kos Pintu Berkah · Jembrung Dua, Bulusari, Gempol, Pasuruan 67155</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-navy-900">Privasi</a>
              <a href="#" className="hover:text-navy-900">Ketentuan</a>
              <a href="#" className="hover:text-navy-900">Kontak</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285649814066?text=Halo%2C+saya+ingin+menanyakan+kamar+Kos+Pintu+Berkah"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all z-50 animate-bounce"
        aria-label="Chat WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </>
  );
}
