export default function PlaceholderPage({ title }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] pt-20 px-4">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-dark-800 flex items-center justify-center mb-6">
        <i className="bi bi-tools text-2xl text-gray-400"></i>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
        This page is under construction. Check back soon for updates.
      </p>
    </div>
  );
}
