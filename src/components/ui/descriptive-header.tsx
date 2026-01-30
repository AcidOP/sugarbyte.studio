interface IProps {
  count: number;
  heading: string;
  description: string;
}

const SectionHeader = ({ count, heading, description }: IProps) => {
  if (heading.endsWith('.')) {
    heading = heading.slice(0, -1);
  }

  return (
    <section className='flex items-center justify-between py-48'>
      <span className='text-xl font-medium'>({count})</span>
      <h2 className='text-7xl font-black'>{heading}.</h2>
      <p className='max-w-sm text-lg font-medium'>{description}</p>
    </section>
  );
};

export default SectionHeader;
