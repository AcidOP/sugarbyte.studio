import Container from '@/components/layouts/container';

import CalEmbed from '@/components/ui/cal-embed';

const CTA = () => {
  return (
    <div className='w-full pb-16 shadow-2xl lg:pb-0'>
      <Container className='mt-16 flex flex-col items-center justify-center gap-10 text-center'>
        <div className='space-y-8'>
          <h5 className='font-primary text-4xl font-black text-neutral-800 lg:text-7xl'>
            Let&apos;s engineer your growth.
          </h5>
          <p className='mx-10 text-lg leading-tight font-medium text-neutral-600'>
            In one call, we&apos;ll review your website, identify conversion leaks,
            and show where your business can grow.
          </p>
        </div>

        <CalEmbed />
      </Container>
    </div>
  );
};

export default CTA;
