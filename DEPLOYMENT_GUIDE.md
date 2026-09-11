# Hektiq Solutions - Deployment & Customization Guide

## 📦 What's Been Built

A complete, production-ready website for Hektiq Solutions and Consulting with:

### Pages
- **Homepage** (`/`) - Hero with before/after toggle, problem/solution sections, 2-week timeline
- **Pricing** (`/pricing`) - Clear $1,500 setup + $199/month pricing with FAQ
- **Contact** (`/contact`) - Contact form with Formspree integration
- **Case Studies** (`/case-studies`) - Portfolio of results and metrics

### Design Features
- ✅ Emerald (#10B981) & Magenta (#EC4899) color scheme
- ✅ Space Grotesk headers (bold, energetic) + Inter body (clean, readable)
- ✅ Framer Motion animations (smooth, not overdone)
- ✅ Mobile-first responsive design
- ✅ Before/after interactive toggle on homepage
- ✅ Smooth scroll, custom scrollbar
- ✅ Fast load times

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Formspree (contact forms)
- Deployed on Vercel

---

## 🚀 Getting Started (Your Phone)

### Step 1: Create GitHub Repo
1. Go to [github.com/new](https://github.com/new)
2. Create repo: `hektiq-site`
3. Clone to your phone or use GitHub web editor

### Step 2: Push Code
```bash
# If cloning locally first
git clone https://github.com/yourusername/hektiq-site.git
cd hektiq-site

# Copy all files from the build into this directory
# Then:
git add .
git commit -m "Initial Hektiq site"
git push origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up / log in with GitHub
3. Click "New Project"
4. Import `hektiq-site` repo
5. Deploy (Vercel auto-detects Next.js)

**Your site is now live at `hektiq-site.vercel.app`**

### Step 4: Connect Custom Domain
1. In Vercel project settings → Domains
2. Add your domain (e.g., `hektiq-solutions.com`)
3. Update DNS records (Vercel provides instructions)

---

## ✏️ Customization

### Quick Updates (GitHub Web Editor)

You can edit these directly from your phone using GitHub's web editor:

1. Go to your repo on GitHub
2. Click `. (period key)` to open web editor
3. Edit files
4. Commit changes → Auto-deploys to Vercel

### What to Customize

#### 1. Contact Form (app/contact/page.tsx)
```typescript
// Line ~32: Update Formspree ID
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Get your ID at [formspree.io](https://formspree.io):
1. Sign up
2. Create new form
3. Copy the form ID

#### 2. Phone Number
Find and replace `(123) 456-7890` with your actual phone:
- `app/contact/page.tsx` (line ~120)
- `app/layout.tsx` (line ~80)

#### 3. Email Address
Find and replace `hello@hektiq.com` with your email:
- `app/layout.tsx` (line ~79)

#### 4. Business Name
Search for "Hektiq" in:
- `app/layout.tsx` (if you want to change brand name)
- `page.tsx`, `pricing/page.tsx`, etc. if you want to update copy

#### 5. Case Studies
Update `app/case-studies/page.tsx` with real client data:
```typescript
const caseStudies = [
  {
    name: 'Your Client Name',
    location: 'City, State',
    challenge: 'What was their problem?',
    result: 'How did you help?',
    metric: '+X% improvement',
    color: 'from-emerald/20 to-emerald/5',
  },
  // Add more...
]
```

#### 6. Colors
Edit `tailwind.config.js` to change colors:
```javascript
colors: {
  charcoal: '#0F172A',    // Main background
  emerald: '#10B981',     // Primary accent
  magenta: '#EC4899',     // Secondary accent
  offwhite: '#F8F9FA',    // Text
  dark: '#1A1F2E',        // Secondary background
}
```

#### 7. Copy/Content
Edit any page directly:
- Homepage: `app/page.tsx`
- Pricing: `app/pricing/page.tsx`
- Case studies: `app/case-studies/page.tsx`
- Navigation: `app/layout.tsx` (line ~12-30)

---

## 📱 Making Edits from Phone

### Using GitHub Web Editor (Easiest)
1. Go to your GitHub repo
2. Press `. (period key)` to open VS Code in browser
3. Edit files right there
4. Commit changes
5. Vercel auto-deploys in ~1 minute

### Using Git + Terminal (If you have CLI access)
```bash
# Clone
git clone https://github.com/yourusername/hektiq-site.git

# Make changes
# Then:
git add .
git commit -m "Update [what changed]"
git push origin main
```

---

## 🔧 After Deployment Checklist

- [ ] Update Formspree form ID
- [ ] Update your phone number
- [ ] Update your email
- [ ] Add your first case study
- [ ] Update domain (if using custom domain)
- [ ] Test contact form sends to your email
- [ ] Test on mobile (open in browser)
- [ ] Share link with first prospect

---

## 📊 Analytics (Optional)

To add Google Analytics:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for your domain
3. Copy Measurement ID

Add to `app/layout.tsx`:
```typescript
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}></script>
<script dangerously SetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
`}} />
```

---

## 🐛 Troubleshooting

### Site won't deploy
- Check `.gitignore` (make sure `node_modules` isn't committed)
- Verify `package.json` exists
- Check Vercel logs

### Contact form not working
- Verify Formspree ID is correct
- Check Formspree inbox (might be in spam)
- Test on Formspree website first

### Styling looks off
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Wait 2 minutes for Vercel to fully deploy
- Check Tailwind config is correct

### Changes not showing
- Push to GitHub
- Wait 1-2 minutes for Vercel deploy
- Hard refresh browser (Cmd+Shift+R)

---

## 📝 Performance Tips

Site is already optimized, but here's what's happening:
- Next.js auto-optimizes for speed
- Tailwind only includes CSS you use
- Framer Motion animations are GPU-accelerated
- Images load lazily
- Vercel CDN serves globally

No additional changes needed.

---

## 🎯 Next Steps

1. **Deploy** to Vercel
2. **Customize** with your info
3. **Send to first prospect** (use the email template)
4. **Collect feedback**
5. **Build first client site** (use same tech stack)

---

## 📞 Quick Reference

**Homepage intro copy**: `app/page.tsx` line ~40-50
**Pricing text**: `app/pricing/page.tsx` line ~50+
**Contact form**: `app/contact/page.tsx` line ~1-50
**Navigation**: `app/layout.tsx` line ~12-30
**Colors**: `tailwind.config.js` line ~15-25
**Font**: `tailwind.config.js` line ~30-35

---

Questions? You know how to find me.
