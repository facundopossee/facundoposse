export type Lang = 'en' | 'es'

export interface ProofItem {
  value: string
  label: string
}

export interface Stage {
  name: string
  description: string
}

export interface TechGroup {
  name: string
  items: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  independent?: boolean
  bullets: string[]
}

export interface Dictionary {
  htmlLang: string
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  header: {
    skipToContent: string
    logoAriaLabel: string
    navApproach: string
    navExperience: string
    navLinkedin: string
    langToggleLabel: string
  }
  hero: {
    tagline: string
    subtitle: string
    emailCta: string
    whatsappCta: string
    whatsappAria: string
    proof: ProofItem[]
  }
  practice: {
    heading: string
    intro: string
    stages: Stage[]
    technologyGroups: TechGroup[]
    automation: {
      heading: string
      items: Stage[]
    }
  }
  experience: {
    heading: string
    items: ExperienceItem[]
  }
  education: {
    heading: string
    degree: string
    school: string
    year: string
  }
  contact: {
    statement: string
  }
  footer: {
    email: string
    whatsapp: string
    github: string
    location: string
  }
}

const CAREER_START_YEAR = 2018
const CAREER_START_MONTH = 1 // February (zero-based)
const now = new Date()
const yearsOfExperience = now.getFullYear() - CAREER_START_YEAR
  - (now.getMonth() < CAREER_START_MONTH ? 1 : 0)
const TECH_LEAD_START_YEAR = 2021
const TECH_LEAD_START_MONTH = 11 // December (zero-based)
const yearsAsTechnicalLead = now.getFullYear() - TECH_LEAD_START_YEAR
  - (now.getMonth() < TECH_LEAD_START_MONTH ? 1 : 0)

