import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hektiq Solutions & Consulting | Website Optimization & Conversion',
  description: 'Streamline your website to drive traffic and convert customers into buyers. We rebuild broken websites for businesses with online presence.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-charcoal text-offwhite font-sans relative overflow-x-hidden">
        <div className="ambient-bg"></div>
        
        <nav className="sticky top-0 z-50 glass border-b border-emerald/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="text-2xl font-display font-bold text-gradient-premium">
              Hektiq
            </div>
            <div className="flex gap-8 items-center">
              <a href="#" className="text-sm text-offwhite/70 hover:text-emerald transition font-medium">How it Works</a>
              <a href="/case-studies" className="text-sm text-offwhite/70 hover:text-emerald transition font-medium">Case Studies</a>
              <a href="/pricing" className="text-sm text-offwhite/70 hover:text-emerald transition font-medium">Pricing</a>
              <a href="/contact" className="button-luxury text-sm">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="glass border-t border-emerald/20 py-16 mt-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-display font-bold text-gradient-premium mb-4">Hektiq</h3>
                <p className="text-sm text-offwhite/60">Streamline. Convert. Grow.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm text-offwhite">Solutions</h4>
                <ul className="space-y-2 text-sm text-offwhite/60">
                  <li><a href="#" className="hover:text-emerald transition">Website Rebuild</a></li>
                  <li><a href="#" className="hover:text-emerald transition">Booking Systems</a></li>
                  <li><a href="#" className="hover:text-emerald transition">Conversion Optimization</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm text-offwhite">Company</h4>
                <ul className="space-y-2 text-sm text-offwhite/60">
                  <li><a href="/case-studies" className="hover:text-emerald transition">Case Studies</a></li>
                  <li><a href="/pricing" className="hover:text-emerald transition">Pricing</a></li>
                  <li><a href="/contact" className="hover:text-emerald transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm text-offwhite">Contact</h4>
                <p className="text-sm text-offwhite/60">Let's talk about your website.</p>
                <a href="mailto:cody@hektiq.com" className="text-emerald hover:text-magenta transition text-sm mt-2 block font-medium">cody@hektiq.com</a>
                <a href="tel:+13183194561" className="text-emerald hover:text-magenta transition text-sm mt-1 block font-medium">(318) 319-4561</a>
              </div>
            </div>
            <div className="border-t border-emerald/20 pt-8 text-center text-sm text-offwhite/40">
              <p>&copy; 2024 Hektiq Solutions & Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
