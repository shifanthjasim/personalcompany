import { useState } from 'react'
import Packages from './components/Packages.jsx'
import FloatingText from './components/FloatingText.jsx'
import CloudFabIcon from './logo.png';


const services = [
  {
    title: 'Web Development',
    description: 'Responsive, high-performance websites and web applications designed to grow with your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5A2.25 2.25 0 0 1 6.75 5.25h10.5A2.25 2.25 0 0 1 19.5 7.5v9a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 16.5v-9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9h15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14.25h3" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    description: 'Reliable cloud architecture and deployment strategies to help your operations scale smoothly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 14.25a3.75 3.75 0 0 1 3.75-3.75h.75a4.5 4.5 0 0 1 8.4 1.2h.3a3 3 0 1 1 1.5 5.7H6.75A3.75 3.75 0 0 1 3.75 14.25Z" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description: 'Practical security reviews and protection strategies for modern digital businesses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5.25 5.25v6.75c0 4.5 3 7.5 6.75 8.25 3.75-.75 6.75-3.75 6.75-8.25V5.25L12 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 12 1.5 1.5 3-3" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description: 'Clear technical direction, strategy, and implementation support for startups and small teams.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v10.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h4.5" />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <img src="/logo.png" alt="SoftCloud Lanka logo" className="h-12 w-12 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm" />
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Solo-tech startup • Sri Lanka
            </span>

          </div>

        </div>
        <div className="flex items-center gap-2 justify-center mt-2 text-sm text-slate-600 sm:text-base">
          <img src="/logo.png" alt="SoftCloud Icon" className="w-6 h-6" />
          <span>Empowering Businesses with Modern Technology</span>
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-600 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          SoftCloud Lanka helps startups and growing companies build reliable digital systems with modern web, cloud, and security expertise.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row opacity-0 animate-[fadeInUp_1.1s_ease-out_0.45s_forwards]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Work With Me
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
    </section >
  )
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-sm rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 shadow-lg shadow-slate-200/70 md:max-w-md lg:max-w-lg">
            <img
              src="/shifanth.png"
              alt="Founder portrait"
              className="h-auto w-full rounded-[1.1rem] object-cover object-center"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About the founder</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Building practical technology for ambitious teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I’m Shifanth Jasim, Founder &amp; of SoftCloud Lanka, and Senior Software Developer at <a href="https://dcanalytica.site/" target="_blank" rel="noreferrer" className="font-semibold text-blue-700 hover:text-blue-800">DcAnalytica</a> since 2020.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            My mission is to help startups and small companies grow with modern technology that is secure, scalable, and easy to use.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">Professional focus</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Senior Software Developer at DcAnalytica since March 2020</li>
              <li>• Experience across web development, cloud platforms, and cybersecurity</li>
              <li>• Dedicated to helping founders launch dependable digital tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Technology support built for modern growth
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each engagement is tailored to your goals, whether you need a polished online presence or a more secure digital foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let’s build something reliable together
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Reach out to discuss your next project, technical challenge, or growth plan.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">Phone</p>
              <a href="tel:+940778528550" className="mt-1 block text-slate-600 hover:text-blue-700">
                +94 077 852 8550
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <a href="mailto:onlinejasim@gmail.com" className="mt-1 block text-slate-600 hover:text-blue-700">
                onlinejasim@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              <span className="mb-2 block">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            <span className="mb-2 block">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Tell me about your project"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center lg:flex-row lg:px-8">
        <p>© 2026 SoftCloud Lanka — Site created by SoftCloud Lanka</p>
        <div className="flex gap-4">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
            <img src="/softcloud-favicon.png" alt="SoftCloud Lanka logo" className="h-8 w-auto rounded-md" />
            <span>SoftCloud Lanka</span>
          </a>
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <a href="#about" className="transition hover:text-blue-700">About</a>
            <a href="#services" className="transition hover:text-blue-700">Services</a>
            <a href="#contact" className="transition hover:text-blue-700">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <FloatingText />
        <Packages />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
