import Link from 'next/link'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* Services */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-light text-dark tracking-tight">
              Every project,<br />
              <span className="font-semibold">done right.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {[
              {
                number: '01',
                title: 'Single Family Homes',
                description: 'New construction from the ground up. We handle permitting, design coordination, and every detail of your build.',
              },
              {
                number: '02',
                title: 'ADU & DADU',
                description: 'Accessory and detached accessory dwelling units that maximize your property value and add flexible living space.',
              },
              {
                number: '03',
                title: 'Home Remodeling',
                description: 'Kitchen, bathroom, full-home renovations — transforming existing spaces with quality craftsmanship and minimal disruption.',
              },
              {
                number: '04',
                title: 'Permitting & Approval',
                description: 'We manage the permitting process end-to-end so you don\'t have to navigate city requirements on your own.',
              },
            ].map((item) => (
              <div key={item.number} className="bg-white p-10 md:p-12">
                <span className="text-xs font-semibold text-gray-300 tracking-widest">{item.number}</span>
                <h3 className="text-lg font-semibold text-dark mt-6 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Portal */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-light leading-snug tracking-tight text-dark mb-6">
              AI-first management.<br />
              <span className="font-semibold">Real-time visibility.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              We apply AI tools throughout the project lifecycle — from cost estimation and scheduling to
              material sourcing — so your project runs leaner, faster, and on budget.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every client gets access to our interactive project portal where you can follow progress,
              review milestones, approve decisions, and stay connected with your team — no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { label: 'AI-Optimized Planning', desc: 'Smarter scheduling and cost management that saves you time and money.' },
              { label: 'Client Portal', desc: 'Track every phase of your project in real time from any device.' },
              { label: 'Transparent Pricing', desc: 'Clear scope, honest estimates, no hidden fees.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-dark text-sm mb-1">{item.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-3">Our Services</p>
            <h2 className="text-2xl md:text-3xl font-light text-dark tracking-tight">
              Everything you need, <span className="font-semibold">under one roof.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Single Family Home', icon: '⌂' },
              { label: 'ADU', icon: '◫' },
              { label: 'DADU', icon: '◪' },
              { label: 'Home Remodeling', icon: '◈' },
            ].map((service) => (
              <div
                key={service.label}
                className="flex items-center gap-3 bg-dark text-white px-7 py-4 rounded-2xl text-sm font-semibold tracking-wide shadow-sm"
              >
                <span className="text-gold text-base">{service.icon}</span>
                {service.label}
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { value: 'Seattle', label: 'and Greater WA Area' },
              { value: 'Permit-ready', label: 'End-to-end permitting' },
              { value: '24 hrs', label: 'Response Guarantee' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-semibold text-dark mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Let's Build Together</p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 tracking-tight">
            Have a project in mind?<br />
            <span className="font-semibold">Let's talk.</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
            We're a small team that takes every project seriously. Reach out and we'll respond within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-dark text-sm font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
