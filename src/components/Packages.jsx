const packages = [
  {
    name: 'Web Development Starter',
    price: '$499',
    featured: false,
    description: 'A polished, responsive business website tailored for modern startups.',
    features: ['Responsive business website (up to 5 pages)', 'Basic SEO setup'],
  },
  {
    name: 'Web Development Pro',
    price: '$1,299',
    featured: true,
    badge: 'Most Popular',
    description: 'A custom web application with deeper functionality and growth-focused analytics.',
    features: ['Custom web app with backend integration', 'Advanced SEO + analytics'],
  },
  {
    name: 'Cloud Solutions Basic',
    price: '$699',
    featured: false,
    description: 'Reliable cloud hosting setup designed for dependable deployment and scaling.',
    features: ['Cloud hosting setup (AWS/Azure)', 'Scalable deployment'],
  },
  {
    name: 'Cloud Solutions Enterprise',
    price: '$2,499',
    featured: true,
    badge: 'Best Value',
    description: 'Complete migration and operational support for businesses needing a stronger digital foundation.',
    features: ['Full cloud migration + security', '24/7 monitoring'],
  },
  {
    name: 'Cybersecurity Audit',
    price: '$399',
    featured: false,
    description: 'A practical security assessment to uncover vulnerabilities and improve resilience.',
    features: ['Security assessment + recommendations', 'Vulnerability scanning'],
  },
  {
    name: 'IT Consulting',
    price: '$199 per session',
    featured: false,
    description: 'Focused 1-on-1 strategy support for technology planning and execution.',
    features: ['1-on-1 strategy sessions', 'Tech stack recommendations'],
  },
]

function Packages() {
  return (
    <section id="packages" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Packages</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Clear packages for startups and growing teams
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Choose a focused engagement that fits your current stage, whether you need a launch-ready website or long-term tech strategy support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                pkg.featured
                  ? 'border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                  : 'border-slate-200 bg-white text-slate-800'
              }`}
            >
              {pkg.badge ? (
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${pkg.featured ? 'bg-white/15 text-blue-50' : 'bg-blue-50 text-blue-700'}`}>
                  {pkg.badge}
                </span>
              ) : null}

              <h3 className="mt-5 text-xl font-semibold">{pkg.name}</h3>
              <p className={`mt-3 text-sm leading-7 ${pkg.featured ? 'text-blue-50' : 'text-slate-600'}`}>
                {pkg.description}
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold">{pkg.price}</span>
              </div>

              <ul className={`mt-6 space-y-3 text-sm ${pkg.featured ? 'text-blue-50' : 'text-slate-600'}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${pkg.featured ? 'bg-white' : 'bg-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  pkg.featured
                    ? 'bg-white text-blue-700 hover:bg-slate-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
