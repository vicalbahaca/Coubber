export const SITE = {
  name: "Coubber",
  tagline: "Informes de rendimiento con IA en 30 segundos",
} as const;

export const NAV_LINKS = [
  { label: "Producto", href: "/product" },
  { label: "Informes", href: "/reports" },
  { label: "Integraciones", href: "/integrations" },
  { label: "Precios", href: "/pricing" },
  { label: "Recursos", href: "/resources" },
] as const;

export const PRIMARY_CTA = { label: "Solicitar acceso anticipado", href: "/demo" } as const;
export const SECONDARY_CTA = {
  label: "Ver informe de muestra",
  href: "/reports#sample-report",
} as const;

export const TRUST_LOGOS = [
  { name: "Atlas Performance Lab" },
  { name: "Northshore United FC" },
  { name: "Metropolitan Rugby" },
  { name: "Elite Academy Program" },
  { name: "High-Performance Institute" },
  { name: "Coastal Basketball Club" },
] as const;

export const TRUST_STATS = [
  { value: 40, suffix: "+", label: "fuentes de datos integradas" },
  { value: 12, suffix: "", label: "deportes desplegados" },
  { value: null, suffix: "", label: "Con la confianza de equipos de rendimiento" },
] as const;

export const PROBLEM_POINTS = [
  {
    title: "Horas perdidas en reportes manuales",
    description:
      "Tu equipo invierte tiempo en formatear, limpiar y reconstruir las mismas diapositivas cada semana.",
  },
  {
    title: "Datos atrapados en silos",
    description:
      "Plataformas de fuerza, VBT, GPS, rehab y bienestar viven en herramientas y exportaciones distintas.",
  },
  {
    title: "Insights perdidos en hojas de cálculo",
    description:
      "Señales importantes se esconden entre pestañas, tablas dinámicas y perfiles inconsistentes.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Recolectar",
    description: "Conecta dispositivos e importa datos.",
  },
  {
    title: "Unificar",
    description: "Consolidación automática de perfiles de atleta.",
  },
  {
    title: "Analizar",
    description: "La IA procesa métricas y patrones.",
  },
  {
    title: "Interpretar",
    description: "Generación de insights en lenguaje natural.",
  },
  {
    title: "Decidir",
    description: "Informes compartibles con recomendaciones.",
  },
] as const;

export const REPORT_TEMPLATES = [
  {
    title: "Informe semanal de microciclo",
    description:
      "Carga semanal, readiness, alertas clave y narrativa lista para entrenadores.",
  },
  {
    title: "Dashboard de retorno al juego",
    description:
      "Hitos de rehab, asimetrías, progreso de ROM y criterios de vuelta al entrenamiento.",
  },
  {
    title: "Evaluación de readiness",
    description:
      "Snapshot diario con drivers explicables detrás de verde/ámbar/rojo.",
  },
  {
    title: "Informe de monitoreo de carga",
    description:
      "Tendencias de carga externa + interna, contexto agudo:crónico y señales de riesgo.",
  },
  {
    title: "Análisis de sesión de testing",
    description:
      "Fuerza-tiempo, outputs VBT, mejores sets y cambios vs. línea base en una sola vista.",
  },
  {
    title: "Perfilado de riesgo de lesión",
    description:
      "Perfil multifactor con métricas contribuyentes y siguientes pasos accionables.",
  },
] as const;

export const INTEGRATION_CATEGORIES = [
  {
    title: "Plataformas de fuerza",
    items: ["VALD ForceDecks", "Hawkin Dynamics"],
  },
  {
    title: "Entrenamiento basado en velocidad",
    items: ["GymAware", "Vitruve", "PUSH", "ADR Encoder", "Swift"],
  },
  {
    title: "Isoinercial / Flywheel",
    items: ["Exxentric kBox"],
  },
  {
    title: "Dinamometría y pruebas de ROM",
    items: ["Biodex", "Kinvent"],
  },
  {
    title: "GPS y wearables",
    items: ["Catapult", "STATSports", "WHOOP", "readyX (Wellness)"],
  },
  {
    title: "CSV / Carga manual",
    items: ["Carga CSV", "Google Sheets", "Carga manual"],
  },
] as const;

export const API_HARDWARE_INTEGRATIONS = [
  {
    name: "Chronojump",
    iconSrc: "/files/integrations/chronojump.svg",
  },
  {
    name: "MyJumpLab",
    iconSrc: "/files/integrations/myjumplab.svg",
  },
  {
    name: "ADR Encoder",
    iconSrc: "/files/integrations/adr-encoder.svg",
  },
  {
    name: "Swift",
    iconSrc: "/files/integrations/swift.svg",
  },
  {
    name: "Kinvent",
    iconSrc: "/files/integrations/kinvent.svg",
  },
  {
    name: "WHOOP",
    iconSrc: "/files/integrations/whoop.svg",
  },
] as const;

