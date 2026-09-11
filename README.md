# Hektiq Solutions & Consulting

Website optimization and conversion consulting for businesses with online presence.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with navbar & footer
├── globals.css         # Global styles
├── page.tsx            # Homepage
├── pricing/
│   └── page.tsx        # Pricing page
├── contact/
│   └── page.tsx        # Contact form page
└── case-studies/
    └── page.tsx        # Case studies showcase
```

## 🎨 Design System

### Colors
- **Charcoal**: `#0F172A` (Primary background)
- **Dark**: `#1A1F2E` (Secondary background)
- **Emerald**: `#10B981` (Primary accent - growth/success)
- **Magenta**: `#EC4899` (Secondary accent - conversion/urgency)
- **Offwhite**: `#F8F9FA` (Text)

### Typography
- **Display/Headers**: Space Grotesk (bold, energetic)
- **Body**: Inter (clean, readable)

## 🔧 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  charcoal: '#0F172A',
  emerald: '#10B981',
  magenta: '#EC4899',
  offwhite: '#F8F9FA',
  dark: '#1A1F2E',
}
```

### Copy & Content
Edit content directly in page files (`app/page.tsx`, etc.)

### Contact Form
Update the Formspree ID in `app/contact/page.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Get your form ID at [formspree.io](https://formspree.io)

### Phone Number
Update in `app/contact/page.tsx` and `app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically on push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/hektiq-site.git
git push -u origin main
```

### Environment Variables
No environment variables needed for basic deployment.

## 📱 Mobile Responsive

All pages are fully responsive from mobile to desktop. Built with mobile-first approach.

## ✨ Features

- ✅ Hero section with before/after toggle
- ✅ Problem/solution sections with animations
- ✅ Pricing page with clear breakdown
- ✅ Contact form with Formspree integration
- ✅ Case studies showcase
- ✅ Smooth animations with Framer Motion
- ✅ Fully responsive mobile design
- ✅ Fast load times (optimized Next.js)

## 🔗 Important Updates

### Before Going Live

1. **Update contact form ID** (`app/contact/page.tsx`)
2. **Update phone number** (navbar & contact page)
3. **Update email** (`app/layout.tsx` footer)
4. **Update case studies** with real client data
5. **Connect to Vercel** for auto-deployment from GitHub

## 📝 License

Proprietary - Hektiq Solutions & Consulting

## 🤝 Support

Questions? You know who to ask.
