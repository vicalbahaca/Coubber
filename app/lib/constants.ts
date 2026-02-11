export const SITE = {
  name: "Coubber",
  tagline: "AI Performance Reports in 30 Seconds",
} as const;

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Reports", href: "/reports" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
] as const;

export const PRIMARY_CTA = { label: "Book a Demo", href: "/demo" } as const;
export const SECONDARY_CTA = {
  label: "See Sample Report",
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
  { value: 40, suffix: "+", label: "data sources integrated" },
  { value: 12, suffix: "", label: "sports deployed" },
  { value: null, suffix: "", label: "Trusted by performance teams" },
] as const;

export const PROBLEM_POINTS = [
  {
    title: "Hours wasted on manual reporting",
    description:
      "Your staff spends time formatting, cleaning, and rebuilding the same weekly slides.",
  },
  {
    title: "Data trapped in silos",
    description:
      "Force plates, VBT, GPS, rehab and wellness live in different tools and exports.",
  },
  {
    title: "Insights lost in spreadsheets",
    description:
      "Important signals hide behind tabs, pivots, and inconsistent athlete profiles.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Collect",
    description: "Connect devices & import data.",
  },
  {
    title: "Unify",
    description: "Automatic athlete profile consolidation.",
  },
  {
    title: "Analyze",
    description: "AI processes metrics and patterns.",
  },
  {
    title: "Interpret",
    description: "Natural language insights generation.",
  },
  {
    title: "Decide",
    description: "Shareable reports with recommendations.",
  },
] as const;

export const REPORT_TEMPLATES = [
  {
    title: "Weekly Microcycle Report",
    description: "Weekly load, readiness, key flags, and coach-ready narrative.",
  },
  {
    title: "Return-to-Play Dashboard",
    description:
      "Rehab milestones, asymmetries, ROM progress, and return-to-training criteria.",
  },
  {
    title: "Readiness Assessment",
    description: "Daily snapshot with explainable drivers behind green/amber/red.",
  },
  {
    title: "Load Monitoring Report",
    description:
      "External + internal load trends, acute:chronic context, and risk signals.",
  },
  {
    title: "Testing Session Analysis",
    description:
      "Force-time, VBT outputs, best sets, and changes vs. baseline in one view.",
  },
  {
    title: "Injury Risk Profiling",
    description:
      "Multi-factor profile with contributing metrics and actionable follow-ups.",
  },
] as const;

export const INTEGRATION_CATEGORIES = [
  {
    title: "Force Plates",
    items: ["VALD ForceDecks", "Hawkin Dynamics"],
  },
  {
    title: "Velocity-Based Training",
    items: ["GymAware", "Vitruve", "PUSH", "ADR Encoder", "Swift"],
  },
  {
    title: "Isoinertial / Flywheel",
    items: ["Exxentric kBox"],
  },
  {
    title: "Dynamometry & ROM Testing",
    items: ["Biodex", "Kinvent"],
  },
  {
    title: "GPS & Wearables",
    items: ["Catapult", "STATSports", "WHOOP", "readyX (Wellness)"],
  },
  {
    title: "CSV / Manual Import",
    items: ["CSV Upload", "Google Sheets", "Manual Entry"],
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
    name: "Linear encoders",
    description: "Velocity + displacement for strength and rehab workflows.",
    imageSrc: "/files/devices/linear-encoder.svg",
  },
  {
    name: "Rotational encoders",
    description: "Rotary measurement for flywheel and pulley-based systems.",
    imageSrc: "/files/devices/rotational-encoder.svg",
  },
  {
    name: "Strain gauges",
    description: "Load cells for force measurement and instrumented setups.",
    imageSrc: "/files/devices/strain-gauge.svg",
  },
  {
    name: "Force plates",
    description: "Impulse, asymmetry, RFD and force-time diagnostics.",
    imageSrc: "/files/devices/force-plate.svg",
  },
  {
    name: "Contact platforms",
    description: "Jump timing and contact metrics across protocols.",
    imageSrc: "/files/devices/contact-platform.svg",
  },
  {
    name: "Dynamometers",
    description: "Strength testing and return-to-play monitoring.",
    imageSrc: "/files/devices/dynamometer.svg",
  },
] as const;

