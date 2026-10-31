import { Link } from 'react-router-dom';

export default function EmergencySection() {
  const services = [
    { icon: 'bi-shield-check', title: 'Police', desc: 'Report crimes and security threats', number: '112', color: 'bg-blue-500' },
    { icon: 'bi-fire', title: 'Fire Service', desc: 'Report fire emergencies', number: '112', color: 'bg-orange-500' },
    { icon: 'bi-plus-circle', title: 'Ambulance', desc: 'Medical emergency assistance', number: '112', color: 'bg-red-500' },
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Emergency</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Reach Help When It Matters
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Quick access to essential emergency services. Call now for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <i className={`bi ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{service.desc}</p>
              <a
                href={`tel:${service.number}`}
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <i className="bi bi-telephone-fill"></i>
                Call {service.number}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/emergency" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            View all emergency contacts <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
