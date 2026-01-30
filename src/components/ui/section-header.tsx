import type { ReactNode } from 'react';

interface IProps {
  heading: string;
  subheading: ReactNode | string;
}

const SectionHeader = ({ heading, subheading }: IProps) => {
  return (
    <section className='flex min-h-screen justify-between py-36'>
      <div className='w-1/3 text-lg font-medium'>{heading}</div>
      <div className='w-2/3 text-start text-5xl font-black'>{subheading}</div>
    </section>
  );
};

export default SectionHeader;
