/**
 * Single source of truth for all site copy.
 * Anything marked TODO is waiting on real details from the Novarchin team.
 */

export const company = {
  name: 'Novarchin',
  tagline: "Engineering Africa's digital future.",
  focus: ['Enterprise Software', 'Artificial Intelligence', 'Cloud', 'Cybersecurity', 'Digital Transformation'],
  overview:
    'Novarchin is an emerging technology company delivering secure, scalable and innovative digital solutions for businesses, governments, NGOs and enterprises across Africa. We build custom software, enterprise systems, AI solutions, fintech platforms, cloud infrastructure and digital ecosystems that drive transformation.',
  vision: "Become Africa's leading technology innovation company.",
  mission: 'Design and deliver world-class digital products that empower organizations to innovate, automate and grow.',
  purpose: "Accelerate Africa's digital transformation.",
}

export const ceo = {
  name: 'Rutagengwa Bruce',
  role: 'Founder & CEO',
  photo: '', // TODO: add /public/team/bruce.jpg and set '/team/bruce.jpg'
  message: [
    'At Novarchin, we believe technology should solve real business challenges, not create new ones.',
    'Our mission is to empower organizations across Africa with intelligent digital solutions that improve efficiency, drive innovation, and unlock growth.',
  ],
}

export const contact = {
  email: '', // TODO
  phone: '', // TODO
  address: '', // TODO
  linkedin: '', // TODO
  website: '', // TODO
}

export type IconName =
  | 'code' | 'building' | 'smartphone' | 'sparkles' | 'wallet' | 'cloud' | 'plug' | 'pen' | 'shield' | 'compass'
  | 'lightbulb' | 'award' | 'scale' | 'heart' | 'users' | 'book' | 'globe'
  | 'landmark' | 'stethoscope' | 'graduation' | 'shopping' | 'handshake' | 'factory' | 'hotel'
  | 'lock' | 'layers' | 'zap' | 'message' | 'infinity' | 'target'
  | 'brain' | 'blocks' | 'city' | 'fingerprint'

export interface Item {
  title: string
  description: string
  icon: IconName
}

export const services: Item[] = [
  { title: 'Custom Software Development', icon: 'code', description: 'Tailor-made software engineered around your processes, not the other way around.' },
  { title: 'Enterprise Systems', icon: 'building', description: 'ERP, CRM and core platforms built to run mission-critical operations at scale.' },
  { title: 'Web & Mobile Applications', icon: 'smartphone', description: 'Fast, beautiful apps for every screen, from customer portals to field tools.' },
  { title: 'AI & Automation', icon: 'sparkles', description: 'Intelligent assistants, document processing and workflows that run themselves.' },
  { title: 'FinTech Solutions', icon: 'wallet', description: 'Digital banking, payments and mobile money platforms with compliance built in.' },
  { title: 'Cloud & DevOps', icon: 'cloud', description: 'Resilient cloud infrastructure, CI/CD pipelines and zero-downtime releases.' },
  { title: 'API Development', icon: 'plug', description: 'Secure, well-documented APIs that connect your systems and partners.' },
  { title: 'UI/UX Design', icon: 'pen', description: 'Research-led interfaces people understand instantly and enjoy using.' },
  { title: 'Cybersecurity', icon: 'shield', description: 'Assessments, hardening and monitoring that keep your data and users safe.' },
  { title: 'Technology Consulting', icon: 'compass', description: 'Strategy, architecture and roadmaps that turn ambition into a plan.' },
]

export const values: Item[] = [
  { title: 'Innovation', icon: 'lightbulb', description: 'We question the obvious and build what comes next.' },
  { title: 'Excellence', icon: 'award', description: 'Craft in every line of code and every interaction.' },
  { title: 'Integrity', icon: 'scale', description: 'We do what we say, and say what we do.' },
  { title: 'Customer Success', icon: 'heart', description: 'Your outcomes are the only measure that matters.' },
  { title: 'Collaboration', icon: 'users', description: 'One team with our clients, from first call to launch.' },
  { title: 'Continuous Learning', icon: 'book', description: 'Always curious, always improving.' },
  { title: 'Impact', icon: 'globe', description: 'Technology that moves Africa forward.' },
]

