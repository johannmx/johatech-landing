export const PROFILE = {
  name: 'Johann J. Medina F.',
  tagline: 'Lead DevOps · SRE & Cloud Engineer',
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

export const sortByLevel = (arr) => [...arr].sort((a, b) => b.level - a.level)
