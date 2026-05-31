import type { Metadata } from 'next'
import Link from 'next/link'
import AboutHero from '@/components/AboutHero'

export const metadata: Metadata = {
  title: 'About Us — TN Homes LLC',
  description:
    'Meet Tam Le and Nathan Nguyen — the team behind TN Homes LLC, serving Seattle and Washington State with expert home building, ADU, DADU, and remodeling services.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Intro */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-light leading-snug tracking-tight text-dark">
              TN Homes LLC is Tam Le &amp; Nathan Nguyen.
            </h2>
          </div>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>
              We're two builders based in Renton Highland, WA who started TN Homes LLC with a simple idea:
              do great work, be honest about it, and treat every client's project like it's our own home.
            </p>
            <p>
              Between us, we bring deep hands-on experience in single family home construction, ADUs, DADUs,
              full remodels, and navigating the permitting process in Seattle and across Washington State.
              We know how to get things approved and get them built.
            </p>
            <p>
              We're not a large corporation. We're a small, focused team — and that's intentional. It means
              you work directly with us, and we stay accountable from the first conversation to the final walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Team */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-dark">
              Meet the <span className="font-semibold">founders.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Tam Le',
                role: 'Co-Founder',
                phone: '425-410-6760',
                bio: 'Experienced in home construction and project management, Tam brings a builder\'s eye and a contractor\'s discipline to every project. He oversees field operations, permitting, and ensures every build meets the highest standards.',
              },
              {
                name: 'Nathan Nguyen',
                role: 'Co-Founder',
                phone: '707-954-5081',
                bio: 'Nathan leads client relationships, project planning, and technology integration. He drives the AI-first approach that keeps projects on schedule and on budget, and makes sure clients always know exactly where their project stands.',
              },
            ].map((person) => (
              <div key={person.name} className="border border-gray-100 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl font-semibold text-dark mb-6">
                  {person.name[0]}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-1">{person.name}</h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">{person.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{person.bio}</p>
                <a
                  href={`tel:${person.phone.replace(/-/g, '')}`}
                  className="text-sm font-medium text-dark hover:text-gold transition-colors"
                >
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-dark">
              What sets us <span className="font-semibold">apart.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '◈',
                title: 'AI-First Management',
                description:
                  'We use AI tools to optimize scheduling, manage costs, and streamline decisions — passing real time and money savings directly to our clients.',
              },
              {
                icon: '◇',
                title: 'Client Portal & Tracking',
                description:
                  'Our interactive project portal gives you real-time visibility into every phase. Milestones, photos, approvals — all in one place, always accessible.',
              },
              {
                icon: '○',
                title: 'Transparent & Trustworthy',
                description:
                  'Clear scope. Honest pricing. No surprise invoices. We build relationships the same way we build homes — with integrity and no shortcuts.',
              },
            ].map((value) => (
              <div key={value.title}>
                <span className="text-2xl text-gold block mb-6">{value.icon}</span>
                <h3 className="text-xl font-semibold text-dark mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Where We Work</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-dark mb-6">
            Proudly serving <span className="font-semibold">Seattle &amp; Washington State.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Based in Renton Highland, WA, we serve homeowners and property investors throughout the
            greater Seattle area and nearby communities across Washington State.
            If you're in the region and have a project in mind, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-dark text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
