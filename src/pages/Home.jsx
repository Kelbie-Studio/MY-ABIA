import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const BASE = import.meta.env.BASE_URL;

export default function Home() {
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  const services = [
    {
      id: 1,
      title: 'Health & Hospitals',
      subtitle: 'Emergency & Clinics',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-heart-pulse-fill',
      color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60',
      link: '/health',
    },
    {
      id: 2,
      title: 'Schools & Universities',
      subtitle: 'ABSU, MOUAU, Colleges',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-mortarboard-fill',
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/60',
      link: '/education',
    },
    {
      id: 3,
      title: '24/7 Emergency',
      subtitle: 'Police, Fire, Ambulance',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-shield-fill-exclamation',
      color: 'text-red-600 bg-red-50 dark:bg-red-950/60',
      link: '/emergency',
    },
    {
      id: 4,
      title: 'Markets & Trade',
      subtitle: 'Ariaria, Ahia Ohuru',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-shop',
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60',
      link: '/markets',
    },
    {
      id: 5,
      title: 'Business & SMEs',
      subtitle: 'Industries & Commerce',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-briefcase-fill',
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60',
      link: '/business',
    },
    {
      id: 6,
      title: 'Food & Dining',
      subtitle: 'Restaurants & Eateries',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop',
      icon: 'bi-cup-hot-fill',
      color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/60',
      link: '/restaurants',
    },
  ];

  const leadersAndSpecialists = [
    {
      name: 'Dr. Alex Otti, OFR',
      role: 'Executive Governor of Abia',
      image: 'https://i.pinimg.com/736x/92/1d/9e/921d9ede0c07b3b6989b43515bab8f1e.jpg',
      rating: '4.9',
      reviews: 'Sworn in 2023',
    },
    {
      name: 'Solomon Nwabam',
      role: 'Lead Project Architect',
      image: `${BASE}images/solo.jpg`,
      rating: '4.9',
      reviews: 'Core Dev',
    },
    {
      name: 'Gabriel Herald',
      role: 'Frontend & UI Specialist',
      image: `${BASE}images/Gabriel herald.jpg`,
      rating: '4.8',
      reviews: 'Core Dev',
    },
    {
      name: 'Laughter Irolewe',
      role: 'Design & Data Lead',
      image: `${BASE}images/Laughter.jpg`,
      rating: '4.9',
      reviews: 'Core Dev',
    },
  ];

  const facilities = [
    {
      title: 'ABSUTH Teaching Hospital',
      tag: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Geometric Power Infrastructure',
      tag: 'Energy & Power',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Ariaria Footwear Hub',
      tag: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Umuahia Innovation Labs',
      tag: 'Education',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: '24/7 Rapid Ambulance Network',
      tag: 'Emergency',
      image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const announcements = [
    {
      tag: 'Healthcare',
      date: '31 Oct 2026',
      title: 'Free Statewide Health Screening & Vaccination Drive Announced',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      readTime: '2 min read',
    },
    {
      tag: 'Education',
      date: '28 Oct 2026',
      title: 'New Technology & Digital Skills Curriculum for State Colleges',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop',
      readTime: '3 min read',
    },
    {
      tag: 'Economy',
      date: '24 Oct 2026',
      title: 'SME Tax Incentive Scheme & Industrial Grants Open in Aba',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      readTime: '4 min read',
    },
    {
      tag: 'Government',
      date: '20 Oct 2026',
      title: 'Infrastructure Milestone: Road Networks and Urban Transit Updates',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
      readTime: '3 min read',
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-dark-950 transition-colors duration-200">
      {/* 1. Hero Section + Floating Stats */}
      <HeroSection />

      {/* 2. Overview / About Split Section (Anaverse style) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Modern Building Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-800 aspect-[4/3] bg-slate-100 dark:bg-dark-800">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern State Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 right-6 bg-white dark:bg-dark-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 flex items-center justify-center text-xl font-bold">
                <i className="bi bi-building-check"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Modern Directory</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">Built for All Citizens</p>
              </div>
            </div>
          </div>

          {/* Right: Text & 4 Features Grid */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
              <i className="bi bi-info-circle-fill"></i>
              <span>About MY-ABIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              A Unified Digital Platform <br />
              <span className="text-brand-600 dark:text-brand-400">For a Better & Healthier Abia</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              MY-ABIA is committed to providing every citizen, business owner, student, and visitor with immediate access to verified essential services, healthcare centers, market connections, and official government resources.
            </p>

            {/* 4 Feature Items (Anaverse 4-icon layout) */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              {[
                { icon: 'bi-clock-history', title: '24/7 Access', desc: 'Always online public hub' },
                { icon: 'bi-patch-check-fill', title: 'Verified Data', desc: 'Authenticated listings' },
                { icon: 'bi-hospital-fill', title: 'Modern Facilities', desc: 'Quality state resources' },
                { icon: 'bi-headset', title: 'Emergency Aid', desc: 'Immediate direct lines' },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 text-lg">
                    <i className={`bi ${feat.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services / Categories Grid ("Layanan Kami" style) */}
      <section className="py-20 bg-white dark:bg-dark-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
                Directory Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Public Services & Categories
              </h2>
            </div>

            <Link
              to="/browser"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 hover:gap-2.5 transition-all"
            >
              <span>Explore All Categories</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* 6 Category Cards Grid (Anaverse Layanan Kami style) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group bg-slate-50 dark:bg-dark-800/80 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-center"
              >
                {/* Thumbnail Image */}
                <div className="h-32 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>

                {/* Floating Round Icon */}
                <div className="relative -mt-6 mx-auto">
                  <div className={`w-12 h-12 rounded-full border-4 border-white dark:border-dark-800 shadow-md flex items-center justify-center text-lg ${item.color}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="p-4 pt-2 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Specialists Section (Anaverse style) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/50 text-brand-700 dark:text-brand-300 text-xs font-bold mb-4">
              <i className="bi bi-people-fill"></i>
              <span>State & Directory Leads</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
              Dedicated Leaders & Team Behind MY-ABIA
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Our verified team and state governance ensure every listing is accurate, updated, and accessible to empower the citizens of Abia State.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-brand-600/20 transition-all hover:-translate-y-0.5"
            >
              <span>Meet The Whole Team</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* Right Column: 4 Clean Specialist Cards (Anaverse style) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
              {leadersAndSpecialists.map((person) => (
                <div
                  key={person.name}
                  className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200 text-center p-4 flex flex-col items-center"
                >
                  {/* Photo Container */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-3 bg-slate-100 dark:bg-dark-700 ring-2 ring-slate-100 dark:ring-slate-700">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=200&background=2563eb&color=fff`;
                      }}
                    />
                  </div>

                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug line-clamp-1">
                    {person.name}
                  </h4>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold mt-0.5 line-clamp-1">
                    {person.role}
                  </p>

                  {/* Rating / Verified Pill */}
                  <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-bold">
                    <i className="bi bi-star-fill text-[10px]"></i>
                    <span>{person.rating}</span>
                    <span className="text-slate-400 text-[10px]">({person.reviews})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modern Facilities & Infrastructure Showcase (Dark Banner - Anaverse style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-1">
                State Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Key Facilities & Growth Hubs in Abia State
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Empowering healthcare recovery, commercial manufacturing, academic excellence, and emergency readiness across all 17 LGAs.
              </p>
            </div>

            {/* 5 Horizontal Showcase Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {facilities.map((fac) => (
                <div
                  key={fac.title}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/60 shadow-md"
                >
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-[10px] font-bold text-brand-300 uppercase tracking-wide block">
                      {fac.tag}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                      {fac.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. News & Announcements ("Berita & Tips Kesehatan" style) */}
      <section className="py-16 bg-white dark:bg-dark-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
                Latest Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                News & Official Announcements
              </h2>
            </div>

            <Link
              to="/announcements"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700"
            >
              <span>View All Announcements</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* 4 News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {announcements.map((news) => (
              <Link
                key={news.title}
                to="/announcements"
                className="group bg-slate-50 dark:bg-dark-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 dark:bg-dark-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-brand-600">
                    {news.tag}
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block mb-1.5">{news.date}</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-brand-600 mt-3 inline-flex items-center gap-1">
                    Read notice <i className="bi bi-arrow-right text-[10px]"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Emergency & Support Banner (Anaverse "Butuh Bantuan Medis?" style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
              Need Immediate Help or Emergency Services?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6">
              Abia State emergency operators and rapid medical responders are standing by 24/7 across all LGAs.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold text-white/90">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <i className="bi bi-shield-check"></i> Police & Security
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <i className="bi bi-heart-pulse"></i> Medical Response
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <i className="bi bi-fire"></i> Fire Department
              </span>
            </div>
          </div>

          {/* Right White Card with Hotline */}
          <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl font-bold shadow-inner">
                <i className="bi bi-telephone-outbound-fill"></i>
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Toll-Free Emergency
                </span>
                <a
                  href="tel:112"
                  className="text-2xl sm:text-3xl font-black text-brand-600 tracking-tight hover:underline"
                >
                  112 (Toll Free)
                </a>
              </div>
            </div>

            <Link
              to="/emergency"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-brand-600/30 whitespace-nowrap"
            >
              <span>All Contacts</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
