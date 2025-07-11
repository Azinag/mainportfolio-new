# Noureddine Azinag Portfolio

A modern, SEO-optimized portfolio website built with Next.js 14, featuring Google Analytics, Supabase integration, and WhatsApp contact functionality.

## 🚀 Features

- **Next.js 14** with App Router
- **Google Analytics** for visitor tracking
- **Supabase** for contact form data storage
- **WhatsApp Integration** for direct messaging
- **SEO Optimized** with perfect Lighthouse scores
- **Responsive Design** with Tailwind CSS
- **Dark/Light Theme** toggle
- **Framer Motion** animations

## 📋 Setup Instructions

### 1. Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get your **Measurement ID** (starts with G-XXXXXXXXXX)
4. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 2. Supabase Setup

1. Go to [Supabase](https://supabase.com/) and create a free account
2. Create a new project
3. Go to **Settings > API** and copy:
   - Project URL
   - Anon public key
4. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
5. Create the contacts table in Supabase SQL Editor:
   ```sql
   CREATE TABLE contacts (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

### 3. WhatsApp Setup

1. Add your WhatsApp number (with country code, no + or spaces) to `.env.local`:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=212600000000
   ```
   (Replace with your actual number)

### 4. Environment Variables

Create a `.env.local` file in your project root:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id-here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=212600000000
```

## 🔧 Installation

```bash
npm install
npm run dev
```

## 📊 Analytics Features

The website tracks:
- Page views
- Button clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time spent on pages
- Contact form submissions
- WhatsApp message clicks

## 📱 WhatsApp Integration

When users fill out the contact form:
1. Data is saved to Supabase database
2. A formatted WhatsApp message opens automatically
3. Users can send the message directly to your WhatsApp

## 🚀 Deployment

Deploy to Vercel:
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy!

## 📈 Viewing Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View real-time data and reports
4. Check Supabase dashboard for contact form submissions

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- JavaScript (No TypeScript)
- Tailwind CSS
- Framer Motion
- Supabase
- Google Analytics
- WhatsApp API

## 📞 Support

If you need help setting up any of these services, feel free to reach out!