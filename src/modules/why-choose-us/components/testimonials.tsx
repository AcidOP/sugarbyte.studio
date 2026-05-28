import { Marquee } from '@/components/ui/testimonials-marquee';

const reviews = [
  {
    name: 'Arjun Mehta',
    niche: 'Real Estate Consultant',
    img: 'https://i.pravatar.cc/150?img=11',
    body: 'The redesign gave our brand a much more premium feel. We started getting better quality inquiries almost immediately.',
  },
  {
    name: 'Rachel Kim',
    niche: 'YouTube Creator',
    img: 'https://i.pravatar.cc/150?img=32',
    body: 'Super clean execution. The site finally feels aligned with the level of content we produce.',
  },
  {
    name: 'Marcus Reed',
    niche: 'Startup Founder',
    img: 'https://i.pravatar.cc/150?img=15',
    body: 'We were mainly looking for a visual refresh, but the conversion improvements surprised us the most.',
  },
  {
    name: 'Daniel Wu',
    niche: 'SaaS Operator',
    img: 'https://i.pravatar.cc/150?img=14',
    body: 'The new experience feels smooth, modern, and much more intentional than our previous site.',
  },
  {
    name: 'Priya Shah',
    niche: 'Interior Design Studio',
    img: 'https://i.pravatar.cc/150?img=47',
    body: 'Clients constantly compliment the website now. It definitely helped improve our credibility.',
  },
  {
    name: 'Jason Miller',
    niche: 'Marketing Agency Owner',
    img: 'https://i.pravatar.cc/150?img=12',
    body: 'Probably the easiest design process we have worked through. Fast communication and very polished work.',
  },
  {
    name: 'Alicia Gomez',
    niche: 'Fitness Creator',
    img: 'https://i.pravatar.cc/150?img=48',
    body: 'The mobile experience alone made a huge difference for our audience engagement.',
  },
  {
    name: 'Tyler Brooks',
    niche: 'Personal Brand Coach',
    img: 'https://i.pravatar.cc/150?img=18',
    body: 'The site looks premium without feeling overdesigned. Exactly what we wanted.',
  },
  {
    name: 'Nina Patel',
    niche: 'Ecommerce Brand',
    img: 'https://i.pravatar.cc/150?img=44',
    body: 'We started seeing longer session times and lower bounce rates after launch.',
  },
  {
    name: 'Kevin Tran',
    niche: 'Tech Founder',
    img: 'https://i.pravatar.cc/150?img=19',
    body: 'The team clearly understands both design and business strategy. Rare combination.',
  },
  {
    name: 'Maya Collins',
    niche: 'Creative Director',
    img: 'https://i.pravatar.cc/150?img=41',
    body: 'Everything feels intentional — spacing, typography, animations, all of it.',
  },
  {
    name: 'Ryan Cooper',
    niche: 'Real Estate Agency',
    img: 'https://i.pravatar.cc/150?img=13',
    body: 'Our previous website felt outdated. This finally feels like a serious modern brand.',
  },
  {
    name: 'Sophie Laurent',
    niche: 'Luxury Brand',
    img: 'https://i.pravatar.cc/150?img=49',
    body: 'The attention to detail throughout the entire experience is genuinely impressive.',
  },
  {
    name: 'Nathan Scott',
    niche: 'Business Consultant',
    img: 'https://i.pravatar.cc/150?img=16',
    body: 'The redesign helped us present ourselves at a much higher level online.',
  },
  {
    name: 'Isabella Rossi',
    niche: 'Fashion Creator',
    img: 'https://i.pravatar.cc/150?img=50',
    body: 'Minimal, elegant, and extremely polished. The UX feels effortless.',
  },
  {
    name: 'Brandon Lee',
    niche: 'Lead Generation Agency',
    img: 'https://i.pravatar.cc/150?img=17',
    body: 'We noticed a clear increase in qualified leads within the first few weeks.',
  },
  {
    name: 'Olivia Bennett',
    niche: 'Course Creator',
    img: 'https://i.pravatar.cc/150?img=45',
    body: 'Very strategic approach. Nothing felt random or purely aesthetic.',
  },
  {
    name: 'Ethan Clarke',
    niche: 'Product Studio',
    img: 'https://i.pravatar.cc/150?img=20',
    body: 'The final result exceeded expectations both visually and technically.',
  },
  {
    name: 'Sara Ahmed',
    niche: 'Coaching Business',
    img: 'https://i.pravatar.cc/150?img=46',
    body: 'Our booking flow feels significantly smoother now. Conversions definitely improved.',
  },
  {
    name: 'Jake Holloway',
    niche: 'SaaS Startup',
    img: 'https://i.pravatar.cc/150?img=21',
    body: 'The site performance is excellent. Fast, responsive, and smooth across devices.',
  },
  {
    name: 'Emily Dawson',
    niche: 'Content Agency',
    img: 'https://i.pravatar.cc/150?img=43',
    body: 'SugarByte brought a level of polish and clarity that our old website completely lacked.',
  },
  {
    name: 'Leo Martinez',
    niche: 'Architecture Firm',
    img: 'https://i.pravatar.cc/150?img=22',
    body: 'The redesign made our brand feel more premium and much more trustworthy.',
  },
  {
    name: 'Ananya Kapoor',
    niche: 'Creator Brand',
    img: 'https://i.pravatar.cc/150?img=42',
    body: 'We finally have a website that properly represents the quality of our business.',
  },
  {
    name: 'Chris Nolan',
    niche: 'Growth Agency',
    img: 'https://i.pravatar.cc/150?img=23',
    body: 'Very smooth process from strategy to launch. Communication was excellent throughout.',
  },
  {
    name: 'Hannah Moore',
    niche: 'Digital Product Brand',
    img: 'https://i.pravatar.cc/150?img=40',
    body: 'The user flow improvements alone made a noticeable impact on engagement.',
  },
  {
    name: 'Dev Malhotra',
    niche: 'Tech Creator',
    img: 'https://i.pravatar.cc/150?img=24',
    body: 'The website feels modern, fast, and genuinely enjoyable to use.',
  },
  {
    name: 'Claire Thompson',
    niche: 'Real Estate Developer',
    img: 'https://i.pravatar.cc/150?img=39',
    body: 'The visual direction immediately helped us stand out from competitors in our space.',
  },
  {
    name: 'Aaron White',
    niche: 'Consulting Firm',
    img: 'https://i.pravatar.cc/150?img=25',
    body: 'One of the few studios that actually understands conversion-focused design properly.',
  },
  {
    name: 'Neha Verma',
    niche: 'Wellness Brand',
    img: 'https://i.pravatar.cc/150?img=38',
    body: 'The updated branding and UX noticeably improved how clients perceive our company.',
  },
  {
    name: 'Jordan Hayes',
    niche: 'Creative Studio',
    img: 'https://i.pravatar.cc/150?img=26',
    body: 'Clean execution, strong design taste, and excellent performance optimization.',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Card = ({
  img,
  name,
  niche,
  body,
}: {
  img: string;
  name: string;
  niche: string;
  body: string;
}) => {
  return (
    <figure className='relative h-48 w-96 overflow-hidden rounded-xl bg-neutral-200 p-6'>
      <div className='flex flex-row items-center gap-3.5'>
        <img className='rounded-full' width='48' height='48' alt='' src={img} />

        <figcaption className='text-xl font-medium text-neutral-800'>
          {name}
        </figcaption>
      </div>
      <blockquote className='mt-2 line-clamp-3 text-lg'>{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
      <Marquee className='[--duration:30s]'>
        {firstRow.map(review => (
          <Card key={review.niche} {...review} />
        ))}
      </Marquee>

      <Marquee reverse className='[--duration:30s]'>
        {secondRow.map(review => (
          <Card key={review.niche} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white'></div>
    </div>
  );
};

export default Testimonials;
