export type SocialPlatform =
  | 'youtube'
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'email';

export interface SocialLink {
  id: SocialPlatform;
  name: string;
  url: string;
}

export const socials: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@sugarbyte-studio',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/sugarbyte-studio',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/sugarbyte.studio',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'hello@sugarbyte.studio',
  },
];
