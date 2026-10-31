import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Government', path: '/government' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Emergency', path: '/emergency' },
  ];

  const categories = [
    { to: '/health', label: 'Health & Hospitals', icon: 'bi-heart-pulse-fill', color: 'text-red-500 bg-red-50 dark:bg-red-950/40' },
    { to: '/education', label: 'Schools & Education', icon: 'bi-mortarboard-fill', color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' },
    { to: '/business', label: 'Business & Economy', icon: 'bi-briefcase-fill', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { to: '/markets', label: 'Markets & Trade', icon: 'bi-shop', color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { to: '/restaurants', label: 'Food & Dining', icon: 'bi-cup-hot-fill', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40' },
    { to: '/tourism', label: 'Tourism & Culture', icon: 'bi-compass-fill', color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 py-3'
        : 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <i className="bi bi-crosshair2 text-xl font-bold"></i>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-600 dark:text-brand-400 block leading-none">
                State Directory
              </span>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                MY<span className="text-brand-600">ABIA</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Anaverse style with active indicator) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-700 dark:text-brand-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 rounded-full animate-fade-up"></span>
                  )}
                </Link>
              );
            })}

            {/* Categories Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Categories
                <i className="bi bi-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-dark-800 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 dark:border-slate-700 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="p-2 border-b border-slate-100 dark:border-slate-700 mb-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Explore Abia State</p>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.to}
                      to={cat.to}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors group/item"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color} group-hover/item:scale-110 transition-transform`}>
                        <i className={`bi ${cat.icon}`}></i>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-brand-600">
                        {cat.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center transition-colors"
              aria-label="Toggle Theme"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-amber-400' : 'bi-moon-stars-fill'}`}></i>
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 px-3 py-2 transition-colors"
            >
              Sign In
            </Link>

            {/* Primary Blue Button (Anaverse style "Daftar Online") */}
            <Link
              to="/add-business"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-brand-600/25 transition-all duration-200"
            >
              <i className="bi bi-calendar-check"></i>
              <span>Add Listing</span>
            </Link>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-amber-400' : 'bi-moon-stars-fill'}`}></i>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-dark-800 text-brand-600 dark:text-brand-400 flex items-center justify-center text-xl"
              aria-label="Open Menu"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-dark-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className="px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors"
              >
                <span>Categories</span>
                <i className={`bi bi-chevron-down text-xs transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isCategoriesOpen && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-brand-200 dark:border-brand-900 ml-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.to}
                      to={cat.to}
                      onClick={closeMenu}
                      className="flex items-center gap-2.5 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600"
                    >
                      <i className={`bi ${cat.icon}`}></i>
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 mt-2 flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="text-center py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 rounded-xl"
                >
                  Sign In
                </Link>
                <Link
                  to="/add-business"
                  onClick={closeMenu}
                  className="text-center py-2.5 text-sm font-bold bg-brand-600 text-white rounded-xl shadow-md"
                >
                  Add Listing Online
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
