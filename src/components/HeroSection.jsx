import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const stats = [
    { icon: 'bi-geo-alt-fill', value: '17', label: 'Local Govt Areas', color: 'bg-brand-50 text-brand-600 dark:bg-brand-950/50' },
    { icon: 'bi-patch-check-fill', value: '500+', label: 'Verified Listings', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50' },
    { icon: 'bi-hospital-fill', value: '120+', label: 'Health & Schools', color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50' },
    { icon: 'bi-star-fill', value: '99%', label: 'Public Satisfaction', color: 'bg-amber-50 text-amber-500 dark:bg-amber-950/50' },
  ];

  return (
    <div className="relative pt-24 lg:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 text-left animate-fade-up">

            {/* Pill Badge (Anaverse style) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-800/40 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping"></span>
              <i className="bi bi-shield-check text-brand-600"></i>
              <span>God&apos;s Own State • Official Digital Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-6">
              The Best Public Directory for <span className="text-brand-600 dark:text-brand-400 relative inline-block">
                Abia State
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span> & Living
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Find verified healthcare facilities, accredited schools, thriving commercial markets, trusted businesses, and immediate government assistance all in one modern directory.
            </p>

            {/* Dual CTAs (Anaverse style buttons) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/health"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base"
              >
                <span>Explore Directory</span>
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link
                to="/add-business"
                className="inline-flex items-center gap-2 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-200 font-bold px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <i className="bi bi-calendar-plus text-brand-600"></i>
                <span>Add Your Listing</span>
              </Link>
            </div>

            {/* Quick Search Strip */}
            <div className="bg-white dark:bg-dark-800 p-2 sm:p-3 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row gap-2 max-w-2xl">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-dark-900 rounded-xl">
                <i className="bi bi-search text-slate-400"></i>
                <input
                  type="text"
                  placeholder="Search doctor, hospital, school, market..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm text-slate-800 dark:text-white placeholder-slate-400"
                />
              </div>

              <div className="w-full sm:w-44 flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-dark-900 rounded-xl">
                <i className="bi bi-geo-alt text-brand-500"></i>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-transparent outline-none text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium cursor-pointer"
                >
                  <option value="">All Abia LGAs</option>
                  <option value="Aba North">Aba North</option>
                  <option value="Aba South">Aba South</option>
                  <option value="Umuahia North">Umuahia North</option>
                  <option value="Umuahia South">Umuahia South</option>
                  <option value="Ohafia">Ohafia</option>
                  <option value="Arochukwu">Arochukwu</option>
                </select>
              </div>

              <Link
                to={`/health?q=${encodeURIComponent(searchTerm)}`}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                Find Now
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Overlapping Badges (Anaverse style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Rounded Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white dark:border-dark-800 aspect-[4/3] sm:aspect-[5/4] bg-slate-100 dark:bg-dark-800">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Quality public and healthcare services in Abia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-fade-up">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl">
                  <i className="bi bi-shield-fill-check"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Directory Status</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">100% Verified Data</p>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-fade-up">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl">
                  <i className="bi bi-star-fill"></i>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">4.9 / 5 Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar Overlapping Bottom (Anaverse style) */}
        <div className="mt-14 sm:mt-20">
          <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 dark:border-slate-700/80 p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-700/80">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`flex items-center gap-4 ${i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${stat.color}`}>
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
