'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const caseStudies = [
    {
      name: 'Mirror Salon',
      location: 'Alexandria, LA',
      challenge: 'No online booking system. Customers couldn\'t find how to schedule.',
      result: 'Went from 3 online bookings/week to 12 in first month.',
      metric: '+300% appointments',
      color: 'from-emerald/20 to-emerald/5',
    },
    {
      name: 'Mia Bella Salon & Suites',
      location: 'Alexandria, LA',
      challenge: 'Slow website, no portfolio showing work, customers leaving for competitors.',
      result: 'Mobile site rebuilt, portfolio gallery added. Bookings increased 40%.',
      metric: '+8 appointments/week',
      color: 'from-magenta/20 to-magenta/5',
    },
    {
      name: 'Local HVAC Company',
      location: 'Baton Rouge, LA',
      challenge: 'Website was 5 years old. No contact form optimization. Lead quality poor.',
      result: 'New site built with optimized contact form. Lead volume up 60%.',
      metric: '+18 qualified leads/month',
      color: 'from-emerald/20 to-magenta/20',
    },
  ]

  return (
    <main className="min-h-screen bg-charcoal">
      <section className="py-20 container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Results We've Delivered
          </h1>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Real businesses. Real improvements. Real revenue gains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`bg-gradient-to-br ${study.color} rounded-2xl p-8 border border-emerald/30 group hover:border-magenta/30 transition`}
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold mb-1">{study.name}</h3>
                <p className="text-offwhite/60 text-sm">{study.location}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-offwhite/70 mb-4">
                  <span className="font-semibold block mb-2">Challenge:</span>
                  {study.challenge}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-offwhite/70">
                  <span className="font-semibold block mb-2">Result:</span>
                  {study.result}
                </p>
              </div>

              <div className="pt-6 border-t border-emerald/20">
                <div className="text-emerald font-display font-bold text-xl group-hover:text-magenta transition">
                  {study.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark rounded-2xl p-12 border border-charcoal/50 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-emerald font-display text-5xl font-bold mb-2">25+</div>
              <p className="text-offwhite/60">Businesses Transformed</p>
            </div>
            <div>
              <div className="text-magenta font-display text-5xl font-bold mb-2">2.8x</div>
              <p className="text-offwhite/60">Average Booking Increase</p>
            </div>
            <div>
              <div className="text-emerald font-display text-5xl font-bold mb-2">$2.4M+</div>
              <p className="text-offwhite/60">Revenue Generated</p>
            </div>
            <div>
              <div className="text-magenta font-display text-5xl font-bold mb-2">98%</div>
              <p className="text-offwhite/60">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald/10 to-magenta/10 rounded-2xl p-12 border border-emerald/30"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Your website could be next.
          </h2>
          <p className="text-lg text-offwhite/70 mb-8">
            Let's talk about what's possible for your business.
          </p>
          <Link href="/contact" className="button-primary inline-block text-lg">
            Start Your Transformation
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
