import React, { useState } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const PROFILE = {
  name: 'Johann J. Medina F.',
  tagline: 'DevOps · SRE & Cloud Engineer',
  about:
    'Millennial techie, fan de Apple. Lidero prácticas de plataforma, DevSecOps y observabilidad. Enfoque en confiabilidad, automatización y buen DX. Apasionado por la innovación y el aprendizaje continuo.',
  location: 'Buenos Aires, Argentina',
  emailPrimary: 'j@johatech.com',
  emailLab: 'dev@johatech.ar',
  socials: {
    github: 'https://github.com/johannmx',
    linkedin: 'https://www.linkedin.com/in/johannmedina',
    x: 'https://x.com/johannmx',
  },
  // Categorized skills (labels already in English as requested)
  skills: {
    'Platform': [
      { name: 'Kubernetes', level: 90 },
      { name: 'Terraform',  level: 82 },
      { name: 'Helm',       level: 80 },
      { name: 'Docker',     level: 90 },
      { name: 'Linux',      level: 86 },
    ],
    'CI/CD': [
      { name: 'Azure DevOps', level: 85 },
      { name: 'GitLab',       level: 82 },
      { name: 'Backstage',    level: 78 },
    ],
    'Observability': [
      { name: 'Observability', level: 88 },
      { name: 'OpenTelemetry',  level: 72 },
      // Add Grafana/Prometheus as separate items if desired
    ],
    'DevSecOps': [
      { name: 'Trivy',     level: 78 },
      { name: 'SonarQube', level: 76 },
    ],
    'Languages': [
      { name: 'Bash',   level: 86 },
      { name: 'Python', level: 72 },
    ],
  },
}

const sortByLevel = (arr) => [...arr].sort((a, b) => b.level - a.level)

export default function App () {
  const [copied, setCopied] = useState(false)
  const [openSkills, setOpenSkills] = useState(true)
  const [openCats, setOpenCats] = useState({
    'Platform': true,
    'CI/CD': false,
    'Observability': false,
    'DevSecOps': false,
    'Languages': false
  })

  const copyMail = async () => {
    await navigator.clipboard.writeText(PROFILE.emailPrimary)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className='page'>
      {/* HERO */}
      <header className='hero'>
        <div className='logo'>
          {/* J Mark */}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' className='jmark'>
            <rect rx='14' width='64' height='64' fill='url(#g)'/>
            <path d='M38 14a2 2 0 0 1 2 2v20c0 8-6 14-14 14h-2a2 2 0 1 1 0-4h2c5.523 0 10-4.477 10-10V16a2 2 0 0 1 2-2Z' fill='white'/>
            <defs>
              <linearGradient id='g' x1='0' y1='0' x2='64' y2='64'>
                <stop offset='0%' stopColor='#2F7CF3'/>
                <stop offset='100%' stopColor='#0B3B91'/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1>{PROFILE.name}</h1>
        <p className='tag'>{PROFILE.tagline}</p>

        <div className='cta'>
          <button onClick={copyMail} className='btn primary'>
            {copied ? 'Copiado' : PROFILE.emailPrimary}
          </button>
          <a className='btn ghost' href={PROFILE.socials.github} target='_blank' rel='noreferrer'>GitHub</a>
          <a className='btn ghost' href={PROFILE.socials.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a>
          <a className='btn ghost' href={PROFILE.socials.x} target='_blank' rel='noreferrer'>X</a>
        </div>
      </header>

      {/* CONTENT */}
      <main className='content'>
        {/* About */}
        <section className='card about'>
          <h2>About me</h2>
          <p>{PROFILE.about}</p>
          <p className='muted'>{PROFILE.location} · {PROFILE.emailLab}</p>
        </section>

        {/* Stack & Skills (collapsible with horizontal bars) */}
        <section className='card skills'>
          <button
            className='skills-toggle'
            onClick={() => setOpenSkills(v => !v)}
            aria-expanded={openSkills}
          >
            <h2>Stack & Skills</h2>
            <svg width='18' height='18' viewBox='0 0 24 24' className={openSkills ? 'chev open' : 'chev'}>
              <path fill='currentColor' d='M7 10l5 5 5-5z'/>
            </svg>
          </button>

          <div className={openSkills ? 'skills-body open' : 'skills-body'}>
            {Object.entries(PROFILE.skills).map(([cat, items]) => {
              const avg = Math.round(items.reduce((a, c) => a + c.level, 0) / items.length)
              return (
                <div key={cat} className='skill-cat'>
                  <button
                    className='cat-toggle'
                    onClick={() => setOpenCats(s => ({ ...s, [cat]: !s[cat] }))}
                    aria-expanded={openCats[cat]}
                  >
                    <span>
                      {cat}
                      <span style={{
                        marginLeft: 8,
                        fontSize: '12px',
                        color: 'var(--muted)',
                        border: '1px solid var(--border)',
                        padding: '2px 8px',
                        borderRadius: '999px'
                      }}>
                        {items.length} items · avg {avg}%
                      </span>
                    </span>
                    <svg width='16' height='16' viewBox='0 0 24 24' className={openCats[cat] ? 'chev open' : 'chev'}>
                      <path fill='currentColor' d='M7 10l5 5 5-5z'/>
                    </svg>
                  </button>

                  <div className={openCats[cat] ? 'cat-body open' : 'cat-body'}>
                    <div className='hrows'>
                      {sortByLevel(items).map((s, i) => (
                        <div key={i} className='hrow' style={{ ['--level']: `${s.level}%`, ['--delay']: `${i * 60}ms` }}>
                          <div className='hmeta'>
                            <span className='hname' title={s.name} style={{ fontSize: '1rem' }}>{s.name}</span>
                            <span className='hperc'>{s.level}%</span>
                          </div>
                          <div className='hbar'>
                            <div className='hbar-fill' style={{ width: `${s.level}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className='foot'>
        <small>© {new Date().getFullYear()} Johatech · Built with ❤️</small>
      </footer>
      <SpeedInsights />
    </div>
  )
}
