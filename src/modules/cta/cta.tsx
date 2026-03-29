import Container from '@/components/layouts/container';

const CTA = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center'>
      <Container>
        <section className='w-full bg-black text-center text-white'>
          <h5 className='font-primary text-7xl font-bold'>
            Ready to Increase your revenue?
          </h5>
          <button className='bg-accent text-black'>Book a Meeting</button>
        </section>
      </Container>
    </div>
  );
};

export default CTA;
