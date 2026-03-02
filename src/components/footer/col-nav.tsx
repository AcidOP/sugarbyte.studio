import { navLinks } from '@/data/nav-links';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

const NavCol = ({ className }: IProps) => {
  return (
    <section className={cn('font-primary text-5xl font-bold', className)}>
      <ul className='space-y-1.5'>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} className='transition-all hover:text-black'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavCol;
