const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white px-4 py-7'>
      <h1 className='text-2xl font-black'>SugarByte</h1>

      <ul className='flex gap-24 font-medium'>
        <li>Home</li>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div>Book a call</div>
    </nav>
  );
};

export default Navbar;
