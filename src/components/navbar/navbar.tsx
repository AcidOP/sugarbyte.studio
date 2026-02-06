import Container from '@/components/layouts/container';

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between bg-white py-7'>
      <Container className='flex w-full justify-between'>
        <h1 className='text-2xl font-black'>SugarByte</h1>

        <ul className='flex gap-24 font-medium'>
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div>Book a call</div>
      </Container>
    </nav>
  );
};

export default Navbar;
