export interface Offer {
  name: string;
  description: string;
  idealFor: string[];
  includes: string[];
  startingPrice: string;
  timeline: string;
  cta: string;
  primary: boolean;
}

export const offers: Offer[] = [
  {
    name: 'Rapid Website Launch',
    description:
      'A premium, conversion-focused website built and shipped fast. Designed to look sharp, load quickly, and help turn visitors into customers.',
    idealFor: [
      'Startups launching',
      'Founders upgrading from DIY sites',
      'Agencies rebranding',
    ],
    includes: [
      '4—6 core pages',
      'Conversion-focused UX',
      'Brand-aligned visual design',
      'Responsive, performance-optimized build',
      'Basic SEO & analytics setup',
    ],
    startingPrice: '$1,600+',
    timeline: '2 weeks',
    cta: 'Start a Project',
    primary: true,
  },
  {
    name: 'High-Intent Landing Page',
    description:
      'A focused landing page built around one clear goal — ideal for campaigns, launches, or lead generation.',
    idealFor: ['Ad campaigns', 'Product launches', 'Lead generation offers'],
    includes: [
      'Single high-conversion page',
      'Clear CTA structure',
      'Conversion-focused UX',
      'Responsive build',
      'Performance-ready setup',
    ],
    startingPrice: '$600+',
    timeline: '5–7 days',
    cta: 'Build a Landing Page',
    primary: false,
  },
  {
    name: 'Conversion Boost Sprint',
    description:
      'A focused optimization sprint to improve clarity, UX, and conversion performance on your existing website.',
    idealFor: [
      'Websites with low conversion',
      'Post-launch improvements',
      'Brands seeking performance refinement',
    ],
    includes: [
      'Conversion audit',
      'Messaging clarity improvements',
      'CTA restructuring',
      'UX refinements',
      'Analytics tuning',
    ],
    startingPrice: '$800+',
    timeline: '5–7 days',
    cta: 'Optimize My Website',
    primary: false,
  },
  // {
  //   name: 'Website Care Plan',
  //   description:
  //     'Ongoing support to maintain performance, implement small improvements, and ensure your website stays sharp and effective.',
  //   idealFor: [
  //     'Growing brands',
  //     'Long-term website maintenance',
  //     'Continuous optimization',
  //   ],
  //   includes: [
  //     'Minor updates & improvements',
  //     'Performance monitoring',
  //     'Conversion tweaks',
  //     'Analytics check-ins',
  //   ],
  //   startingPrice: '$200+/month',
  //   timeline: 'Monthly',
  //   cta: 'Get Ongoing Support',
  //   primary: false,
  // },
];
