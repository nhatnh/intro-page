export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 text-white overflow-hidden" style={{ minHeight: '55vh' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,_rgba(181,149,106,0.07)_0%,_transparent_65%)]" />

      {/* Animated email icon — left */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div className="animate-email-float">
          <svg width="80" height="64" viewBox="0 0 32 26" fill="none"
            stroke="rgba(181,149,106,0.65)" strokeWidth="1.2"
            strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="1" width="30" height="24" rx="3" />
            <polyline points="1,1 16,15 31,1" />
            <line x1="1" y1="25" x2="10" y2="14" />
            <line x1="31" y1="25" x2="22" y2="14" />
          </svg>
        </div>
        <p className="text-gold/50 text-xs tracking-widest uppercase">Email Us</p>
      </div>

      {/* Animated phone icon — right */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-40 h-40">
          <div className="absolute inset-0 rounded-full border border-gold/30 animate-pulse-ring-1" />
          <div className="absolute inset-0 rounded-full border border-gold/20 animate-pulse-ring-2" />
          <div className="absolute inset-0 rounded-full border border-gold/15 animate-pulse-ring-3" />
          <div className="animate-phone-ring">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none"
              stroke="rgba(181,149,106,0.75)" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.46 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.38 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
        </div>
        <p className="text-gold/50 text-xs tracking-widest uppercase whitespace-nowrap">Call Us</p>
      </div>

      {/* Subtle connecting line */}
      <div className="absolute top-1/2 left-[18%] right-[18%] h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 z-10 hidden lg:block" />

      {/* Content — centered */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Reach Out</p>
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
          Let&apos;s talk about<br />
          <span className="font-semibold">your project.</span>
        </h1>
      </div>
    </section>
  )
}
