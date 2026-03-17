import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const serviceLinks = [
  { to: '/cloud-services', label: 'Cloud Services', desc: 'Multi-cloud infrastructure & migration', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { to: '/cloud-security', label: 'Cloud Security', desc: 'Compliance, SIEM & threat detection', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { to: '/devops', label: 'DevOps', desc: 'CI/CD, IaC & container orchestration', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { to: '/app-development', label: 'App Development', desc: 'Full-stack web & mobile solutions', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { to: '/ai-ml', label: 'AI / ML', desc: 'Machine learning & intelligent automation', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  /* close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  const isServiceActive = serviceLinks.some((l) => pathname.startsWith(l.to))

  const handleDropdownEnter = () => {
    clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`nav-dark fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* ---- Logo ---- */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Cloud<span className="gt">Trio</span>
            </span>
          </Link>

          {/* ---- Desktop Links ---- */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={`text-[13px] px-3.5 py-2 rounded-lg transition-colors duration-200 ${
                isActive('/') && pathname === '/'
                  ? 'font-medium'
                  : ''
              }`}
              style={{
                color: isActive('/') && pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`text-[13px] px-3.5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-1.5 ${
                  isServiceActive ? 'font-medium' : ''
                }`}
                style={{
                  color: isServiceActive ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] p-2 rounded-2xl t-card backdrop-blur-xl border t-border shadow-2xl shadow-black/50"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {serviceLinks.map((s, i) => (
                        <motion.div
                          key={s.to}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            to={s.to}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item ${
                              isActive(s.to)
                                ? 'bg-violet-500/10'
                                : 'hover:bg-white/[0.04]'
                            }`}
                            style={{ color: isActive(s.to) ? 'var(--accent)' : 'var(--text-secondary)' }}
                          >
                            <div className={`ibox flex-shrink-0 mt-0.5 ${
                              isActive(s.to)
                                ? 'bg-violet-500/20'
                                : 'bg-white/[0.04] group-hover/item:bg-white/[0.08]'
                            }`}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-medium" style={{ color: isActive(s.to) ? 'var(--accent)' : 'var(--text-primary)' }}>{s.label}</div>
                              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.desc}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="sep my-2" />
                    <div className="px-2 pb-1">
                      <div className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1.5" style={{ color: 'var(--text-muted)' }}>Products</div>
                      <Link to="/products" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm hover:bg-white/[0.04] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg></span>
                        <span><span style={{ color: 'var(--text-primary)' }} className="font-medium text-xs">CloudLunar</span><br /><span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>AWS Cost Optimization</span></span>
                      </Link>
                      <Link to="/products/cloudsentinel" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm hover:bg-white/[0.04] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-6 h-6 rounded-md bg-pink-500/10 flex items-center justify-center"><svg className="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></span>
                        <span><span style={{ color: 'var(--text-primary)' }} className="font-medium text-xs">CloudSentinel</span><br /><span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Multi-Cloud Security</span></span>
                      </Link>
                    </div>
                    <div className="sep my-1" />
                    <Link
                      to="/products"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs hover:bg-white/[0.04] transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      View all products →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other main links */}
            {mainLinks.filter((l) => l.to !== '/').map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[13px] px-3.5 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(l.to) ? 'font-medium' : ''
                }`}
                style={{
                  color: isActive(l.to) ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ---- Desktop CTA + Theme Toggle ---- */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-primary btn-sm">
              Get Started Free
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* ---- Mobile Hamburger ---- */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ======= Mobile Menu ======= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-80 t-card border-l t-border z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Mobile Logo + Theme Toggle */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      Cloud<span className="gt">Trio</span>
                    </span>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="sep mb-6" />

                {/* Mobile Links */}
                <div className="flex flex-col gap-0.5">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 }}
                  >
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        pathname === '/' ? 'font-medium bg-violet-500/10' : 'hover:bg-white/[0.04]'
                      }`}
                      style={{ color: pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)' }}
                    >
                      Home
                    </Link>
                  </motion.div>

                  {/* Services accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        isServiceActive ? 'font-medium bg-violet-500/10' : 'hover:bg-white/[0.04]'
                      }`}
                      style={{ color: isServiceActive ? 'var(--accent)' : 'var(--text-secondary)' }}
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-1 pb-1 flex flex-col gap-0.5">
                            {serviceLinks.map((s) => (
                              <Link
                                key={s.to}
                                to={s.to}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm transition-colors ${
                                  isActive(s.to) ? 'font-medium' : ''
                                }`}
                                style={{ color: isActive(s.to) ? 'var(--accent)' : 'var(--text-muted)' }}
                              >
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                                </svg>
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {mainLinks.filter((l) => l.to !== '/').map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.09 + i * 0.03 }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                          isActive(l.to) ? 'font-medium bg-violet-500/10' : 'hover:bg-white/[0.04]'
                        }`}
                        style={{ color: isActive(l.to) ? 'var(--accent)' : 'var(--text-secondary)' }}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="sep my-6" />

                {/* Mobile CTAs */}
                <div className="flex flex-col gap-3">
                  <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center btn-sm">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
