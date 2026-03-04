export const PROFILE = {
  en: {
    name: 'Johann Medina',
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
        company: 'Mercantil Andina',
        period: '2021 — Present',
        description: 'Leading DevOps practices alongside the company\'s digital transformation, optimizing performance and time-to-market for cloud-based applications and APIs, delivering significant business value.',
        achievements: [
          '100% migration to GitLab from Azure DevOps, significantly reducing operational costs.',
          'Implemented robust CI/CD pipelines with a strong focus on DevSecOps.',
          'Enhanced observability through OpenTelemetry and the Grafana Stack.'
        ],
        tags: ['Kubernetes', 'Azure', 'Terraform', 'OpenTelemetry']
      },
      {
        role: 'DevOps · SRE & Cloud Engineer',
        company: 'Mercantil Andina',
        period: '2020 — 2021',
        description: 'Leading DevOps culture in agile squads under microservices architecture on Azure. Specialist in AKS (Kubernetes) orchestration, container management (Docker, Helm), and designing complex CI/CD pipelines using Azure DevOps, Jenkins, and Spinnaker.',
        achievements: [
          'Migrated from Jenkins to Azure DevOps, achieving a 60% reduction in operational costs.',
          'Implemented monitoring and observability under Dynatrace.'
        ],
        tags: ['Docker', 'Azure', 'Atlassian', 'Helm']
      }
    ]
  },
  es: {
    name: 'Johann Medina',
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
        company: 'Mercantil Andina',
        period: '2021 — Presente',
        description: 'Liderar la práctica DevOps, junto a la transformación digital de la empresa, optimizando el rendimiento y los tiempos de pasaje a producción de las aplicaciones y APIs en cloud, dándole valor al negocio.',
        achievements: [
          'Migración a GitLab desde Azure DevOps en un 100% reduciendo considerablemente los costos operativos.',
          'Implementación de pipelines de CI/CD robustos con enfoque en DevSecOps.',
          'Mejora de la observabilidad mediante OpenTelemetry y Stack Grafana.'
        ],
        tags: ['Kubernetes', 'Azure', 'Terraform', 'Observabilidad']
      },
      {
        role: 'DevOps · SRE & Cloud Engineer',
        company: 'Mercantil Andina',
        period: '2020 — 2021',
        description: 'Liderazgo de la cultura DevOps en células ágiles bajo arquitectura de microservicios en Azure. Especialista en la orquestación con AKS (Kubernetes), gestión de contenedores (Docker, Helm) y diseño de pipelines complejos de CI/CD utilizando Azure DevOps, Jenkins y Spinnaker.',
        achievements: [
          'Migración de Jenkins a Azure DevOps, con reducción del 60% en costos operativos.',
          'Implementación de monitoreo bajo Dynatrace'
        ],
        tags: ['Docker', 'Azure', 'Atlassian', 'HELM']
      }
    ]
  }
}

export const sortByLevel = (arr) => [...arr].sort((a, b) => b.level - a.level)
