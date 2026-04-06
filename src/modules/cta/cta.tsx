import Container from '@/components/layouts/container';

import Dither from '@/components/ui/dither-background';

const CTA = () => {
  return (
    <div className='w-full pt-24 pb-14'>
      <Container className='flex items-center justify-center'>
        <section className='relative w-full py-36'>
          <div className='absolute top-0 left-0 -z-10 h-full w-full border-2 border-black shadow-2xl'>
            <Dither
              waveColor={[0.5, 0.5, 0]}
              disableAnimation={false}
              mouseRadius={0.3}
              colorNum={15}
              waveAmplitude={0.24}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div>

          <section className='w-full text-center text-white'>
            <h5 className='font-primary text-7xl font-black'>
              Ready to Increase your revenue?
            </h5>

            <button className='bg-accent mt-10 cursor-pointer border-2 border-black px-5 py-2 text-xl font-medium text-black shadow-2xl transition-all hover:scale-105 hover:rotate-[0.25deg]'>
              Get a FREE Revenue Audit
            </button>
          </section>
        </section>
      </Container>
    </div>
  );
};

export default CTA;
