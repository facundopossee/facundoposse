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

export const translations: Record<Lang, Dictionary> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Facundo Posse',
      description:
        'Software engineer and product builder with over 8 years of experience taking digital products from problem definition to production.',
      ogTitle: 'Facundo Posse - Software Engineer & Product Builder',
      ogDescription:
        'Over 8 years building and operating digital products across product, engineering, delivery, and technical leadership.',
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
      tagline: 'I turn real problems into working products.',
      subtitle:
        'Software engineer and product builder combining product judgment, hands-on engineering, delivery, and leadership.',
      emailCta: 'Email',
      whatsappCta: 'WhatsApp',
      whatsappAria: 'Send me a message on WhatsApp',
      proof: [
        { value: '8+ years', label: 'Building software professionally' },
        { value: '60K+', label: 'Monthly users served' },
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
        { name: 'Platforms and delivery', items: 'AWS, Azure, Vercel, CI/CD, observability' },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          company: 'Self-directed',
          role: 'Independent Product Builder',
          period: '2024 - Present',
          independent: true,
          bullets: [
            'Build and operate commercial SaaS products for small businesses, covering discovery, UX, pricing, engineering, infrastructure, and production support',
            'Design multi-tenant platforms integrating payments, authentication, messaging, digital wallets, and operational workflows',
            'Built and validated focused product experiments, including a native iOS app using SwiftUI and HealthKit',
            'Work directly with users and businesses to define scope, observe real usage, and iterate on the product',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Technical Leader',
          period: 'Dec 2021 - Present',
          bullets: [
            'Led mobile banking and digital health platforms for clients in highly regulated industries, serving 60K+ monthly active users',
            'Delivered banking features including digital wallets, real-time card data, rewards, and biometric authentication flows',
            'Led evolution of healthcare platforms for a top-tier private medical network: patient scheduling, electronic prescriptions, insurance integrations, billing, and clinical imaging access',
            'Owned CI/CD pipelines and cloud infrastructure on AWS and Azure, ensuring high-availability deployments across production environments',
            'Led and mentored cross-functional teams of 5-15 engineers across multiple product streams',
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
            'Improved SQL-based data operations and supported CI/CD and Azure cloud migration',
          ],
        },
        {
          company: 'Sanatorio Adventista de Hohenau',
          role: '.NET Developer, Intern',
          period: 'Dec 2016 - Feb 2017',
          bullets: ['Supported system modernization by migrating legacy solutions to .NET technologies'],
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
      title: 'Facundo Posse',
      description:
        'Ingeniero de software y product builder con más de 8 años de experiencia llevando productos digitales desde la definición del problema hasta producción.',
      ogTitle: 'Facundo Posse - Ingeniero de Software y Product Builder',
      ogDescription:
        'Más de 8 años construyendo y operando productos digitales en producto, ingeniería, delivery y liderazgo técnico.',
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
      tagline: 'Convierto problemas reales en productos que funcionan.',
      subtitle:
        'Ingeniero de software y product builder que combina criterio de producto, ingeniería hands-on, delivery y liderazgo.',
      emailCta: 'Email',
      whatsappCta: 'WhatsApp',
      whatsappAria: 'Enviame un mensaje por WhatsApp',
      proof: [
        { value: '8+ años', label: 'Construyendo software de forma profesional' },
        { value: '60K+', label: 'Usuarios activos mensuales' },
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
        { name: 'Plataformas y delivery', items: 'AWS, Azure, Vercel, CI/CD, observability' },
      ],
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
            'Construyo y opero productos SaaS comerciales para pequeñas empresas, cubriendo discovery, UX, pricing, ingeniería, infraestructura y soporte en producción',
            'Diseño plataformas multi-tenant que integran pagos, autenticación, mensajería, billeteras digitales y flujos operativos',
            'Construí y validé experimentos de producto puntuales, incluyendo una app nativa de iOS con SwiftUI y HealthKit',
            'Trabajo directamente con usuarios y negocios para definir el alcance, observar el uso real e iterar sobre el producto',
          ],
        },
        {
          company: 'N5 Now',
          role: 'Tech Lead',
          period: 'Dic 2021 - Presente',
          bullets: [
            'Lideré plataformas de banca móvil y salud digital para clientes en industrias altamente reguladas, con más de 60K usuarios activos mensuales',
            'Entregué funcionalidades bancarias como billeteras digitales, datos de tarjeta en tiempo real, recompensas y flujos de autenticación biométrica',
            'Lideré la evolución de plataformas de salud para una red de medicina privada de primer nivel: turnos de pacientes, recetas electrónicas, integraciones con obras sociales, facturación y acceso a imágenes clínicas',
            'Manejé los pipelines de CI/CD y la infraestructura cloud en AWS y Azure, asegurando despliegues de alta disponibilidad en producción',
            'Lideré y mentoreé equipos multidisciplinarios de 5 a 15 ingenieros en múltiples líneas de producto',
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
            'Mejoré operaciones de datos en SQL y participé en CI/CD y la migración a Azure',
          ],
        },
        {
          company: 'Sanatorio Adventista de Hohenau',
          role: 'Desarrollador .NET, Pasante',
          period: 'Dic 2016 - Feb 2017',
          bullets: ['Apoyé la modernización de sistemas migrando soluciones legacy a tecnologías .NET'],
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
