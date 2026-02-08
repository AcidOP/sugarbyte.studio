import type { Work } from '@/data/works';

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div>
      <div className='font-primary mb-2 flex justify-between text-xl font-medium text-neutral-800 uppercase'>
        <h5>{work.name}</h5>
        <time>{work.date}</time>
      </div>

      <div className='aspect-square bg-neutral-300' />
    </div>
  );
};

export default WorkCard;
