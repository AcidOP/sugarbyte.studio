import Link from 'next/link';

import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';

const Row2 = () => {
  return (
    <Container>
      <HalfLayout className='mt-24'>
        <HalfLayout.LeftChild className='hidden lg:block'>
          <div />
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild>
          <div className='grid grid-cols-2 text-neutral-700'>
            <LegalLinks />
            <Trademark />
          </div>
        </HalfLayout.RightChild>
      </HalfLayout>
    </Container>
  );
};

const LegalLinks = () => {
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms Of Service', href: '/tos' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ];

  return (
    <section>
      <ul className='font-primary w-full space-y-0.5 text-lg font-medium lg:text-2xl'>
        {legalLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='transition-colors hover:text-neutral-900'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Trademark = () => {
  return (
    <section className='font-primary flex w-full items-start text-sm tracking-tight lg:text-2xl'>
      <p className='font-medium'>
        @<span>{new Date().getFullYear()}</span> SUGARBYTE.STUDIO
      </p>
    </section>
  );
};

export default Row2;
