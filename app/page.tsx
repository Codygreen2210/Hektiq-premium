'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const [isBeforeMode, setIsBeforeMode] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0)',
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Multiple Floating Ambient Orbs */}
      <motion.div
        animate={{ y: [0, 80, 0], x: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="fixed top-10 left-5 w-96 h-96 rounded-full bg-gradient-to-br from-emerald/20 to-emerald/5 blur-3xl -z-10 opacity-60"
      />
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="fixed bottom-20 right-10 w-full max-w-96 h-96 rounded-full bg-gradient-to-br from-magenta/20 to-magenta/5 blur-3xl -z-10 opacity-50"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="fixed top-1/3 left-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-cyan/10 to-emerald/5 blur-3xl -z-10 opacity-40"
      />

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="container-max w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(30px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, ease: [0.21, 0.53, 0.29, 1] }}
          >
            {/* Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-16 mx-auto mb-8 bg-gradient-to-r from-emerald via-magenta to-emerald rounded-full"
            />

            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gradient-premium block"
              >
                Streamline.
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gradient-premium block"
              >
                Convert.
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-gradient-premium block"
              >
                Grow.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-wide"
            >
              We rebuild broken websites that lose customers. Fast, mobile-first, built to convert. Premium design meets performance.
            </motion.p>
          </motion.div>

          {/* Before/After Toggle - Premium Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="inline-flex glass rounded-full p-1.5 border border-emerald/30 mb-12 shadow-2xl">
              <button
                onClick={() => setIsBeforeMode(true)}
                className={`px-10 py-3.5 rounded-full font-semibold transition-all duration-700 ${
                  isBeforeMode
                    ? 'bg-gradient-to-r from-emerald to-magenta text-white shadow-2xl shadow-emerald/40'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setIsBeforeMode(false)}
                className={`px-10 py-3.5 rounded-full font-semibold transition-all duration-700 ${
                  !isBeforeMode
                    ? 'bg-gradient-to-r from-emerald to-magenta text-white shadow-2xl shadow-magenta/40'
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                After
              </button>
            </div>

            {/* Preview Box */}
            <motion.div
              key={isBeforeMode ? 'before' : 'after'}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.7 }}
              className={`glass-glow max-w-lg mx-auto rounded-2xl p-12 backdrop-blur-xl ${
                !isBeforeMode 
                  ? 'border-emerald/40 shadow-2xl shadow-emerald/20' 
                  : 'border-red-500/20 shadow-2xl shadow-red-500/10'
              }`}
            >
              {isBeforeMode ? (
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                    <div className="text-sm text-red-300/80">Loads in 8-10 seconds</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                    <div className="text-sm text-red-300/80">No "Book Now" button visible</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                    <div className="text-sm text-red-300/80">Dark, unreadable forms</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                    <div className="text-sm text-red-300/80">No portfolio showing your work</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                    <div className="text-sm text-red-300/80">Customers leave for competitors</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald text-xl flex-shrink-0">✓</span>
                    <div className="text-sm text-emerald/80">Loads in under 2 seconds</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald text-xl flex-shrink-0">✓</span>
                    <div className="text-sm text-emerald/80">Clear "Book Appointment" CTA</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald text-xl flex-shrink-0">✓</span>
                    <div className="text-sm text-emerald/80">Beautiful, mobile-optimized booking</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald text-xl flex-shrink-0">✓</span>
                    <div className="text-sm text-emerald/80">Portfolio gallery showcasing work</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald text-xl flex-shrink-0">✓</span>
                    <div className="text-sm text-emerald/80">Customers book online, revenue increases</div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact" className="button-luxury text-lg px-10 py-4">
              Let's Transform Your Website
            </Link>
            <Link href="/case-studies" className="button-secondary-luxury text-lg px-10 py-4">
              See What's Possible
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ PROBLEMS SECTION ============ */}
      <section className="relative py-32 overflow-hidden">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="text-center mb-20">
              <h2 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
                What's Killing Your
                <br />
                <span className="text-gradient-premium">Online Business</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald to-magenta rounded-full mx-auto mt-6"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: 'Broken or Missing Booking',
                description: 'Customers want to book online but can\'t find how. They leave and book elsewhere.',
                icon: '🚫',
                color: 'from-red-500/10 to-red-400/5'
              },
              {
                title: 'Slow Loading & Poor Mobile',
                description: 'Sites take 8+ seconds to load on mobile. Half your customers are gone.',
                icon: '⏳',
                color: 'from-orange-500/10 to-orange-400/5'
              },
              {
                title: 'No Portfolio Showcase',
                description: 'Potential customers can\'t see your work. Trust disappears.',
                icon: '🖼️',
                color: 'from-purple-500/10 to-purple-400/5'
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group card-premium bg-gradient-to-br ${problem.color} border border-white/10 hover:border-emerald/40 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{problem.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-emerald transition-colors">{problem.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-glow border-red-500/30 rounded-2xl p-12 text-center backdrop-blur-xl shadow-2xl shadow-red-500/10"
          >
            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              The Result:<span className="text-red-400"> You lose 10-15 customers per week</span>
            </p>
            <p className="text-lg text-red-300/80 max-w-2xl mx-auto">
              That's $500-1,000+ in revenue walking out the door every single week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ SOLUTIONS SECTION ============ */}
      <section className="relative py-32 overflow-hidden">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="text-center mb-20">
              <h2 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-premium">How We Fix It</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald to-magenta rounded-full mx-auto mt-6"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '⚡ Lightning-Fast Booking',
                description: 'Mobile-first appointment system. Customers book in 60 seconds. SMS confirmations included.',
                color: 'from-emerald-500/10 to-emerald-400/5'
              },
              {
                title: '🔥 Blazing Fast Load Times',
                description: 'Sites that load in under 2 seconds. Optimized for mobile. No visitors left behind.',
                color: 'from-magenta-500/10 to-magenta-400/5'
              },
              {
                title: '✨ Portfolio That Sells',
                description: 'Beautiful before-and-afters showcasing your best work. Build trust instantly.',
                color: 'from-cyan-500/10 to-cyan-400/5'
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group card-premium bg-gradient-to-br ${solution.color} border border-white/10 hover:border-emerald/40`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold mb-4 text-white group-hover:text-emerald transition-colors">{solution.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ PROCESS SECTION ============ */}
      <section className="relative py-32 overflow-hidden">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="text-center mb-20">
              <h2 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Your Website Ships in
                <br />
                <span className="text-gradient-premium">2-3 Weeks</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald to-magenta rounded-full mx-auto mt-6"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { phase: '1', title: 'Audit & Plan', desc: 'We analyze what\'s broken and design the fix.' },
              { phase: '2', title: 'Build & Design', desc: 'Fast, mobile-first site + booking system.' },
              { phase: '3', title: 'Launch & Optimize', desc: 'Your new site goes live.' },
              { phase: '∞', title: 'Grow Together', desc: '$199/mo keeps it perfect.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card-premium bg-gradient-to-br from-emerald-500/5 to-magenta-500/5 border border-white/10 hover:border-emerald/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-display font-bold text-gradient-premium mb-2">{step.phase}</div>
                  <h3 className="font-display font-bold text-lg mb-3 text-white group-hover:text-emerald transition-colors">{step.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="relative py-40 overflow-hidden">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-emerald/15 to-transparent blur-3xl -z-10 opacity-40"
        />

        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="font-display text-6xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
              Turn Your Website Into a
              <br />
              <span className="text-gradient-premium">Revenue Machine</span>
            </h2>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join businesses that went from invisible to irresistible. Your first transformation starts now.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="button-luxury text-lg px-12 py-5">
                Schedule Your Free Audit
              </Link>
              <Link href="/pricing" className="button-secondary-luxury text-lg px-12 py-5">
                View Pricing
              </Link>
            </div>

            <p className="text-white/40 text-sm mt-8">
              ✨ Enterprise-grade websites for ambitious businesses ✨
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
