import { ServiceItem, FaqItem, TrustCard, ProcessStep, BusinessType } from '../types';

export const BUSINESS_INFO = {
  name: 'Peak SEO & Web Design of Houston',
  shortName: 'Peak SEO & Web Design',
  location: 'Houston, Texas',
  phone: '(713) 555-0198',
  email: 'hello@peakseowebdesignhouston.com',
  hours: 'Monday – Friday: 8:00 AM – 6:00 PM CST',
  serviceArea: 'Greater Houston Metropolitan Area & Surrounding Texas Communities',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design Houston',
    eyebrow: 'Custom Web Solutions',
    keyword: 'website design houston',
    description:
      'Tailored, responsive websites built around your business goals, brand identity, and customer conversion paths.',
    features: [
      'Custom UI/UX Architecture',
      'Mobile-First Responsiveness',
      'Core Web Vitals & Speed',
    ],
    anchor: 'web-design',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Website Design Houston',
    eyebrow: 'Online Stores',
    keyword: 'ecommerce website design houston',
    description:
      'Conversion-focused online stores built to provide smooth shopping experiences and secure checkout flows.',
    features: [
      'Frictionless 1-Page Checkout',
      'Mobile-Optimized Catalog',
      'Secure Payment Gateways',
    ],
    anchor: 'ecommerce',
  },
  {
    id: 'redesign',
    title: 'Website Redesign Houston',
    eyebrow: 'Digital Transformation',
    keyword: 'website redesign houston',
    description:
      'Upgrade outdated sites with modern SaaS-level polish, faster loading speeds, and protected search equity.',
    features: [
      'SEO Equity & 301 Redirects',
      'Modernized Responsive UI',
      'Eliminated Usability Bottlenecks',
    ],
    anchor: 'redesign',
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance Houston',
    eyebrow: 'Support & Security',
    keyword: 'website maintenance houston',
    description:
      'Keep your website secure, updated, fast, and trouble-free with ongoing local Houston technical support.',
    features: [
      'Automated Off-site Backups',
      'Security Patches & Updates',
      'Proactive Uptime Monitoring',
    ],
    anchor: 'maintenance',
  },
  {
    id: 'seo',
    title: 'Local SEO & Search Optimization',
    eyebrow: 'Organic Visibility',
    keyword: 'local seo houston',
    description:
      'Rank higher on Google organic search and Google Maps to consistently capture qualified local Houston customers.',
    features: [
      'Google Business Profile (GBP) Optimization',
      'Local Houston Keyword Rankings',
      'Structured Schema & Technical SEO',
    ],
    anchor: 'local-houston',
  },
];

export const TRUST_CARDS: TrustCard[] = [
  {
    title: 'Houston-Focused',
    description:
      'Rooted right here in Houston, Texas, understanding the local market dynamics and competitive landscape.',
    iconName: 'MapPin',
  },
  {
    title: 'Conversion-Focused',
    description:
      'Every layout, headline, and call-to-action is engineered to convert qualified visitors into paying clients.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Mobile-First',
    description:
      'Fluid, touch-optimized experiences that perform flawlessly on smartphones, tablets, and desktop displays.',
    iconName: 'Smartphone',
  },
  {
    title: 'Ongoing Support',
    description:
      'Reliable Houston website maintenance and technical guidance long after your new site goes live.',
    iconName: 'ShieldCheck',
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    number: '01',
    title: 'Conversion-Focused Design',
    description:
      'We structure user journeys, visual visual cues, and contact forms to turn casual browsers into verified Houston inquiries.',
  },
  {
    number: '02',
    title: 'Mobile-First Experience',
    description:
      'With over 65% of local Houston searches occurring on mobile devices, our layouts load instantly and navigate effortlessly on phones.',
  },
  {
    number: '03',
    title: 'SEO-Friendly Foundation',
    description:
      'Built with clean semantic HTML5, schema markup, and rapid loading speeds that search engines prioritize.',
  },
  {
    number: '04',
    title: 'Ongoing Website Support',
    description:
      'Your website remains secure, backed up, and updated so you can focus on running your business with peace of mind.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand your business, audience, and goals.',
    deliverables: ['Goals alignment & target audience audit', 'Competitive Houston market analysis', 'Project scope & technical requirements'],
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'Plan the structure and create the visual direction.',
    deliverables: ['Information architecture & wireframes', 'Modern interactive design mockups', 'Mobile-responsive layout validation'],
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build a responsive, fast, and user-friendly website.',
    deliverables: ['Clean, modern code implementation', 'Core Web Vitals & speed optimization', 'Lead capture forms & CRM integrations'],
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Launch the website and provide ongoing support when needed.',
    deliverables: ['Pre-launch quality assurance & 301 check', 'DNS cutover & search engine indexing', 'Proactive maintenance & continuous support'],
  },
];

