import Container from '@/components/layouts/container';

import DescriptiveHeader from '@/components/ui/descriptive-header';

const Box = () => <div className='aspect-video w-full bg-neutral-400 shadow-2xl' />;

const Works = () => {
  return (
    <Container className='my-10 min-h-screen'>
      <DescriptiveHeader
        count={7}
        heading='Selected Works'
        description="We've helped businesses across industries achieve their goals. Here
          are some of our recent projects."
      />

      <section className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
        <Box />
        <Box />
        <Box />
        <Box />
      </section>
    </Container>
  );
};

export default Works;
