/* eslint-disable @typescript-eslint/no-non-null-assertion */
import OfferCard from './card';

import HalfLayout from '@/components/layouts/half-layout';

import type { Offer } from '../offers';

interface IProps {
  offers: Offer[];
}

const ServicesInfo = ({ offers }: IProps) => {
  const sortedOffers = offers.sort((a, _) => (a.primary ? -1 : 1));
  const primary = sortedOffers[0];
  const others = sortedOffers.slice(1);

  return (
    <HalfLayout>
      <HalfLayout.LeftChild>
        <OfferCard {...primary!} />
      </HalfLayout.LeftChild>
      <HalfLayout.RightChild>
        <div className='flex flex-col space-y-10'>
          {others.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </HalfLayout.RightChild>
    </HalfLayout>
  );
};

export default ServicesInfo;
