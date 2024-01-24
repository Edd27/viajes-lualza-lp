import useSiteData from '@/store/site';
import Section from './section';
import { ISite, ITravel } from '@/type';
import Card from './card';
import { Link } from 'react-router-dom';

export default function LastTravels() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  const travels = (site?.database?.travels as ITravel[]) ?? [];
  const lastTravels: ITravel[] = travels.slice(-3);

  return (
    <Section verticalAlignment='start'>
      <h2 className='mb-20 text-2xl lg:text-3xl lg:px-36 text-center'>
        Tres de nuestros últimos viajes
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {(lastTravels as ITravel[]).map((travel: ITravel, index) => (
          <Link
            key={travel.id || index}
            to={`/viajes/${travel.id}`}
          >
            <Card
              title={travel.title}
              description={travel.description}
              image={travel.images[0]?.url}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
