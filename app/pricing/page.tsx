'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-charcoal relative overflow-hidden">
      {/* Ambient Background */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-emerald/25 to-transparent blur-3xl -z-10 opacity-40"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-magenta/20 to-transparent blur-3xl -z-10 opacity-30"
      />

      <section className="py-32 container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 1, ease: [0.21, 0.53, 0.29, 1] }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-premium">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-offwhite/70 max-w-3xl mx-auto">
            No hidden fees. No surprises. Everything you need to dominate your market is included.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
        >
          {/* Setup Card */}
          <motion.div variants={itemVariants} className="card-premium glass-glow border-emerald/40 group relative">
            <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-emerald to-magenta text-white text-sm font-bold rounded-bl-lg">
              REQUIRED
            </div>
            <div className="mt-8 mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">Website Rebuild</h2>
              <p className="text-offwhite/60">One-time complete transformation</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-display font-bold text-gradient-premium">$1,500</span>
                <span className="text-offwhite/60">one-time</span>
              </div>
              <p className="text-offwhite/70 text-sm">Everything you need to start converting customers</p>
            </div>

            <Link href="/contact" className="button-luxury w-full py-4 text-center font-bold mb-8 inline-block">
              Start Your Rebuild
            </Link>

            <ul className="space-y-4">
              {[
                '✓ Complete website rebuild',
                '✓ Mobile-optimized design',
                '✓ Lightning-fast performance',
                '✓ Appointment booking system',
                '✓ Portfolio gallery with before-afters',
                '✓ SMS confirmation automation',
                '✓ Analytics dashboard',
                '✓ 2-3 week turnaround',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-offwhite/80">
                  <span className="text-emerald flex-shrink-0 mt-1">{feature.split('✓')[0]}✓</span>
                  <span>{feature.split('✓')[1]}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Monthly Card */}
          <motion.div variants={itemVariants} className="card-premium glass-glow border-magenta/40 group">
            <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-magenta to-emerald text-white text-sm font-bold rounded-bl-lg">
              FOREVER
            </div>
            <div className="mt-8 mb-8">
              <h2 className="font-display text-3xl font-bold mb-2">Ongoing Support</h2>
              <p className="text-offwhite/60">Every month, keep getting better</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-display font-bold text-gradient-premium">$199</span>
                <span className="text-offwhite/60">/month</span>
              </div>
              <p className="text-offwhite/70 text-sm">Includes everything + continuous optimization</p>
            </div>

            <Link href="/contact" className="button-luxury w-full py-4 text-center font-bold mb-8 inline-block">
              Subscribe Now
            </Link>

            <ul className="space-y-4">
              {[
                '✓ Hosting & infrastructure',
                '✓ Security & SSL certificates',
                '✓ Unlimited design changes',
                '✓ Performance monitoring',
                '✓ Conversion optimization',
                '✓ Monthly strategy calls',
                '✓ New features & updates',
                '✓ 24/7 support included',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-offwhite/80">
                  <span className="text-magenta flex-shrink-0 mt-1">{feature.split('✓')[0]}✓</span>
                  <span>{feature.split('✓')[1]}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-glow border-emerald/40 rounded-2xl p-12"
        >
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Your Questions, Answered</h2>
          <div className="space-y-8">
            {[
              {
                q: 'What\'s included in the $199/month?',
                a: 'Everything. Hosting, updates, optimization, analytics, features, support. One price covers it all. No surprises.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. Month-to-month with no contracts. Honestly though, most customers stick around because they see real revenue increases.'
              },
              {
                q: 'How quickly do I see results?',
                a: 'Your site launches in 2-3 weeks. You\'ll start seeing appointments book online immediately after launch.'
              },
              {
                q: 'What if I need something custom?',
                a: 'We build custom features into most sites at no extra cost. Your needs drive what we build.'
              },
              {
                q: 'Do I own my website?',
                a: 'You own your domain, content, and all your data. If you ever leave, everything transfers cleanly. You\'re never locked in.'
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-emerald/20 pb-8 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg mb-3 text-emerald group cursor-pointer">{item.q}</h3>
                <p className="text-offwhite/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