export const ROLE_USE_CASES = [
  {
    key: "performance",
    label: "Performance Coaches",
    headline: "Optimize training load and athlete readiness",
    bullets: [
      "Spot readiness drops before they become missed sessions",
      "Compare microcycles, drills, and position groups in one view",
      "Share coach-ready PDFs without rebuilding decks",
    ],
  },
  {
    key: "medical",
    label: "Medical Staff",
    headline: "Track rehab progress and return-to-play metrics",
    bullets: [
      "Monitor asymmetries, ROM, and tolerance across phases",
      "Standardize RTP criteria and documentation",
      "Align stakeholders with clear status + next steps",
    ],
  },
  {
    key: "directors",
    label: "Directors/Analysts",
    headline: "Unified dashboards for strategic decisions",
    bullets: [
      "Consistent athlete profiles across departments",
      "Audit-ready reporting history by session, block, or season",
      "Scale insights across teams without adding headcount",
    ],
  },
] as const;

export const ADVANTAGES = [
  {
    title: "Automated Interpretation",
    description: "AI narratives, not just charts.",
  },
  {
    title: "30-Second Generation",
    description: "From upload to insights instantly.",
  },
  {
    title: "Unlimited Data Sources",
    description: "Device-agnostic integration.",
  },
  {
    title: "Shareable PDFs",
    description: "Board-ready reports for stakeholders.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Coubber cut our weekly reporting time from 6 hours to 30 minutes. The AI interpretation helps us spot patterns we'd miss manually.",
    name: "David Thompson",
    role: "Head of Performance",
    org: "European Football Academy (Design Partner)",
  },
  {
    quote:
      "The unified athlete profiles finally keep strength, GPS, and medical notes aligned — no more chasing exports on match week.",
    name: "Sofia Martinez",
    role: "Sports Scientist",
    org: "Top Division Rugby Program (Design Partner)",
  },
  {
    quote:
      "Our medical team loves the return-to-play view. It turns testing sessions into clear next steps that coaches actually use.",
    name: "Chris Lee",
    role: "Rehab Lead",
    org: "High-Performance Institute (Design Partner)",
  },
] as const;

export const PRICING = {
  standard: {
    name: "Standard",
    monthlyPerAthleteEur: 14,
    annualDiscount: 0.2,
    features: [
      "Automated report generation",
      "40+ data source integrations",
      "Shareable PDF exports",
    ],
  },
  enterprise: {
    name: "Enterprise",
    priceLabel: "Custom",
    features: ["Advanced security", "Custom integrations", "Dedicated support"],
  },
} as const;

export const RESOURCES = [
  {
    slug: "microcycle-reporting-playbook",
    title: "Microcycle Reporting Playbook",
    description:
      "A practical framework for weekly reporting that coaches actually use — with examples and pitfalls to avoid.",
    category: "Reporting",
    readingTime: "6 min",
  },
  {
    slug: "return-to-play-metrics-checklist",
    title: "Return-to-Play Metrics Checklist",
    description:
      "A template to standardize RTP documentation across strength, medical, and coaching stakeholders.",
    category: "Rehab",
    readingTime: "5 min",
  },
  {
    slug: "force-plate-to-decision-workflow",
    title: "From Force Plate Data to Decisions",
    description:
      "How to connect force-time outputs to readiness context without drowning in dashboards.",
    category: "Testing",
    readingTime: "7 min",
  },
  {
    slug: "vbt-reporting-template",
    title: "VBT Reporting Template (What to Track Weekly)",
    description:
      "A lightweight approach to velocity-based training reporting that keeps signal over noise.",
    category: "Strength",
    readingTime: "4 min",
  },
  {
    slug: "load-monitoring-red-flags",
    title: "Load Monitoring Red Flags (and What to Do Next)",
    description:
      "A decision-first checklist for interpreting spikes, trends, and context across match weeks.",
    category: "Load",
    readingTime: "8 min",
  },
  {
    slug: "integration-mapping-guide",
    title: "Integration Mapping Guide",
    description:
      "A simple method to map devices, exports, and naming conventions into a unified athlete profile.",
    category: "Integrations",
    readingTime: "6 min",
  },
] as const;
