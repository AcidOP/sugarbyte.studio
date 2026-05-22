import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='grid min-h-[90vh] place-content-center'>
      <h1 className='font-primary text-9xl font-black text-gray-800'>404</h1>
      <p className='text-center text-2xl text-gray-500'>Page not found</p>

      <Link href='/'>
        <button className='bg-accent font-primary mt-8 w-full cursor-pointer rounded border-2 border-black px-6 py-3 font-bold text-neutral-900 shadow-2xl'>
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
