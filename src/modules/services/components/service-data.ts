export type TServicePackage = {
  id: string;
  name: string;
  tagline: string;
  recommended: boolean;
  pricing: string;
  cta: string;

  targetClients: string[];
  positioning: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
  idealFor: string;
  support: {
    revisions: string;
    postLaunchSupport: string;
  };
};

export const servicePackages: TServicePackage[] = [
  {
    id: 'launch',
    name: 'Launch',
    tagline: 'Build a premium online presence that converts.',
    recommended: false,
    pricing: '$800',
    cta: 'Start Building Authority',

    targetClients: [
      'Early-stage creators',
      'Small businesses',
      'Personal brands',
      'New real estate agents',
    ],

    positioning:
      'Premium digital presence engineered to convert visitors into qualified leads.',

    outcomes: [
      'Establish premium credibility',
      'Increase trust and authority',
      'Capture more qualified leads',
      'Improve mobile experience',
    ],

    deliverables: [
      'Conversion-focused landing page',
      'Mobile-first responsive design',
      'Lead capture/contact system',
      'Basic conversion optimization',
      'Performance optimization',
      'SEO foundation setup',
      'Clean modern UI/UX',
    ],

    process: [
      'Discovery call',
      'Wireframing',
      'UI/UX design',
      'Development',
      'Launch optimization',
    ],

    idealFor: 'Businesses building their first serious online presence.',

    support: {
      revisions: 'Limited revisions',
      postLaunchSupport: '7 days support',
    },
  },

  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Turn your website into a revenue engine.',
    recommended: true,
    pricing: '$1200',
    cta: 'Book a Growth Strategy Call',

    targetClients: [
      'Growing creators',
      'Real estate businesses',
      'Coaches and consultants',
      'Established personal brands',
    ],

    positioning:
      'Brands receiving traffic but struggling to convert visitors into recurring revenue.',

    outcomes: [
      'Increase lead conversion rates',
      'Improve lead quality',
      'Strengthen premium positioning',
      'Create scalable acquisition systems',
    ],

    deliverables: [
      'Multi-page conversion-focused website',
      'Funnel architecture',
      'Advanced UI/UX systems',
      'SEO optimization',
      'Analytics dashboard setup (Complimentary)',
      'Conversion-focused copy direction',
      'Lead generation systems',
      'Performance optimization',
    ],

    process: [
      'Revenue audit',
      'Strategy workshop',
      'Conversion wireframing',
      'UI/UX design',
      'Development',
      'Testing & optimization',
      'Launch',
    ],

    idealFor: 'Brands serious about scaling revenue and improving conversions.',

    support: {
      revisions: 'Priority revisions',
      postLaunchSupport: '14 days support',
    },
  },

  {
    id: 'authority',
    name: 'Authority',
    tagline: 'Premium digital systems for market dominance.',
    recommended: false,
    pricing: 'Custom pricing',
    cta: 'Apply for a Premium Build',

    targetClients: [
      'Luxury brands',
      'High-income creators',
      'Premium real estate firms',
      'High-ticket businesses',
    ],

    positioning:
      "Serious Brands where perception, and user experience directly impact company's revenue.",

    outcomes: [
      'Elevate brand authority',
      'Increase premium perception',
      'Improve close rates',
      'Build scalable conversion systems',
      'Dominate competitive markets',
    ],

    deliverables: [
      'Custom strategy workshop',
      'Advanced conversion architecture',
      'High-end UI/UX systems',
      'Personal brand positioning',
      'Content funnel strategy',
      'Advanced SEO architecture',
      'Performance engineering',
      'Conversion optimization systems',
      'Ongoing iteration support',
    ],

    process: [
      'Deep business audit',
      'Market positioning strategy',
      'Conversion architecture',
      'Custom UI system design',
      'High-performance development',
      'Advanced testing',
      'Launch & optimization',
      'Continuous iteration',
    ],

    idealFor:
      'Businesses where every visitor and every impression carries significant monetary value.',

    support: {
      revisions: 'Flexible iterative process',
      postLaunchSupport: '30 days support',
    },
  },
];

export const recommendedPackage = servicePackages.find(
  pkg => pkg.recommended,
) as TServicePackage;

export const packages = servicePackages.filter(
  pkg => !pkg.recommended,
) as TServicePackage[];
