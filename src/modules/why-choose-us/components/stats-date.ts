export type StatData = {
  heading: string;
  subheading: string;
  value: string;
  statType: 'business' | 'technical';
};

const data: StatData[] = [
  {
    heading: 'Conversion',
    subheading: 'Increased Conversions',
    value: '+42%',
    statType: 'business',
  },
  {
    heading: 'Engagement',
    subheading: 'Higher Engagement',
    value: '2.3x',
    statType: 'business',
  },
  {
    heading: 'Sessions',
    subheading: 'Average User Session',
    value: '3m 27s',
    statType: 'business',
  },
  {
    heading: 'Retention',
    subheading: 'User Retention',
    value: '72%',
    statType: 'business',
  },
  {
    heading: 'Loadspeed',
    subheading: 'Average Load Time',
    value: '<1.5s',
    statType: 'technical',
  },
  {
    heading: 'Animations',
    subheading: 'Smooth UI ',
    value: '60 FPS',
    statType: 'technical',
  },
  {
    heading: 'Lighthouse',
    subheading: 'Google Lighthouse Score',
    value: '95+',
    statType: 'technical',
  },
  {
    heading: 'Adaptability',
    subheading: 'Mobile Optimized',
    value: '100%',
    statType: 'technical',
  },
];

export const businessStats: StatData[] = data.filter(
  stat => stat.statType === 'business',
);
export const technicalStats: StatData[] = data.filter(
  stat => stat.statType === 'technical',
);