export const translations: Record<Lang, Dictionary> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Facundo Posse - Technical Lead & Full-Stack Engineer',
      description:
        `Technical Lead & Full-Stack Engineer with ${yearsOfExperience}+ years building production software and ${yearsAsTechnicalLead}+ years leading up to 15 engineers across parallel teams in banking and healthcare.`,
      ogTitle: 'Facundo Posse - Technical Lead & Full-Stack Engineer',
      ogDescription:
        `Technical Lead & Full-Stack Engineer. ${yearsOfExperience}+ years building production software, ${yearsAsTechnicalLead}+ years of technical leadership, and daily work with AI coding agents and business automation.`,
    },
    header: {
      skipToContent: 'Skip to content',
      logoAriaLabel: 'Facundo Posse, back to top',
      navApproach: 'Approach',
      navExperience: 'Experience',
      navLinkedin: 'LinkedIn',
      langToggleLabel: 'Cambiar a español',
    },
    hero: {
      tagline: 'Technical Lead & Full-Stack Engineer',
      subtitle:
        `${yearsOfExperience}+ years building production software and ${yearsAsTechnicalLead}+ years as Technical Lead of up to 15 engineers across parallel teams in banking and healthcare. A player-coach partnering with Product Owners on scalable architecture, setting quality standards through code reviews, testing and CI/CD, and growing engineers through pair programming and 1:1s. I use Claude Code and Codex every day, configure AI coding agents for teams, and design LLM agents and automations that remove manual work.`,
      emailCta: 'Email',
      whatsappCta: 'WhatsApp',
      whatsappAria: 'Send me a message on WhatsApp',
      proof: [
        { value: `${yearsOfExperience}+ years`, label: 'Building software professionally' },
        { value: '~30K', label: 'Monthly active users — banking app' },
        { value: 'Live SaaS', label: 'Built, launched, and operated' },
      ],
    },
    practice: {
      heading: 'From problem to production',
      intro:
        "Alongside my professional work, I build commercial SaaS products and focused experiments validated through real use. The same principle guides both: learn by putting useful software into people's hands.",
      stages: [
        { name: 'Understand', description: 'Find the real constraint, speak with users, and define the outcome.' },
        { name: 'Shape', description: 'Set scope, make product decisions, and design the simplest viable path.' },
        { name: 'Build', description: 'Own the application, data, integrations, and infrastructure.' },
        { name: 'Operate', description: 'Launch, support real usage, measure what matters, and keep improving.' },
      ],
      technologyGroups: [
        { name: 'Product interfaces', items: 'React, React Native, Next.js, SwiftUI, Vue.js' },
        { name: 'Services and data', items: 'Node.js, Python, .NET, PostgreSQL, Supabase' },
        { name: 'Platforms and delivery', items: 'AWS, Azure, Vercel, CI/CD, observability, Playwright' },
        { name: 'AI development', items: 'Claude Code, Codex, agentic workflows / prompt engineering' },
      ],
      automation: {
        heading: 'AI & Automation',
        items: [
          { name: 'Agentic software development', description: 'Claude Code, Codex and other AI tools across planning, implementation, testing, code review and debugging.' },
          { name: 'Agent tooling & E2E automation', description: 'Team-wide agent configuration: instruction files, permission policies and pre-execution hooks. Built a 400+ test Playwright E2E suite as a release gate.' },
          { name: 'LLM agents & business automation', description: 'Task-specific agents, reusable prompt templates, browser automation and data pipelines that replace repetitive operational work.' },
        ],
      },
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          company: 'Self-directed',
          role: 'Independent Product Builder',
          period: '2024 – Present',
          independent: true,
          bullets: [
            'Build and operate 5–6 SaaS products used by 7–8 business clients',
            'Design multi-tenant platforms serving multiple merchants, integrating authentication, payments and messaging',
            'Built a native iOS app in SwiftUI with HealthKit integration.',
            'Work directly with users and businesses to define scope, observe real usage, and iterate on the product',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Technical Lead',
          period: 'Dec 2021 – Present',
          bullets: [
            'Lead and mentor up to 15 engineers across parallel teams of 2–10 covering backend, frontend and database, coordinating with QA, UX, security, architecture and release; evaluated 20+ candidates and hired ~10',
            'Work with Product Owners to turn business needs into technical solutions, defining architecture directly or through architecture review',
            'Brought AI coding agents into the team’s workflow in 2024, shortening delivery times',
            'Own AWS/Azure infrastructure, CI/CD and observability',
            'Healthcare: IT partner for a private hospital and its health plan (~100K patients, ~30K plan members), across members, providers, pharmacy and digital channels; provider portal for eligibility and invoicing, member digital credentials, embedded appointment scheduling, COVID-19 vaccination registration and SAP integration',
            'Banking: mobile banking app with ~30K monthly active users (4.6★ iOS, 50K+ Android downloads), featuring digital-wallet provisioning, real-time card data, rewards and biometric authentication',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Full Stack Developer',
          period: 'Feb 2021 - Dec 2021',
          bullets: [
            'Developed features for digital health platforms using .NET and React: patient scheduling, clinical workflows, and internal tooling',
            'Built and integrated APIs connecting health systems with medical insurance providers for coverage verification and operational automation',
            'Optimized Azure pipelines and SQL workloads supporting high-availability healthcare operations',
          ],
        },
        {
          company: 'Editorial ACES',
          role: 'Full Stack Developer',
          period: 'Feb 2018 - Feb 2021',
          bullets: [
            'Developed and maintained sales, e-commerce, and internal productivity platforms using .NET and Vue.js',
            'Integrated ERP system (Dynamics AX) to automate operational workflows',
            'Delivered inventory, production control, and order management features',
            'Improved SQL-based data operations and supported CI/CD',
            'Migrated APIs, frontends and databases to Azure',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      degree: 'Information Systems',
      school: 'Universidad Adventista del Plata',
      year: '2018',
    },
    contact: {
      statement:
        'I am most interested in work where the problem is still taking shape and engineering decisions influence the product itself.',
    },
    footer: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      location: 'Buenos Aires, Argentina',
    },
  },
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Facundo Posse - Líder Técnico e Ingeniero Full-Stack',
      description:
        `Líder Técnico e Ingeniero Full-Stack con ${yearsOfExperience}+ años construyendo software en producción y ${yearsAsTechnicalLead}+ años liderando hasta 15 ingenieros en equipos paralelos de banca y salud.`,
      ogTitle: 'Facundo Posse - Líder Técnico e Ingeniero Full-Stack',
      ogDescription:
        `Líder Técnico e Ingeniero Full-Stack. ${yearsOfExperience}+ años construyendo software en producción, ${yearsAsTechnicalLead}+ años de liderazgo técnico y trabajo diario con agentes de IA y automatización de negocios.`,
    },
    header: {
      skipToContent: 'Ir al contenido',
      logoAriaLabel: 'Facundo Posse, volver arriba',
      navApproach: 'Enfoque',
      navExperience: 'Experiencia',
      navLinkedin: 'LinkedIn',
      langToggleLabel: 'Switch to English',
    },
    hero: {
      tagline: 'Líder Técnico e Ingeniero Full-Stack',
      subtitle:
        `${yearsOfExperience}+ años construyendo software en producción y ${yearsAsTechnicalLead}+ años como líder técnico de hasta 15 ingenieros en equipos paralelos de banca y salud. Combino liderazgo y desarrollo: trabajo con Product Owners en arquitecturas escalables, establezco estándares de calidad mediante revisiones de código, testing y CI/CD, y acompaño a los ingenieros con pair programming y 1:1s. Uso Claude Code y Codex a diario, configuro agentes de IA para equipos y diseño agentes LLM y automatizaciones que eliminan trabajo manual.`,
      emailCta: 'Email',
      whatsappCta: 'WhatsApp',
      whatsappAria: 'Enviame un mensaje por WhatsApp',
      proof: [
        { value: `${yearsOfExperience}+ años`, label: 'Construyendo software de forma profesional' },
        { value: '~30K', label: 'Usuarios activos mensuales — app bancaria' },
        { value: 'SaaS en producción', label: 'Construido, lanzado y operado' },
      ],
    },
    practice: {
      heading: 'Del problema a producción',
      intro:
        'Construyo software tanto en mi trabajo profesional como en productos SaaS comerciales y experimentos de producto validados con uso real. La lógica es la misma en los dos casos: aprender llevando software útil a manos de la gente.',
      stages: [
        { name: 'Entender', description: 'Encontrar la restricción real, hablar con usuarios y definir el resultado esperado.' },
        { name: 'Definir', description: 'Acotar el alcance, tomar decisiones de producto y diseñar el camino más simple posible.' },
        { name: 'Construir', description: 'Hacerme cargo de la aplicación, los datos, las integraciones y la infraestructura.' },
        { name: 'Operar', description: 'Lanzar, dar soporte al uso real, medir lo que importa y seguir mejorando.' },
      ],
      technologyGroups: [
        { name: 'Interfaces de producto', items: 'React, React Native, Next.js, SwiftUI, Vue.js' },
        { name: 'Servicios y datos', items: 'Node.js, Python, .NET, PostgreSQL, Supabase' },
        { name: 'Plataformas y delivery', items: 'AWS, Azure, Vercel, CI/CD, observability, Playwright' },
        { name: 'Desarrollo con IA', items: 'Claude Code, Codex, agentic workflows / prompt engineering' },
      ],
      automation: {
        heading: 'IA y automatización',
        items: [
          { name: 'Desarrollo con agentes de IA', description: 'Claude Code, Codex y otras herramientas de IA en planificación, implementación, testing, revisión de código y debugging.' },
          { name: 'Herramientas de agentes y automatización E2E', description: 'Configuración de agentes para todo el equipo: archivos de instrucciones, políticas de permisos y hooks previos a la ejecución. Construí una suite E2E de 400+ tests con Playwright como requisito para liberar versiones.' },
          { name: 'Agentes LLM y automatización de negocios', description: 'Agentes para tareas específicas, plantillas de prompts reutilizables, automatización de navegador y pipelines de datos que reemplazan trabajo operativo repetitivo.' },
        ],
      },
    },
    experience: {
      heading: 'Experiencia',
      items: [
        {
          company: 'Proyecto propio',
          role: 'Product Builder Independiente',
          period: '2024 - Presente',
          independent: true,
          bullets: [
            'Construyo y opero 5–6 productos SaaS usados por 7–8 clientes comerciales',
            'Diseño plataformas multi-tenant para múltiples comercios, con autenticación, pagos y mensajería',
            'Construí una app nativa de iOS en SwiftUI con integración con HealthKit.',
            'Trabajo directamente con usuarios y negocios para definir el alcance, observar el uso real e iterar sobre el producto',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Líder Técnico',
          period: 'Dic 2021 – Presente',
          bullets: [
            'Lidero y mentoreo hasta 15 ingenieros en equipos paralelos de 2–10 de backend, frontend y base de datos, coordinando con QA, UX, seguridad, arquitectura y release; evalué 20+ candidatos y contraté ~10',
            'Trabajo con Product Owners para convertir necesidades de negocio en soluciones técnicas, definiendo la arquitectura directamente o mediante revisión de arquitectura',
            'Incorporé agentes de IA al flujo de trabajo del equipo en 2024, acortando los tiempos de entrega',
            'Soy responsable de infraestructura AWS/Azure, CI/CD y observabilidad',
            'Salud: socio de TI de un hospital privado y su plan de salud (~100K pacientes, ~30K afiliados), abarcando afiliados, prestadores, farmacia y canales digitales; portal de prestadores con elegibilidad y facturación, credenciales digitales, turnos integrados, registro de vacunación COVID-19 e integración con SAP',
            'Banca: app de banca móvil con ~30K usuarios activos mensuales (4.6★ en iOS, 50K+ descargas en Android), con aprovisionamiento de billeteras digitales, datos de tarjetas en tiempo real, recompensas y autenticación biométrica',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Desarrollador Full Stack',
          period: 'Feb 2021 - Dic 2021',
          bullets: [
            'Desarrollé funcionalidades para plataformas de salud digital usando .NET y React: turnos de pacientes, flujos clínicos y herramientas internas',
            'Construí e integré APIs que conectan sistemas de salud con obras sociales para verificación de cobertura y automatización operativa',
            'Optimicé pipelines de Azure y cargas de trabajo SQL que dan soporte a operaciones de salud de alta disponibilidad',
          ],
        },
        {
          company: 'Editorial ACES',
          role: 'Desarrollador Full Stack',
          period: 'Feb 2018 - Feb 2021',
          bullets: [
            'Desarrollé y mantuve plataformas de ventas, e-commerce y productividad interna usando .NET y Vue.js',
            'Integré un sistema ERP (Dynamics AX) para automatizar flujos operativos',
            'Entregué funcionalidades de inventario, control de producción y gestión de pedidos',
            'Mejoré operaciones de datos en SQL y participé en CI/CD',
            'Migré APIs, frontends y bases de datos a Azure',
          ],
        },
      ],
    },
    education: {
      heading: 'Educación',
      degree: 'Sistemas de Información',
      school: 'Universidad Adventista del Plata',
      year: '2018',
    },
    contact: {
      statement:
        'Me interesa especialmente el trabajo donde el problema todavía está tomando forma, y las decisiones de ingeniería terminan definiendo el producto.',
    },
    footer: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      location: 'Buenos Aires, Argentina',
    },
  },
}
