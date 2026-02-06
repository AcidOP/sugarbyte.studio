import Link from 'next/link';

import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Book a Call',
    href: '/book-a-call',
  },
];

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 py-7'>
      <Container>
        <HalfLayout className='w-full'>
          <HalfLayout.LeftChild>
            <h1 className='font-primary text-2xl font-bold'>SugarByte</h1>
          </HalfLayout.LeftChild>

          <HalfLayout.RightChild>
            <ul className='flex items-center justify-between'>
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-lg font-medium text-neutral-600 hover:text-neutral-900'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </HalfLayout.RightChild>
        </HalfLayout>
      </Container>
    </nav>
  );
};

export default Navbar;
