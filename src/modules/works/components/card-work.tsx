import type { Work } from '@/data/works';

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div>
      <div className='font-primary mb-2 flex justify-between text-xl font-medium text-neutral-300 uppercase'>
        <h5>{work.name}</h5>
        <time>{work.date}</time>
      </div>

      <div className='grid aspect-square place-content-center bg-neutral-600'>
        <ul className='marker:text-accent flex flex-col text-lg font-normal text-neutral-300'>
          {work.outcomes &&
            work.outcomes.map(item => (
              <li key={item} className='list-disc'>
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
