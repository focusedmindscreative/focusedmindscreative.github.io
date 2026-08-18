import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 'testimonial-bailey-cronin',
    name: 'Ian Cronin',
    role: 'Bailey & Cronin Chartered Surveyors',
    website: 'https://baileyandcronin.co.uk/',
    initials: 'IC',
    quote: [
      'I cannot recommend Ed at Focused Minds Creative highly enough.',
      'Ed designed and built the website for Bailey & Cronin Chartered Building Surveyors, and I am absolutely delighted with the finished result. From start to finish, the service I received was excellent.',
      'Ed was extremely patient throughout the process, taking the time to listen to my ideas and helping me make the necessary changes and refinements to ensure the website looked its very best. Nothing was too much trouble, and his advice and attention to detail were greatly appreciated.',
      'Since launching the website, I have received numerous positive comments about its design, appearance and, in particular, how professional it looks. It represents the business exactly as I had hoped.',
      'I am extremely pleased with both the website and the service provided and would have no hesitation whatsoever in recommending Ed and Focused Minds Creative to anyone looking for a professional website and a personal, reliable service.',
      'A genuine five-star service. Highly recommended.',
    ],
  },
]

const DURATION = 8000

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const startRef = useRef(0)
  const remainingRef = useRef(DURATION)
  const rafRef = useRef(0)
  const frameRef = useRef(null)
  const barRef = useRef(null)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    if (testimonials.length < 2) {
      bar.parentElement.style.display = 'none'
      return
    }
    bar.parentElement.style.display = ''

    function frame(ts) {
      const elapsed = ts - startRef.current
      if (elapsed >= remainingRef.current) {
        setCurrent((c) => (c + 1) % testimonials.length)
        return
      }
      bar.style.transform =
        'scaleX(' + ((DURATION - remainingRef.current + elapsed) / DURATION) + ')'
      rafRef.current = requestAnimationFrame(frame)
    }

    function tick() {
      startRef.current = performance.now()
      rafRef.current = requestAnimationFrame(frame)
    }

    if (!reducedMotion && !paused) {
      remainingRef.current = DURATION
      bar.style.transform = 'scaleX(0)'
      tick()
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [current, paused, reducedMotion])

  useEffect(() => {
    if (paused) {
      cancelAnimationFrame(rafRef.current)
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (performance.now() - startRef.current),
      )
      if (barRef.current) {
        barRef.current.style.transform =
          'scaleX(' + (1 - remainingRef.current / DURATION) + ')'
      }
    }
  }, [paused])

  function resetTimer() {
    cancelAnimationFrame(rafRef.current)
    remainingRef.current = DURATION
    if (barRef.current) barRef.current.style.transform = 'scaleX(0)'
  }

  function select(i) {
    setCurrent(i)
    resetTimer()
  }

  return (
    <section id="testimonials" className="bg-white container py-20">
      <div className="mb-10">
        <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">What our clients say</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          We measure success by the practical outcomes our clients experience day to day.
        </p>
      </div>
      <div className="testimonial-spotlight">
        <div className="testimonial-rail" aria-label="Testimonial authors">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`testimonial-author${i === current ? ' is-active' : ''}`}
              aria-pressed={i === current}
              onClick={() => select(i)}
            >
              <span className="testimonial-author__avatar">{t.initials}</span>
              <span>
                <span className="testimonial-author__name">{t.name}</span>
                <span className="testimonial-author__role">{t.role}</span>
              </span>
            </button>
          ))}
        </div>
        <div
          id="testimonial-bailey-cronin"
          className="testimonial-stage"
          role="region"
          aria-label="Testimonials"
          aria-live="polite"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="testimonial-progress">
            <span ref={barRef} />
          </div>
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className={`testimonial-slide${i === current ? ' is-active' : ''}`}
              aria-hidden={i !== current}
            >
              <div className="flex items-center gap-1 mb-4" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    width={18}
                    height={18}
                    fill="currentColor"
                    stroke="none"
                    style={{ color: 'var(--color-accent)' }}
                  />
                ))}
              </div>
              <blockquote className="text-slate-700 flex-1 space-y-3">
                {t.quote.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <span
                  className="h-10 w-10 grid place-content-center rounded-full text-sm font-semibold"
                  style={{ background: 'var(--color-accent-50)', color: 'var(--color-accent-700)' }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  {t.website ? (
                    <a
                      href={t.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {t.role} &rarr;
                    </a>
                  ) : (
                    <p className="text-xs text-slate-500">{t.role}</p>
                  )}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}