import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">TN Homes LLC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Home building, ADU, DADU &amp; remodeling in Seattle and greater Washington State.
              AI-first management. Transparent pricing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@tnhomes.us" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact@tnhomes.us
                </a>
              </li>
              <li>
                <a href="tel:4254106760" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Tam: 425-410-6760
                </a>
              </li>
              <li>
                <a href="tel:7079545081" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Nathan: 707-954-5081
                </a>
              </li>
              <li className="text-sm text-gray-400">Renton Highland, WA 98059</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} TN Homes LLC. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Renton Highland, WA 98059</p>
        </div>
      </div>
    </footer>
  )
}
