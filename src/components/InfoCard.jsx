import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function InfoCard({ title, subtitle, description, image, link, buttonText = "View", fullWidth = false }) {
  return (
    <Link to={link || '#'} className={`group ${fullWidth ? 'w-full' : 'w-full'}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className={`rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 flex flex-col ${fullWidth ? 'md:flex-row' : ''} h-full bg-white dark:bg-dark-800 shadow-sm hover:shadow-xl transition-all duration-300`}
      >
        <div className={`${fullWidth ? 'h-56 md:h-auto w-full md:w-1/2' : 'h-48 w-full'} overflow-hidden`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className={`p-5 ${fullWidth ? 'md:w-1/2 flex flex-col justify-center' : 'flex-grow'}`}>
          {subtitle && <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">{subtitle}</p>}
          <h3 className={`text-lg font-bold ${subtitle ? 'mt-1' : ''} text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors`}>{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
          <span className="mt-4 text-sm text-primary-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            {buttonText} <i className="bi bi-arrow-right text-xs"></i>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
