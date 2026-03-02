import { socials } from '@/data/socials';
import { Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

import EmailCTA from './copy-email';

import { cn } from '@/lib/utils';

import type { LucideIcon } from 'lucide-react';

interface IProps {
  className?: string;
}

const ICON_MAP = {
  youtube: Youtube,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
} as const;

const SocialsCol = ({ className }: IProps) => {
  const email = socials.find(s => s.id === 'email');
  const others = socials.filter(s => s.id !== 'email');

  return (
    <section
      className={cn(
        'font-primary flex flex-col justify-between text-2xl font-medium text-neutral-700',
        className,
      )}
    >
      <ListLinks links={others} />
      {email && <EmailCTA email={email} />}
    </section>
  );
};

const ListLinks = ({ links }: { links: typeof socials }) => {
  return (
    <ul className='space-y-1.75'>
      {links.map((social, index) => {
        const Icon = ICON_MAP[social.id];
        return (
          <li key={social.id}>
            <a
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-3'
            >
              <span>
                <Icon
                  size={30}
                  className={cn(
                    'transition-all duration-200 group-hover:scale-110 group-hover:rotate-0',
                    index % 2 === 0 ? 'rotate-3' : '-rotate-3',
                  )}
                />
              </span>
              {social.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialsCol;
