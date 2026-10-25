import { ServiceItem, FaqItem, TrustCard, ProcessStep, BusinessType } from '../types';

export const BUSINESS_INFO = {
  name: 'Peak SEO & Web Design of Houston',
  shortName: 'Peak SEO & Web Design',
  location: 'Houston, Texas',
  phone: '(713) 555-0198',
  email: 'hello@peakhoustonwebdesign.us',
  hours: 'Monday – Friday: 8:00 AM – 6:00 PM CST',
  serviceArea: 'Greater Houston Metropolitan Area & Surrounding Texas Communities',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design Houston TX',
    eyebrow: 'Web Design Agency',
    keyword: 'website design houston tx',
    description:
      'Custom, responsive websites built by a dedicated Houston website designer and engineering team. We deliver custom web design, conversion-focused UI/UX, and responsive web development Houston Texas businesses rely on.',
    features: [
      'Custom UI/UX & Responsive Layouts',
      'Mobile-First Core Web Vitals',
      'Built-in On-Page SEO Foundations',
    ],
    anchor: 'web-design',
  },
  {
    id: 'seo',
    title: 'Houston SEO Web Design',
    eyebrow: 'SEO Specialist and Web Design',
    keyword: 'houston seo web design',
    description:
      'As a dedicated SEO and web design company, our specialists deliver high-impact SEO web design services that rank for competitive Houston keywords and convert search traffic into paying clients.',
    features: [
      'Google Business Profile (GBP) & Local SEO',
      'On-Page SEO & Keyword Architecture',
      'Structured Schema & Technical SEO Audits',
    ],
    anchor: 'local-houston',
  },
  {
    id: 'website-optimization',
    title: 'Website Optimization Houston TX',
    eyebrow: 'Website Optimization Help Houston TX',
    keyword: 'website optimization houston tx',
    description:
      'Actionable website optimization help Houston TX businesses rely on to boost Core Web Vitals, accelerate load speeds, resolve technical crawl errors, and protect established search equity during site updates.',
    features: [
      'SEO Equity & 301 Redirect Mapping',
      'Sub-Second Loading & Vitals Boost',
      'Eliminated Usability & Conversion Bottlenecks',
    ],
    anchor: 'redesign',
  },
  {
    id: 'seo-services',
    title: 'SEO Services Houston Texas',
    eyebrow: 'Houston SEO Agency & SEO Company',
    keyword: 'seo services houston texas',
    description:
      'Full-spectrum SEO services Houston Texas organizations trust to dominate search results. Our Houston SEO company implements hyper-local proximity signals, authoritative citations, and content strategy.',
    features: [
      'Google 3-Pack & Map Pack Domination',
      'Competitor Keyword & Gap Analysis',
      'Topical Authority & Content Silos',
    ],
    anchor: 'local-houston',
  },
  {
    id: 'web-hosting-seo',
    title: 'Web Hosting and SEO Services',
    eyebrow: 'Web Development and SEO Services',
    keyword: 'web hosting and seo services',
    description:
      'Reliable web hosting and SEO services with 99.9% uptime, managed cloud security, daily backups, and continuous web development SEO services to ensure your website performs at peak efficiency.',
    features: [
      'Automated Off-site Daily Backups',
      'Security Patches & Vulnerability Updates',
      'Continuous Technical SEO Maintenance',
    ],
    anchor: 'maintenance',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design Houston TX',
    eyebrow: 'Brand Identity & Visuals',
    keyword: 'graphic design houston tx',
    description:
      'Elevate your digital presence with professional graphic design Houston TX businesses leverage for brand identity, custom vector logos, marketing collateral, and conversion-focused web graphics.',
    features: [
      'Brand Identity & Vector Logos',
      'Custom Web Graphics & Vector Icons',
      'High-Converting Marketing Collateral',
    ],
    anchor: 'web-design',
  },
];

export const TRUST_CARDS: TrustCard[] = [
  {
    title: 'Houston-Based SEO & Design',
    description:
      'Rooted right here in Houston, Texas, understanding local search behavior, industry competitors, and neighborhood markets.',
    iconName: 'MapPin',
  },
  {
    title: 'Conversion-Focused Strategy',
    description:
      'Every layout, headline, and call-to-action is engineered by an expert SEO specialist and web design team to turn qualified searchers into paying clients.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Mobile-First Speed & Vitals',
    description:
      'Touch-optimized, sub-second experiences that ace Google Core Web Vitals across smartphones, tablets, and desktops.',
    iconName: 'Smartphone',
  },
  {
    title: 'Ongoing Support & Hosting',
    description:
      'Reliable web hosting and SEO services, proactive maintenance, and technical guidance long after your new site goes live.',
    iconName: 'ShieldCheck',
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    number: '01',
    title: 'Conversion-Focused SEO Website Design',
    description:
      'Our unified design SEO methodology combines visual polish with conversion psychology and keyword architecture to turn casual Houston searchers into verified business inquiries.',
  },
  {
    number: '02',
    title: 'Mobile-First Experience & Speed',
    description:
      'With over 68% of local Houston searches occurring on mobile devices, our layouts load under 1 second and navigate effortlessly on every phone.',
  },
  {
    number: '03',
    title: 'Built-in Technical SEO & Optimization',
    description:
      'Crafted with clean semantic HTML5, Schema.org local business markup, and Core Web Vitals optimization so search engines index and rank you quickly.',
  },
  {
    number: '04',
    title: 'Dedicated Local Houston Support',
    description:
      'Your website stays secure, backed up, and updated with ongoing maintenance and local Houston hosting so you can run your business with confidence.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & SEO Audit',
    description: 'Understand your business, target Houston audience, and competitive search landscape.',
    deliverables: ['Houston keyword & competitor audit', 'Audience persona & user journey mapping', 'Project scope & technical requirements'],
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description: 'Plan the site structure, URL hierarchy, and high-converting visual direction.',
    deliverables: ['Information architecture & on-page SEO wireframes', 'Interactive modern design mockups', 'Mobile-responsive layout validation'],
  },
  {
    number: '03',
    title: 'Web Development & Optimization',
    description: 'Build a responsive, lightning-fast website optimized for search engine ranking.',
    deliverables: ['Clean, modern code implementation', 'Core Web Vitals & speed optimization', 'Lead capture forms & CRM integrations'],
  },
  {
    number: '04',
    title: 'Launch, Indexing & Support',
    description: 'Deploy the site, submit sitemaps to Google, and provide ongoing maintenance.',
    deliverables: ['Pre-launch quality assurance & 301 redirect check', 'Search console indexing & schema validation', 'Proactive maintenance & continuous support'],
  },
];

