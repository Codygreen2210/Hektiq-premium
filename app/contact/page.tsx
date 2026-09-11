'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xyzabcde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', business: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-charcoal">
      <section className="py-20 container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center">
            Let's Talk About Your Website
          </h1>
          <p className="text-xl text-offwhite/70 text-center mb-12">
            Tell us about your business and what's not working. We'll respond within 24 hours.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald/20 border border-emerald text-emerald p-4 rounded-lg mb-8 text-center"
            >
              Thanks for reaching out! We'll be in touch soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark border border-charcoal rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/40 focus:border-emerald focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark border border-charcoal rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/40 focus:border-emerald focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Business Name</label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                className="w-full bg-dark border border-charcoal rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/40 focus:border-emerald focus:outline-none transition"
                placeholder="Your business name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Tell Us About Your Website</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-dark border border-charcoal rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/40 focus:border-emerald focus:outline-none transition resize-none"
                placeholder="What's not working? Do you have online booking? Are customers leaving? What would help?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full button-primary text-lg disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-12 border-t border-dark text-center">
            <p className="text-offwhite/60 mb-4">Prefer to call?</p>
            <a href="tel:+1234567890" className="text-emerald text-lg font-semibold hover:text-magenta transition">
              (123) 456-7890
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
