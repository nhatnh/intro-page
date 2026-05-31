'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    tag: 'Single Family Homes',
    caption: 'New construction, built to last',
  },
  {
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80',
    tag: 'ADU & DADU',
    caption: 'Maximize your property value',
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80',
    tag: 'Kitchen Remodeling',
    caption: 'Transform the heart of your home',
  },
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    tag: 'Home Construction',
    caption: 'Expert building from the ground up',
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80',
    tag: 'Home Remodeling',
    caption: 'Reimagine your living space',
  },
  {
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80',
    tag: 'Premium Curb Appeal',
    caption: 'Homes Seattle is proud of',
  },
]

const INTERVAL = 5500

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const goTo = (i: number) => setCurrent(i)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slides */}
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
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/58 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
          Seattle &amp; Greater Washington
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-8 tracking-tight">
          We build homes<br />
          <span className="font-semibold">people love.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Single family homes, ADUs, DADUs, and full remodels — built with care, managed with AI,
          and delivered with transparency. Serving Seattle and surrounding areas in Washington State.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-dark text-sm font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Start a Project
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-gray-500 text-white text-sm font-medium px-8 py-4 rounded-full hover:border-gray-300 transition-colors duration-200"
          >
            Meet the Team
          </Link>
        </div>
      </div>

      {/* Slide tag + dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <p className="text-white/50 text-xs uppercase tracking-[0.25em]">
          {slides[current].tag} — <span className="text-white/70">{slides[current].caption}</span>
        </p>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group flex items-center justify-center p-1"
            >
              <span
                className="block h-0.5 rounded-full transition-all duration-500"
                style={{
                  width: i === current ? '2rem' : '0.5rem',
                  backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
