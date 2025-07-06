import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b1120] via-[#181c31] to-[#1a2240] text-white flex flex-col">
      {/* Animated Gradient BG Orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="absolute top-[-8rem] left-[-6rem] w-[24rem] h-[24rem] rounded-full bg-gradient-to-br from-purple-700/50 via-indigo-500/30 to-cyan-400/40 blur-3xl opacity-60 animate-pulse"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute bottom-[-10rem] right-[-8rem] w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/30 to-violet-700/30 blur-3xl opacity-60 animate-pulse"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: 'linear'
          }}
        />
      </motion.div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-b from-[#0b1120]/80 via-[#181c31]/90 to-transparent backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            {/* SVG Placeholder Logo */}
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="url(#logo-gradient)" />
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent transition group-hover:from-indigo-300 group-hover:to-sky-400">
              cool CV
            </span>
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#home" className="transition-colors hover:text-cyan-400 focus-visible:text-cyan-400 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="transition-colors hover:text-cyan-400 focus-visible:text-cyan-400 font-medium">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-cyan-400 focus-visible:text-cyan-400 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="transition-colors hover:text-cyan-400 focus-visible:text-cyan-400 font-medium">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-cyan-400 focus-visible:text-cyan-400 font-medium">
                Contact
              </a>
            </li>
          </ul>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 group">
              <span className="sr-only">Open navigation menu</span>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="stroke-current text-cyan-300 group-hover:text-cyan-400 transition">
                <rect x="4" y="6" width="16" height="2" rx="1" />
                <rect x="4" y="11" width="16" height="2" rx="1" />
                <rect x="4" y="16" width="16" height="2" rx="1" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Sections */}
      <main className="flex-1 flex flex-col mt-20">
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col items-center justify-center min-h-[75vh] max-w-7xl mx-auto px-6 py-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Build a <span className="text-cyan-400">Cool</span> AI-Powered CV<br className="hidden sm:block" /> in Minutes
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-center text-lg md:text-xl text-white/80 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Effortlessly craft standout, visually stunning resumes with the help of AI. Elevate your career with smart suggestions, beautiful layouts, and instant export.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          >
            <a
              href="#cta"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 text-white font-bold text-lg shadow-lg transition hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-300 font-semibold text-lg transition hover:bg-cyan-900/30 hover:text-cyan-100 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              See Features
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative bg-[#13162b]/80 py-24 px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Next-Gen Features to Boost Your Career
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {/* Feature 1 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/60 to-[#13162b]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition group border border-white/10"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #06b6d4a0" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 shadow-lg">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white">
                      <path d="M8 17l4-4 4 4M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ml-4 text-xl font-semibold text-white">AI Content Suggestions</span>
                </div>
                <p className="text-white/80">
                  Get instant, tailored recommendations to perfectly word your experience. Let AI help you shine with bullet points recruiters love.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/60 to-[#13162b]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition group border border-white/10"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #f472b6a0" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-400 via-cyan-400 to-violet-500 shadow-lg">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ml-4 text-xl font-semibold text-white">Beautiful, Customizable Templates</span>
                </div>
                <p className="text-white/80">
                  Choose from modern, eye-catching layouts designed to impress. Easily tweak colors, fonts, and sections with real-time previews.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/60 to-[#13162b]/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition group border border-white/10"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px #a78bfa90" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-fuchsia-400 shadow-lg">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-white">
                      <path d="M12 8v8m0 0l3-3m-3 3l-3-3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ml-4 text-xl font-semibold text-white">1-Click Export & Sharing</span>
                </div>
                <p className="text-white/80">
                  Download as PDF or share a unique link instantly. Send your CV anywhere with a single click—no design skills required.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-24 px-6 bg-[#181c31]/90">
          <motion.div
            className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Image/Illustration Placeholder */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-tr from-cyan-500/30 via-fuchsia-400/10 to-violet-700/30 rounded-3xl flex items-center justify-center shadow-xl border border-white/10">
                <svg width="96" height="96" fill="none" viewBox="0 0 96 96">
                  <rect x="16" y="24" width="64" height="48" rx="8" fill="#fff" fillOpacity="0.05" />
                  <rect x="24" y="32" width="48" height="32" rx="4" fill="#fff" fillOpacity="0.09" />
                  <rect x="32" y="40" width="32" height="16" rx="2" fill="#6366F1" fillOpacity="0.18" />
                </svg>
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg text-white/80 mb-4">
                At <span className="font-semibold text-cyan-400">cool CV</span>, we believe everyone deserves a CV that stands out. Our team blends deep AI expertise with cutting-edge design to help you land more interviews—fast.
              </p>
              <ul className="list-disc ml-6 text-white/70 space-y-2">
                <li>Empowering job seekers with smart, personalized tools</li>
                <li>Democratizing beautiful design for every career stage</li>
                <li>Privacy-first: your data stays yours, always</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-24 px-6 bg-[#13162b]">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {/* Testimonial 1 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/80 to-[#13162b]/90 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 19 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-cyan-400 flex items-center justify-center text-xl font-bold text-[#181c31]">A</div>
                  <div>
                    <span className="block font-semibold text-white">Alex G.</span>
                    <span className="block text-sm text-white/60">Product Manager</span>
                  </div>
                </div>
                <p className="text-white/80">
                  &quot;cool CV made building my resume effortless. The AI suggestions were spot on, and I landed 3 interviews within a week!&quot;
                </p>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/80 to-[#13162b]/90 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 19, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-fuchsia-400 flex items-center justify-center text-xl font-bold text-[#181c31]">S</div>
                  <div>
                    <span className="block font-semibold text-white">Samantha R.</span>
                    <span className="block text-sm text-white/60">Data Scientist</span>
                  </div>
                </div>
                <p className="text-white/80">
                  &quot;I love how customizable the templates are. My CV looks so professional now, and sharing it online was a breeze.&quot;
                </p>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div
                className="bg-gradient-to-b from-[#181c31]/80 to-[#13162b]/90 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 180, damping: 19, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-violet-500 flex items-center justify-center text-xl font-bold text-[#181c31]">L</div>
                  <div>
                    <span className="block font-semibold text-white">Liam T.</span>
                    <span className="block text-sm text-white/60">Designer</span>
                  </div>
                </div>
                <p className="text-white/80">
                  &quot;The AI bullet points made my work history pop! I recommend cool CV to all my friends hunting for jobs.&quot;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative py-24 px-6 bg-gradient-to-tr from-cyan-900 via-violet-900 to-fuchsia-900">
          <motion.div
            className="max-w-4xl mx-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Ready to Build Your Dream CV?
            </h2>
            <p className="text-lg text-center text-white/80 mb-10">
              Join thousands of professionals using cool CV to land their next opportunity. Sign up now—no credit card required!
            </p>
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 text-white font-bold text-xl shadow-xl transition hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Get Started Free
            </a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24 px-6 bg-[#181c31]/90">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-center text-white/80 mb-10">
              Have questions, feedback, or want to partner? Fill out the form below or email us at <a href="mailto:hello@coolcv.ai" className="text-cyan-400 underline hover:text-cyan-300">hello@coolcv.ai</a>.
            </p>
            {/* Contact Form (no actual submission logic, just styling) */}
            <form className="grid gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white/90 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-lg px-4 py-3 bg-[#13162b] border border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/90 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-lg px-4 py-3 bg-[#13162b] border border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
                  placeholder="you@email.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white/90 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-lg px-4 py-3 bg-[#13162b] border border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition resize-none"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 text-white font-bold text-lg shadow-lg transition hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#101322]/95 border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="url(#footer-logo-gradient)" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
              cool CV
            </span>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row gap-7 items-center">
            <a href="#home" className="text-white/70 hover:text-cyan-400 transition font-medium">
              Home
            </a>
            <a href="#features" className="text-white/70 hover:text-cyan-400 transition font-medium">
              Features
            </a>
            <a href="#about" className="text-white/70 hover:text-cyan-400 transition font-medium">
              About
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-cyan-400 transition font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-white/70 hover:text-cyan-400 transition font-medium">
              Contact
            </a>
          </div>
          {/* Socials */}
          <div className="flex gap-5 items-center mt-6 md:mt-0">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition">
              {/* Twitter SVG */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white/70">
                <path
                  d="M21 6.08a8.38 8.38 0 0 1-2.36.65A4.14 4.14 0 0 0 20.44 4c-.81.48-1.71.83-2.67 1.02a4.13 4.13 0 0 0-7.13 3.76A11.72 11.72 0 0 1 3.11 4.95a4.13 4.13 0 0 0 1.28 5.5 4.07 4.07 0 0 1-1.87-.52v.05a4.14 4.14 0 0 0 3.32 4.05c-.42.12-.87.17-1.33.06a4.14 4.14 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 19.54a11.72 11.72 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 21 6.08z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              {/* LinkedIn SVG */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white/70">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.07" />
                <path
                  d="M7 10v7M7 7v.01M12 17v-3a2 2 0 1 1 4 0v3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-400 transition">
              {/* GitHub SVG */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white/70">
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.29 6.84 9.64.5.1.68-.22.68-.48v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07 .9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.16-4.56-5.16 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.07a9.18 9.18 0 0 1 5 0c1.9-1.35 2.74-1.07 2.74-1.07.55 1.42.2 2.47.1 2.73.65.73 1.03 1.66 1.03 2.8 0 4-2.34 4.9-4.57 5.16.36.32.68.95.68 1.92v2.85c0 .26.18.59.69.48C19.13 20.55 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-white/70 text-sm">
          &copy; {new Date().getFullYear()} cool CV. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;