export const WHO_WE_HELP: BusinessType[] = [
  {
    title: 'Houston Small Businesses',
    tagline: 'Small Business Web Design Houston',
    description: 'Local Houston small business owners who need an established, credible website and local SEO that turns searchers into loyal customers.',
    iconName: 'Building2',
  },
  {
    title: 'Energy & Industrial Companies',
    tagline: 'Energy Website Design',
    description: 'Houston energy firms, oilfield service providers, and industrial manufacturers needing high-credibility B2B web design and search positioning.',
    iconName: 'Rocket',
  },
  {
    title: 'Doctors & Medical Practices',
    tagline: 'SEO for Doctors & Clinics',
    description: 'Medical practices, surgeons, dental clinics, and healthcare specialists requiring authoritative patient intake and local medical SEO.',
    iconName: 'Briefcase',
  },
  {
    title: 'B2B Companies & Enterprise',
    tagline: 'Houston B2B Web Design',
    description: 'Commercial service providers, tech startups, and B2B enterprises requiring high-converting inbound funnels and technical SEO.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Lawyers & Insurance Agencies',
    tagline: 'Attorney SEO & Authority',
    description: 'Houston law firms and independent insurance agencies seeking to capture high-value search queries and build instant trust.',
    iconName: 'Wrench',
  },
  {
    title: 'Ecommerce & Retail Brands',
    tagline: 'Ecommerce Website Design',
    description: 'Houston retailers and direct-to-consumer brands looking to scale online revenue with frictionless shopping experiences.',
    iconName: 'ShoppingBag',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Why hire a combined SEO and web design company in Houston?',
    answer:
      'Hiring an agency that specializes as an integrated SEO and web design company ensures your website is engineered from day one with proper keyword structure, clean semantic markup, fast loading speeds, and mobile responsiveness. As a dedicated web design SEO company, our combined Houston SEO and web design approach builds organic search visibility directly into the foundation.',
  },
  {
    question: 'How can website optimization help Houston TX businesses?',
    answer:
      'Professional website optimization help Houston TX businesses rely on centers around Core Web Vitals speed, on-page keyword relevance, and conversion rate optimization. Optimizing these factors lowers bounce rates, boosts Google ranking positions for local Houston searches, and increases the percentage of site visitors who convert into paying clients.',
  },
  {
    question: 'What do your web development and SEO services include?',
    answer:
      'Our end-to-end web development and SEO services include custom UI/UX design, mobile-responsive frontend development, Core Web Vitals speed tuning, clean on-page SEO architecture, lead-generation forms, and full search engine indexing configured for Houston, Texas.',
  },
  {
    question: 'Do you offer managed web hosting and SEO services in Houston?',
    answer:
      'Yes, our integrated web hosting and SEO services keep your website secure, updated, and fast. Plans include daily cloud backups, core and plugin security patches, SSL renewal, uptime tracking, and priority technical assistance.',
  },
  {
    question: 'Do you provide graphic design Houston TX businesses can bundle with web design?',
    answer:
      'Yes, we provide full-suite graphic design Houston TX companies count on for vector logos, custom branding guides, marketing flyers, and bespoke digital illustrations that align seamlessly with your newly designed website.',
  },
  {
    question: 'What does website design in Houston TX include?',
    answer:
      'Our Houston website design packages include custom UI/UX design, mobile-responsive development, speed and Core Web Vitals optimization, clean on-page SEO structure, lead-generation forms, and full launch configuration with search engine indexing.',
  },
  {
    question: 'Can you redesign my existing website without losing search rankings?',
    answer:
      'Yes, preserving your established search rankings is our highest priority during a website redesign. We perform complete URL inventory audits, maintain heading hierarchies, and implement 1-to-1 301 redirects so your accumulated search authority and backlinks seamlessly transfer to your new, modernized site.',
  },
  {
    question: 'Why partner with an expert SEO specialist and web design team?',
    answer:
      'Working with a seasoned SEO specialist and web design partner guarantees that your website is built from the ground up for commercial search intent. Instead of designing a site that looks pretty but cannot be found on Google, we ensure every heading, page silo, and metadata element targets high-value local search traffic.',
  },
];