export const DEVICE_TYPES = [
  {
    name: "Encoders lineales",
    description:
      "Velocidad + desplazamiento para fuerza y flujos de trabajo de rehab.",
    imageSrc: "/files/devices/linear-encoder.svg",
  },
  {
    name: "Encoders rotacionales",
    description:
      "Medición rotatoria para flywheel y sistemas basados en poleas.",
    imageSrc: "/files/devices/rotational-encoder.svg",
  },
  {
    name: "Galgas extensiométricas",
    description: "Celdas de carga para medición de fuerza y setups instrumentados.",
    imageSrc: "/files/devices/strain-gauge.svg",
  },
  {
    name: "Plataformas de fuerza",
    description: "Impulso, asimetrías, RFD y diagnóstico fuerza-tiempo.",
    imageSrc: "/files/devices/force-plate.svg",
  },
  {
    name: "Plataformas de contacto",
    description: "Timing de salto y métricas de contacto en distintos protocolos.",
    imageSrc: "/files/devices/contact-platform.svg",
  },
  {
    name: "Dinamómetros",
    description: "Testing de fuerza y seguimiento de return-to-play.",
    imageSrc: "/files/devices/dynamometer.svg",
  },
] as const;

export const ROLE_USE_CASES = [
  {
    key: "performance",
    label: "Preparadores físicos",
    headline: "Optimiza la carga de entrenamiento y el readiness",
    bullets: [
      "Detecta caídas de readiness antes de perder sesiones",
      "Compara microciclos, ejercicios y grupos por posición en una vista",
      "Comparte PDFs listos para entrenadores sin rehacer presentaciones",
    ],
  },
  {
    key: "medical",
    label: "Equipo médico",
    headline: "Sigue el progreso de rehab y métricas de return-to-play",
    bullets: [
      "Monitorea asimetrías, ROM y tolerancia por fases",
      "Estandariza criterios y documentación de RTP",
      "Alinea a las partes interesadas con estado y próximos pasos claros",
    ],
  },
  {
    key: "directors",
    label: "Directores/Analistas",
    headline: "Dashboards unificados para decisiones estratégicas",
    bullets: [
      "Perfiles de atleta consistentes entre departamentos",
      "Histórico de reportes listo para auditoría por sesión, bloque o temporada",
      "Escala insights entre equipos sin añadir personal",
    ],
  },
] as const;

export const ADVANTAGES = [
  {
    title: "Interpretación automatizada",
    description: "Narrativas con IA, no solo gráficos.",
  },
  {
    title: "Generación en 30 segundos",
    description: "Desde la carga hasta el insight, al instante.",
  },
  {
    title: "Fuentes de datos ilimitadas",
    description: "Integración agnóstica a dispositivos.",
  },
  {
    title: "PDFs compartibles",
    description: "Informes listos para partes interesadas.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Coubber redujo nuestro tiempo de reportes semanales de 6 horas a 30 minutos. La interpretación con IA nos ayuda a detectar patrones que se nos escapaban.",
    name: "David Thompson",
    role: "Director de rendimiento",
    org: "European Football Academy (Socio de diseño)",
  },
  {
    quote:
      "Los perfiles unificados por fin mantienen alineados fuerza, GPS y notas médicas — adiós a perseguir exportaciones en semana de partido.",
    name: "Sofia Martinez",
    role: "Científica del deporte",
    org: "Top Division Rugby Program (Socio de diseño)",
  },
  {
    quote:
      "Nuestro equipo médico ama la vista de return-to-play. Convierte las sesiones de testing en siguientes pasos claros que los entrenadores usan.",
    name: "Chris Lee",
    role: "Responsable de rehab",
    org: "High-Performance Institute (Socio de diseño)",
  },
] as const;

export const PRICING = {
  standard: {
    name: "Standard",
    monthlyPerAthleteEur: 14,
    annualDiscount: 0.2,
    features: [
      "Generación automática de informes",
      "40+ integraciones de fuentes de datos",
      "Exportes PDF compartibles",
    ],
  },
  enterprise: {
    name: "Enterprise",
    priceLabel: "A medida",
    features: ["Seguridad avanzada", "Integraciones a medida", "Soporte dedicado"],
  },
} as const;

export const RESOURCES = [
  {
    slug: "microcycle-reporting-playbook",
    title: "Guía de reportes de microciclo",
    description:
      "Un framework práctico para reportes semanales que los entrenadores usan — con ejemplos y errores a evitar.",
    category: "Reportes",
    readingTime: "6 min",
  },
  {
    slug: "return-to-play-metrics-checklist",
    title: "Checklist de métricas de Return-to-Play",
    description:
      "Plantilla para estandarizar la documentación de RTP entre fuerza, médico y staff técnico.",
    category: "Rehab",
    readingTime: "5 min",
  },
  {
    slug: "force-plate-to-decision-workflow",
    title: "De datos de plataforma de fuerza a decisiones",
    description:
      "Cómo conectar force-time con el contexto de readiness sin ahogarte en dashboards.",
    category: "Testing",
    readingTime: "7 min",
  },
  {
    slug: "vbt-reporting-template",
    title: "Plantilla de reportes VBT (qué seguir semanalmente)",
    description:
      "Un enfoque ligero para reportes VBT que prioriza señal sobre ruido.",
    category: "Fuerza",
    readingTime: "4 min",
  },
  {
    slug: "load-monitoring-red-flags",
    title: "Alertas en monitoreo de carga (y qué hacer después)",
    description:
      "Checklist orientada a decisión para interpretar picos, tendencias y contexto en semana de partido.",
    category: "Carga",
    readingTime: "8 min",
  },
  {
    slug: "integration-mapping-guide",
    title: "Guía de mapeo de integraciones",
    description:
      "Método simple para mapear dispositivos, exportaciones y nomenclaturas en un perfil unificado.",
    category: "Integraciones",
    readingTime: "6 min",
  },
] as const;
