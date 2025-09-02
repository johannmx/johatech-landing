import React, { useState } from 'react'

const PROFILE = {
  name: 'Johann Medina',
  tagline: 'DevOps · SRE & Cloud Engineer',
  about:
    'Millennial techie, fan de Apple. Lidero prácticas de plataforma, DevSecOps y observabilidad. Enfoque en confiabilidad, automatización y buen DX. Apasionado por la innovación y el aprendizaje continuo.',
  location: 'Buenos Aires, Argentina',
  emailPrimary: 'j@johatech.com',
  emailLab: 'dev@johatech.ar',
  socials: {
    github: 'https://github.com/johannmx',
    linkedin: 'https://www.linkedin.com/in/johannmedina',
    x: 'https://x.com/johannmx'
  },
  skills: [
    'Kubernetes','Azure DevOps','GitLab','Backstage','Observabilidad','OpenTelemetry',
    'Trivy','SonarQube','Terraform','Helm','Docker','Linux','Python','Bash'
  ]
}

export default function App () {
  const [copied, setCopied] = useState(false)
  const copyMail = async () => {
    await navigator.clipboard.writeText(PROFILE.emailPrimary)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className='page'>
      <header className='hero'>
        <div className='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' className='jmark'>
            <rect rx='14' width='64' height='64' fill='url(#g)'/>
            <path d='M38 14a2 2 0 0 1 2 2v20c0 8-6 14-14 14h-2a2 2 0 1 1 0-4h2c5.523 0 10-4.477 10-10V16a2 2 0 0 1 2-2Z' fill='white'/>
            <defs>
              <linearGradient id='g' x1='0' y1='0' x2='64' y2='64'>
                <stop offset='0%' stop-color='#2F7CF3'/>
                <stop offset='100%' stop-color='#0B3B91'/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1>JOHATECH</h1>
        <p className='tag'>{PROFILE.tagline}</p>
        <div className='cta'>
          <button onClick={copyMail} className='btn primary'>{copied ? 'Copiado' : PROFILE.emailPrimary}</button>
          <a className='btn ghost' href={PROFILE.socials.github} target='_blank' rel='noreferrer'>GitHub</a>
          <a className='btn ghost' href={PROFILE.socials.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a>
          <a className='btn ghost' href={PROFILE.socials.x} target='_blank' rel='noreferrer'>X</a>
        </div>
      </header>

      <main className='content'>
        <section className='card about'>
          <h2>Sobre mí</h2>
          <p>{PROFILE.about}</p>
          <p className='muted'>{PROFILE.location} · {PROFILE.emailLab}</p>
        </section>

        <section className='card skills'>
          <h2>Stack & Skills</h2>
          <div className='chips'>
            {PROFILE.skills.map((s, i) => (<span key={i} className='chip'>{s}</span>))}
          </div>
        </section>
      </main>

      <footer className='foot'>
        <small>© {new Date().getFullYear()} Johatech · Built with ❤️</small>
      </footer>
    </div>
  )
}
