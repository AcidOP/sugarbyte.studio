import Row1 from './row-1';
import Row2 from './row-2';

const Footer = () => {
  return (
    <footer className='bg-accent'>
      <div
        className='relative h-[775px]'
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className='relative -top-[100vh] h-[calc(100vh+775px)]'>
          <div className='sticky top-[calc(100vh-750px)] h-[775px]'>
            <Row1 />
            <Row2 />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
