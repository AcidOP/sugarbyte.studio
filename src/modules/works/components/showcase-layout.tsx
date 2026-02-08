import WorkCard from './card-work';

import { chunkifyArray } from '@/lib/utils';

import HalfLayout from '@/components/layouts/half-layout';

import type { Work } from '@/data/works';

interface ShowcaseLayoutProps {
  works: Work[];
}

const ShowcaseLayout = ({ works }: ShowcaseLayoutProps) => {
  const rows = chunkifyArray(works, 3);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='g rid-cols-3 mb-24 grid gap-8'>
          <HalfLayout>
            <HalfLayout.LeftChild className='grid grid-cols-2 gap-10'>
              <WorkCard work={row[0]} />
              {row[1] && <WorkCard work={row[1]} />}
            </HalfLayout.LeftChild>
            <HalfLayout.RightChild>
              {row[2] && <WorkCard work={row[2]} />}
            </HalfLayout.RightChild>
          </HalfLayout>
        </div>
      ))}
    </>
  );
};

export default ShowcaseLayout;
