export interface Work {
  name: string;
  type?: string;
  date?: string;
  outcomes?: Array<string>;
}

export const works: Work[] = [
  {
    name: 'MetricFlow',
    type: 'Internal analytics dashboard',
    date: '2025-03',
    outcomes: [
      'Tracked 20+ core metrics',
      'Cut manual reporting by 60%',
      'Enabled real-time access',
    ],
  },
  {
    name: 'ClipForge',
    type: 'Creator tools web application',
    date: '2025-02',
    outcomes: [
      'MVP shipped in 2 weeks',
      'Preview generation under 10s',
      'Tested with 15+ creators',
    ],
  },
  {
    name: 'VouchFast',
    type: 'SaaS product design & development',
    date: '2025-01',
    outcomes: [
      'Platform shipped in ~2 weeks',
      'Collection time reduced to <2 min',
      'API used across multiple surfaces',
    ],
  },
  {
    name: 'LaunchPad',
    type: 'Startup landing page & conversion system',
    date: '2024-12',
    outcomes: [
      'Launched in 10 days',
      '90+ Lighthouse score',
      'Demo sign-ups up 25%',
    ],
  },
  {
    name: 'DJ XRD',
    type: 'Personal branding & website',
    date: '2024-11',
    outcomes: [
      'Mobile load under 1.5s',
      'Bookings increased 40%',
      'Music + booking unified',
    ],
  },
  {
    name: 'Torrly',
    type: 'P2P systems & protocol implementation',
    date: '2024-10',
    outcomes: [
      'Core BitTorrent protocol implemented',
      'Downloaded from 100+ peers',
      'Low-memory peer handling',
    ],
  },
  {
    name: 'CreatorHub',
    type: 'Product prototyping & architecture',
    date: '2024-09',
    outcomes: [
      'Prototype shipped in 2 weeks',
      'Auth + profile flows built',
      'Validated with 30+ users',
    ],
  },
].sort((a, b) => {
  if (!a.date || !b.date) return 0;
  return b.date.localeCompare(a.date);
});
