export default function NeedHelpSection() {
  const helpItems = [
    { icon: 'bi-hospital', color: 'text-primary-600', bg: 'bg-primary-50 dark:bg-primary-900/20', title: 'Nearby Hospitals', desc: 'Find hospitals and clinics close to you.', action: 'Get directions' },
    { icon: 'bi-wrench', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20', title: 'Roadside Assistance', desc: 'Help for vehicle breakdowns and accidents.', action: 'Request help' },
    { icon: 'bi-heart', color: 'text-pink-600', bg: 'bg-pink-50 dark:bg-pink-900/20', title: 'Mental Health Support', desc: 'Confidential counselling and crisis lines.', action: 'Get support' },
    { icon: 'bi-people', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20', title: 'Volunteer Services', desc: 'Connect with local volunteers and community groups.', action: 'Join now' },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Support</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">Need More Help?</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">Quick links and services to get assistance fast.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {helpItems.map((item, index) => (
            <div key={index} className="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`bi ${item.icon} text-xl ${item.color}`}></i>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.desc}</p>
              <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                {item.action} <i className="bi bi-arrow-right text-xs"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
