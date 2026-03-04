export const PROFILE = {
  en: {
    name: 'Johann J. Medina F.',
    tagline: 'Lead DevOps · SRE & Cloud Engineer',
    location: 'Buenos Aires, Argentina',
    emailPrimary: 'j@johatech.com',
    emailLab: 'dev@johatech.ar',
    socials: {
      github: 'https://github.com/johannmx',
      linkedin: 'https://www.linkedin.com/in/johannmedina',
      x: 'https://x.com/johannmx',
    },
    ui: {
      about: 'About me',
      experience: 'Trajectory & Achievements',
      stack: 'Stack & Skills',
      items: 'items',
      avg: 'avg',
      copy: 'Copied',
      print: 'Print Resume',
      present: 'Present'
    },
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
        company: 'Your Current Company',
        period: '2022 — Present',
        description: 'Leading platform strategy and observability. Implementing Cloud Native architectures and infrastructure automation.',
        achievements: [
          'Reduced operational costs by 30% through Kubernetes resource optimization.',
          'Implemented robust CI/CD pipelines with a DevSecOps focus.',
          'Improved observability using OpenTelemetry and Grafana.'
        ],
        tags: ['Kubernetes', 'AWS', 'Terraform', 'OpenTelemetry']
      },
      {
        role: 'SRE / Platform Engineer',
        company: 'Previous Company',
        period: '2020 — 2022',
        description: 'Managing large-scale infrastructure and supporting development teams to improve DX (Developer Experience).',
        achievements: [
          'Successful migration of legacy services to containers.',
          'Total automation of infrastructure provisioning with IaC.'
        ],
        tags: ['Docker', 'Azure', 'Ansible', 'Linux']
      }
    ]
  },
  es: {
    name: 'Johann J. Medina F.',
    tagline: 'Lead DevOps · SRE & Cloud Engineer',
    location: 'Buenos Aires, Argentina',
    emailPrimary: 'j@johatech.com',
    emailLab: 'dev@johatech.ar',
    socials: {
      github: 'https://github.com/johannmx',
      linkedin: 'https://www.linkedin.com/in/johannmedina',
      x: 'https://x.com/johannmx',
    },
    ui: {
      about: 'Sobre mí',
      experience: 'Trayectoria & Logros',
      stack: 'Stack & Skills',
      items: 'items',
      avg: 'prom',
      copy: 'Copiado',
      print: 'Imprimir CV',
      present: 'Presente'
    },
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
}

export const sortByLevel = (arr) => [...arr].sort((a, b) => b.level - a.level)
