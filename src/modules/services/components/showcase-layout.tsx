import ServiceCard from './service-card';
import { packages, recommendedPackage } from './service-data';

import HalfLayout from '@/components/layouts/half-layout';

const ServiceLayout = () => {
  return (
    <HalfLayout className='gap-12'>
      <HalfLayout.LeftChild>
        <section className='ml-auto flex origin-right flex-col gap-9'>
          {packages.map((pkg, idx) => (
            <ServiceCard {...pkg} key={pkg.id} index={idx} className='ml-auto' />
          ))}
        </section>
      </HalfLayout.LeftChild>

      <HalfLayout.RightChild>
        <div className='sticky top-32'>
          <ServiceCard {...recommendedPackage} recommended />
        </div>
      </HalfLayout.RightChild>
    </HalfLayout>
  );
};

export default ServiceLayout;
