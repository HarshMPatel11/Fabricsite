import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

const collections = [
  { name: 'Silk Noir', tag: 'Mulberry · Hand-loomed', cls: 'swatch-4' },
  { name: 'Desert Linen', tag: 'European Flax · Stonewashed', cls: 'swatch-1' },
  { name: 'Forest Wool', tag: 'Merino · Twill Weave', cls: 'swatch-2' },
  { name: 'Crimson Velvet', tag: 'Cotton-Silk · Plush', cls: 'swatch-3' },
  { name: 'Ivory Cashmere', tag: 'Mongolian · Brushed', cls: 'swatch-5' },
  { name: 'Tobacco Suede', tag: 'Italian Calfskin · Matte', cls: 'swatch-6' },
]

const steps = [
  { n: '01', t: 'Source', d: 'Hand-picked fibers from heritage farms across Italy, India, and Mongolia.' },
  { n: '02', t: 'Weave', d: 'Master weavers operating restored 19th-century looms and modern jacquards.' },
  { n: '03', t: 'Dye', d: 'Natural plant dyes and low-impact pigments for depth and longevity.' },
  { n: '04', t: 'Finish', d: 'Hand-inspected, brushed, and pressed for the perfect drape.' },
]

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">Luxe<span>Weave</span></a>
          <div className="nav-links">
            <a href="#collections">Collections</a>
            <a href="#craft">Our Craft</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '☾' : '☀'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container hero-grid">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <motion.span className="eyebrow" variants={fadeUp} custom={0}>
              Since 1948 · Family-run Mill
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>
              Fabrics woven with <em>quiet</em> intention.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}>
              LuxeWeave is a heritage textile house crafting fabric for designers,
              ateliers, and homes that value the slow art of making.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <a href="#collections" className="cta">Explore Collections →</a>
              <a href="#craft" className="cta-ghost">Our Story</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="num">77</div>
              <div className="lbl">Years of Craft</div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* COLLECTIONS */}
      <section id="collections">
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="eyebrow">The Collections</span>
            <h2>Textures that endure.</h2>
            <p>Six signature lines, each defined by a single material principle and decades of refinement.</p>
          </motion.div>

          <div className="grid-3">
            {collections.map((c, i) => (
              <motion.div
                key={c.name} className="card"
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp} custom={i}
              >
                <div className="card-img"><div className={`swatch ${c.cls}`} /></div>
                <div className="card-body">
                  <h3>{c.name}</h3>
                  <p>{c.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="craft">
        <div className="container about">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="eyebrow">Our Craft</span>
            <h2>Three generations at the loom.</h2>
            <p>
              Founded in 1948 by Arman Visconti, LuxeWeave has remained a family-run
              mill across three generations. We still weave on the same restored looms
              our grandfather used — paired now with modern jacquards for the most
              intricate patterns.
            </p>
            <p>
              Every meter passes through human hands at least seven times.
            </p>
            <div className="stats">
              <div className="stat"><div className="num">120+</div><div className="lbl">Artisans</div></div>
              <div className="stat"><div className="num">42</div><div className="lbl">Countries</div></div>
              <div className="stat"><div className="num">9k</div><div className="lbl">Bolts / yr</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="eyebrow">Process</span>
            <h2>From fiber to finish.</h2>
          </motion.div>
          <div className="process-grid">
            {steps.map((s, i) => (
              <motion.div
                key={s.n} className="step"
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <div className="n">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="container">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>Begin a conversation.</h2>
            <p>Request swatches, schedule a mill visit, or commission a custom weave for your next project.</p>
            <a href="mailto:atelier@luxeweave.example" className="cta">Request Swatches →</a>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="container foot">
          <p>© {new Date().getFullYear()} LuxeWeave Mills. Woven in Como, Italy.</p>
          <div className="foot-links">
            <a href="#">Instagram</a>
            <a href="#">Trade Program</a>
            <a href="#">Press</a>
          </div>
        </div>
      </footer>
    </>
  )
}
