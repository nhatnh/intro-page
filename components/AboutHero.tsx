'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
    position: 'center top',
  },
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    position: 'center center',
  },
  {
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    position: 'center center',
  },
]

export default function AboutHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-40 pb-28 px-6 text-white overflow-hidden" style={{ minHeight: '60vh' }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: i === current ? 1 : 0,
          }}
        >
          <div
            key={`${slide.url}-${i === current}`}
            className={`absolute inset-0 ${i === current ? 'slide-kenburns' : ''}`}
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.position,
            }}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Who We Are</p>
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
          Hardworking professionals.<br />
          <span className="font-semibold">Honest work.</span><br />
          <span className="text-gold font-medium text-3xl md:text-4xl">
            Using AI to optimize project management and save time &amp; money.
          </span>
        </h1>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-0.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? '2rem' : '0.5rem',
              backgroundColor: i === current ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
