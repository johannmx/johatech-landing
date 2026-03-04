import React, { useState } from 'react'
import { 
  Mail, Github, Linkedin, Twitter, Printer, MapPin, 
  ChevronDown, Briefcase, Layers, User 
} from 'lucide-react'
import { PROFILE, sortByLevel } from './data/profile'

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

  const handlePrint = () => {
    window.print()
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
            <Mail size={18} style={{marginRight: 8, verticalAlign: 'middle'}} />
            {copied ? 'Copiado' : PROFILE.emailPrimary}
          </button>
          <button onClick={handlePrint} className='btn ghost btn-print'>
            <Printer size={18} style={{marginRight: 8, verticalAlign: 'middle'}} />
            Imprimir CV
          </button>
          <a className='btn ghost' href={PROFILE.socials.github} target='_blank' rel='noreferrer'>
            <Github size={18} />
          </a>
          <a className='btn ghost' href={PROFILE.socials.linkedin} target='_blank' rel='noreferrer'>
            <Linkedin size={18} />
          </a>
          <a className='btn ghost' href={PROFILE.socials.x} target='_blank' rel='noreferrer'>
            <Twitter size={18} />
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <main className='content'>
        {/* About */}
        <section className='card about'>
          <h2><User size={20} style={{marginRight: 10}} /> About me</h2>
          <p>{PROFILE.about}</p>
          <p className='muted'>
            <MapPin size={14} style={{marginRight: 4, verticalAlign: 'middle'}} /> {PROFILE.location} · 
            <Mail size={14} style={{marginLeft: 8, marginRight: 4, verticalAlign: 'middle'}} /> {PROFILE.emailLab}
          </p>
        </section>

        {/* Experience */}
        <section className='card experience'>
          <h2><Briefcase size={20} style={{marginRight: 10}} /> Trayectoria & Logros</h2>
          <div className='exp-list'>
            {PROFILE.experience.map((exp, i) => (
              <div key={i} className='exp-item'>
                <div className='exp-header'>
                  <div className='exp-title'>
                    <h3>{exp.role}</h3>
                    <span className='exp-company'>{exp.company}</span>
                  </div>
                  <span className='exp-period'>{exp.period}</span>
                </div>
                <p className='exp-desc'>{exp.description}</p>
                <ul className='exp-achievements'>
                  {exp.achievements.map((ach, j) => (
                    <li key={j}>{ach}</li>
                  ))}
                </ul>
                <div className='exp-tags'>
                  {exp.tags.map((tag, k) => (
                    <span key={k} className='tag-chip'>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack & Skills (collapsible with horizontal bars) */}
        <section className='card skills'>
          <button
            className='skills-toggle'
            onClick={() => setOpenSkills(v => !v)}
            aria-expanded={openSkills}
          >
            <h2><Layers size={20} style={{marginRight: 10}} /> Stack & Skills</h2>
            <ChevronDown size={20} className={openSkills ? 'chev open' : 'chev'} />
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
                    <ChevronDown size={18} className={openCats[cat] ? 'chev open' : 'chev'} />
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
    </div>
  )
}
