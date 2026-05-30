'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-dark text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">Reach Out</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Let&apos;s talk about<br />
            <span className="font-semibold">your project.</span>
          </h1>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-4">We&apos;d love to hear from you.</h2>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
              Whether you&apos;re planning a new build, an ADU, or a full remodel — we&apos;re happy to answer
              questions, discuss your goals, and offer a free initial consultation. We respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Address</p>
                <p className="text-dark font-medium">Renton Highland, WA 98059</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email</p>
                <a
                  href="mailto:contact@tnhomes.us"
                  className="text-dark hover:text-gold transition-colors font-medium"
                >
                  contact@tnhomes.us
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Phone</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-24">Tam Le</span>
                    <a href="tel:4254106760" className="text-dark hover:text-gold transition-colors font-medium text-sm">
                      425-410-6760
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 w-24">Nathan Nguyen</span>
                    <a href="tel:7079545081" className="text-dark hover:text-gold transition-colors font-medium text-sm">
                      707-954-5081
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Response Time</p>
                <p className="text-dark font-medium">Within 24 hours</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Service Area</p>
                <p className="text-dark font-medium">Seattle &amp; Greater Washington State</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-start justify-center h-full py-16">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-3">Message Sent!</h3>
                <p className="text-gray-500 mb-8">
                  Thanks for reaching out. Tam or Nathan will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-dark underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-dark transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-dark transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Project Type
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. ADU build, Home remodel, New construction…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-dark transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share any details — location, scope, timeline, budget range. The more we know, the better we can help."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-dark transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-lg">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-dark text-white text-sm font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We&apos;ll get back to you within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