export const WHO_WE_HELP: BusinessType[] = [
  {
    title: 'Small Businesses',
    tagline: 'Professional Local Presence',
    description: 'Houston entrepreneurs who need an established, credible website that turns local searchers into reliable customers.',
    iconName: 'Building2',
  },
  {
    title: 'Professional Services',
    tagline: 'Trust & Authority',
    description: 'Legal practices, medical offices, accounting firms, and consultants requiring polished credibility and client intake.',
    iconName: 'Briefcase',
  },
  {
    title: 'Local Service Businesses',
    tagline: 'Inbound Houston Leads',
    description: 'Contractors, HVAC technicians, electricians, and home service specialists who rely on urgent phone calls and quote forms.',
    iconName: 'Wrench',
  },
  {
    title: 'Ecommerce Businesses',
    tagline: 'Frictionless Online Sales',
    description: 'Retailers and DTC brands seeking modern ecommerce website design in Houston that maximizes conversion rates.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Startups & Tech',
    tagline: 'High-Impact Brand Velocity',
    description: 'Emerging tech ventures and innovative Houston teams ready to launch with a distinct, SaaS-caliber presentation.',
    iconName: 'Rocket',
  },
  {
    title: 'Growing Companies',
    tagline: 'Scalable Digital Infrastructure',
    description: 'Established Houston enterprises looking to modernize an outdated site and scale their lead generation channels.',
    iconName: 'TrendingUp',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What does website design in Houston include?',
    answer:
      'Our Houston website design projects include comprehensive custom UI/UX design, mobile-first responsive coding, speed and Core Web Vitals optimization, clean on-page SEO structure, lead-generation forms, and full launch configuration with search engine indexing.',
  },
  {
    question: 'How much does a website design project cost?',
    answer:
      'Website design project costs depend directly on scope, page count, and specific functional requirements—such as custom business sites, complex ecommerce platforms, or custom integrations. We provide transparent, itemized quotes with no hidden fees following an initial discovery consultation.',
  },
  {
    question: 'Do you offer ecommerce website design in Houston?',
    answer:
      'Yes, we provide specialized ecommerce website design in Houston. We build fast, secure online stores on modern platforms with seamless payment gateways, automated inventory management, mobile-optimized checkout funnels, and conversion-focused product merchandising.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. Our website redesign Houston service transforms dated or sluggish websites into high-performing digital assets. We preserve existing SEO authority through meticulous 301 redirect mapping while overhauling the visual design, speed, and mobile responsiveness.',
  },
  {
    question: 'Do you provide website maintenance in Houston?',
    answer:
      'Yes, our ongoing website maintenance Houston plans ensure your site remains secure, updated, fast, and trouble-free. Plans include regular cloud backups, core software and plugin updates, SSL monitoring, uptime tracking, and priority technical assistance.',
  },
  {
    question: 'Can you help with SEO after the website launch?',
    answer:
      'Every website we engineer comes pre-configured with technical SEO best practices, structured schema markup, and clean semantic code. We also offer continuous local Houston SEO support to help your business build visibility on Google Maps and organic search results.',
  },
  {
    question: 'How long does a website redesign take?',
    answer:
      'A typical website redesign project takes between 3 to 6 weeks from initial kickoff to public deployment, depending on content availability, custom feature requirements, and client review feedback. We define clear milestones so you know what to expect at every phase.',
  },
  {
    question: 'Do you work with small businesses in Houston?',
    answer:
      'Yes, a substantial portion of our clients are Houston small businesses and local service providers. We tailor our website design solutions to deliver maximum return on investment for growing local companies without unnecessary overhead.',
  },
];
