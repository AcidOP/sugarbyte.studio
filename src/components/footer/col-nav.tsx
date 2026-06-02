import { navLinks } from '@/data/nav-links';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

const NavCol = ({ className }: IProps) => {
  return (
    <section className={cn('font-primary text-5xl font-bold', className)}>
      <ul className='flex flex-col space-y-1.5'>
        {navLinks.map(link => (
          <li
            key={link.href}
            className='inline-block transition-all duration-100 not-hover:rotate-1 hover:rotate-0 hover:text-black'
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavCol;
