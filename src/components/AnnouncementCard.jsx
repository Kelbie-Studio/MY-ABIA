import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AnnouncementCard({ tag, readTime, title, excerpt, image, link }) {
  const tagColors = {
    Government: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    Education: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    Health: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    Commerce: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/50 transition-all duration-300 group"
    >
      <div className="h-52 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}>{tag}</span>
          <span className="text-xs text-gray-400">{readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
          {excerpt}
        </p>
        <Link to={link || '#'} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 mt-4 group-hover:gap-2 transition-all">
          Read more <i className="bi bi-arrow-right text-xs"></i>
        </Link>
      </div>
    </motion.div>
  );
}
