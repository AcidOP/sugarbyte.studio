import { ScreenFitText } from '../ui/screen-fit-text';
import Row1 from './row-1';
import Row2 from './row-2';

const Footer = () => {
  return (
    <footer className='bg-accent'>
      <div
        className='relative h-[750px]'
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className='relative -top-[100vh] h-[calc(100vh+750px)]'>
          <div className='sticky top-[calc(100vh-750px)] h-[750px]'>
            <Row1 />
            <Row2 />
          </div>
        </div>
      </div>
      <ScreenFitText text='SugarByte' className='font-primary' />
    </footer>
  );
};

export default Footer;