export const techStack: { category: string; items: string[] }[] = [
  { category: 'Frontend', items: ['React', 'Angular', 'Vue', 'Flutter'] },
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', '.NET', 'Python'] },
  { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MongoDB'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
  { category: 'AI', items: ['OpenAI', 'TensorFlow', 'LangChain'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes'] },
]

export const lifecycle: { title: string; description: string }[] = [
  { title: 'Discovery', description: 'We immerse ourselves in your business, users and goals to find the real problem worth solving.' },
  { title: 'Requirements', description: 'Clear scope, priorities and success metrics, agreed before a single line of code.' },
  { title: 'Design', description: 'Architecture and interfaces designed together, prototyped and validated early.' },
  { title: 'Development', description: 'Agile sprints with working software every two weeks and full visibility.' },
  { title: 'QA', description: 'Automated and manual testing for quality, performance and security.' },
  { title: 'Deployment', description: 'Reliable, repeatable releases to the cloud or on-premise with zero surprises.' },
  { title: 'Support', description: 'Monitoring, maintenance and continuous improvement long after launch.' },
]

export const industries: Item[] = [
  { title: 'Banking & FinTech', icon: 'landmark', description: 'Core banking, payments and digital channels.' },
  { title: 'Healthcare', icon: 'stethoscope', description: 'Hospital systems and patient-centred platforms.' },
  { title: 'Education', icon: 'graduation', description: 'Learning platforms and school management.' },
  { title: 'Government', icon: 'building', description: 'Citizen services and GovTech infrastructure.' },
  { title: 'Retail & E-commerce', icon: 'shopping', description: 'Online stores, inventory and loyalty.' },
  { title: 'NGOs', icon: 'handshake', description: 'Program, donor and impact management.' },
  { title: 'Manufacturing', icon: 'factory', description: 'Operations, supply chain and IoT.' },
  { title: 'Hospitality', icon: 'hotel', description: 'Booking, guest experience and operations.' },
]

export const whyUs: Item[] = [
  { title: 'Enterprise-grade security', icon: 'lock', description: 'Security designed in from day one, not bolted on at the end.' },
  { title: 'Scalable architecture', icon: 'layers', description: 'Systems that grow from your first hundred users to your first million.' },
  { title: 'Agile delivery', icon: 'zap', description: 'Short cycles, working software and fast feedback.' },
  { title: 'Transparent communication', icon: 'message', description: 'You always know where your project stands.' },
  { title: 'Long-term partnership', icon: 'infinity', description: 'We stay with you well beyond launch day.' },
  { title: 'Customer-centric approach', icon: 'target', description: 'Every decision starts with your users and your goals.' },
]

export const advantage = [
  'Business Challenge',
  'Digital Strategy',
  'Solution Design',
  'Development',
  'Deployment',
  'Measurable Business Impact',
]

export interface CaseStudy {
  title: string
  sector: string
  challenge: string
  solution: string
  technologies: string[]
  impact: string
}

// TODO: replace challenge / solution / technologies / impact with real project details.
export const caseStudies: CaseStudy[] = [
  {
    title: 'Digital Banking Platform',
    sector: 'Banking & FinTech',
    challenge: 'Details coming soon.',
    solution: 'Details coming soon.',
    technologies: [],
    impact: 'Details coming soon.',
  },
  {
    title: 'Hospital Management System',
    sector: 'Healthcare',
    challenge: 'Details coming soon.',
    solution: 'Details coming soon.',
    technologies: [],
    impact: 'Details coming soon.',
  },
  {
    title: 'NGO Platform',
    sector: 'NGOs',
    challenge: 'Details coming soon.',
    solution: 'Details coming soon.',
    technologies: [],
    impact: 'Details coming soon.',
  },
]

export interface Member {
  name: string
  role: string
  photo: string
}

// TODO: add names and photos for each role.
export const team: Member[] = [
  { name: ceo.name, role: 'Chief Executive Officer', photo: ceo.photo },
  { name: '', role: 'Chief Technology Officer', photo: '' },
  { name: '', role: 'Head of Engineering', photo: '' },
  { name: '', role: 'Operations Manager', photo: '' },
  { name: '', role: 'Business Development', photo: '' },
]

export const csr =
  'We invest in the next generation of African technologists, supporting youth digital skills, innovation, education and sustainable development initiatives across the continent.'

export const futureVision: Item[] = [
  { title: 'Artificial Intelligence', icon: 'brain', description: '' },
  { title: 'GovTech', icon: 'landmark', description: '' },
  { title: 'HealthTech', icon: 'stethoscope', description: '' },
  { title: 'EdTech', icon: 'graduation', description: '' },
  { title: 'Blockchain', icon: 'blocks', description: '' },
  { title: 'Smart Cities', icon: 'city', description: '' },
  { title: 'Digital Identity', icon: 'fingerprint', description: '' },
]
