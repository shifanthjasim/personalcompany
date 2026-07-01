const words = [
  { text: 'AWS', size: 'text-sm', color: 'text-blue-600' },
  { text: 'Cloud', size: 'text-base', color: 'text-slate-700' },
  { text: 'React', size: 'text-lg', color: 'text-cyan-600' },
  { text: 'Angular', size: 'text-sm', color: 'text-violet-600' },
  { text: 'JavaScript', size: 'text-base', color: 'text-amber-600' },
  { text: 'Node.js', size: 'text-lg', color: 'text-emerald-600' },
  { text: 'MongoDB', size: 'text-sm', color: 'text-slate-700' },
  { text: 'Tailwind', size: 'text-base', color: 'text-sky-600' },
  { text: 'Cybersecurity', size: 'text-lg', color: 'text-rose-600' },
  { text: 'DevOps', size: 'text-sm', color: 'text-indigo-600' },
  { text: 'Docker', size: 'text-base', color: 'text-blue-700' },
  { text: 'Kubernetes', size: 'text-lg', color: 'text-purple-600' },
  { text: 'AI', size: 'text-base', color: 'text-fuchsia-600' },
  { text: 'Machine Learning', size: 'text-sm', color: 'text-slate-600' },
]

function FloatingText() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-100 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Tech stack</p>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Building modern digital experiences with reliable tools and proven technologies.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div className="relative flex overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex min-w-max items-center gap-4 sm:gap-6">
              {words.map((word, index) => (
                <span
                  key={`${word.text}-${index}`}
                  className={`rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold shadow-sm backdrop-blur ${word.size} ${word.color}`}
                >
                  {word.text}
                </span>
              ))}
            </div>
            <div className="animate-marquee ml-6 flex min-w-max items-center gap-4 sm:gap-6">
              {words.map((word, index) => (
                <span
                  key={`${word.text}-dup-${index}`}
                  className={`rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold shadow-sm backdrop-blur ${word.size} ${word.color}`}
                >
                  {word.text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-reverse flex min-w-max items-center gap-4 sm:gap-6">
              {[...words].reverse().map((word, index) => (
                <span
                  key={`${word.text}-reverse-${index}`}
                  className={`rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold shadow-sm backdrop-blur ${word.size} ${word.color}`}
                >
                  {word.text}
                </span>
              ))}
            </div>
            <div className="animate-marquee-reverse ml-6 flex min-w-max items-center gap-4 sm:gap-6">
              {[...words].reverse().map((word, index) => (
                <span
                  key={`${word.text}-reverse-dup-${index}`}
                  className={`rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold shadow-sm backdrop-blur ${word.size} ${word.color}`}
                >
                  {word.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloatingText
