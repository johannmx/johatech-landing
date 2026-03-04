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
  experience: [
    {
      role: 'Lead DevOps · SRE & Cloud Engineer',
      company: 'Tu Empresa Actual',
      period: '2022 — Presente',
      description: 'Liderando la estrategia de plataforma y observabilidad. Implementación de arquitecturas Cloud Native y automatización de infraestructura.',
      achievements: [
        'Reducción de costos operativos en un 30% mediante optimización de recursos en Kubernetes.',
        'Implementación de pipelines de CI/CD robustos con enfoque en DevSecOps.',
        'Mejora de la observabilidad mediante OpenTelemetry y Grafana.'
      ],
      tags: ['Kubernetes', 'AWS', 'Terraform', 'OpenTelemetry']
    },
    {
      role: 'SRE / Platform Engineer',
      company: 'Empresa Anterior',
      period: '2020 — 2022',
      description: 'Gestión de infraestructura a gran escala y soporte a equipos de desarrollo para mejorar el DX (Developer Experience).',
      achievements: [
        'Migración exitosa de servicios legacy a contenedores.',
        'Automatización total del aprovisionamiento de infraestructura con IaC.'
      ],
      tags: ['Docker', 'Azure', 'Ansible', 'Linux']
    }
  ]
}

export const sortByLevel = (arr) => [...arr].sort((a, b) => b.level - a.level)
