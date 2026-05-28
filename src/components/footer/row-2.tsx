import Link from 'next/link';

import HalfLayout from '@/components/layouts/half-layout';

const Row2 = () => {
  return (
    <HalfLayout className='pt-20'>
      <HalfLayout.LeftChild>
        <div />
      </HalfLayout.LeftChild>

      <HalfLayout.RightChild>
        <div className='grid grid-cols-2 gap-16 text-neutral-700'>
          <LegalLinks />
          <Trademark />
        </div>
      </HalfLayout.RightChild>
    </HalfLayout>
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
      <ul className='font-primary w-full space-y-1 text-2xl font-medium'>
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
    <section className='font-primary flex w-full items-start text-xl tracking-wide'>
      <p className='font-medium'>
        @<span>{new Date().getFullYear()}</span> SUGARBYTE.STUDIO
      </p>
    </section>
  );
};

export default Row2;
