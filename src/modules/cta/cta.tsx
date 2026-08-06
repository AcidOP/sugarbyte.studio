import Container from '@/components/layouts/container';

import CalEmbed from '@/components/ui/cal-embed';

const CTA = () => {
  return (
    <div className='w-full pb-16 lg:pb-0'>
      <Container className='flex flex-col items-center justify-center gap-10 text-center'>
        <div className='space-y-5'>
          <h5 className='font-primary text-7xl font-black text-neutral-800'>
            Let&apos;s engineer your growth.
          </h5>
          <p className='text-lg font-medium text-neutral-600'>
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
