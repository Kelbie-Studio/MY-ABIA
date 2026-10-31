import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                <i className="bi bi-crosshair2"></i>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-400 block leading-none">
                  State Directory
                </span>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  MY<span className="text-brand-500">ABIA</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              The official public directory for Abia State, "God&apos;s Own State". Cataloging healthcare facilities, schools, trade markets, businesses, and government resources.
            </p>

            <div className="flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i className="bi bi-facebook text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i className="bi bi-twitter-x text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i className="bi bi-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i className="bi bi-linkedin text-sm"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Public Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Public Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/health" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Health & Hospitals
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Universities & Schools
                </Link>
              </li>
              <li>
                <Link to="/markets" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Markets & Commercial Posts
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Business & Investments
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> 24/7 Emergency Numbers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: State & Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              About State
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Our Heritage
                </Link>
              </li>
              <li>
                <Link to="/government" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> State Government
                </Link>
              </li>
              <li>
                <Link to="/announcements" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Official Notices
                </Link>
              </li>
              <li>
                <Link to="/tourism" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Tourism & Sights
                </Link>
              </li>
              <li>
                <Link to="/add-business" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                  <i className="bi bi-chevron-right text-[10px]"></i> Submit a Listing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid Hotline & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Emergency & Support
            </h4>
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 mb-3">
              <span className="text-[11px] text-slate-400 block font-semibold">Toll-Free Emergency</span>
              <p className="text-xl font-black text-brand-400 mt-0.5">112 / +234 800 000 000</p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available 24 hours across Aba, Umuahia, Ohafia, and all 17 LGAs in Abia State.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MY-ABIA. Abia State Digital Directory. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-slate-300 transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
