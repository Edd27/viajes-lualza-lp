import useAppStore from '@/store/app-store';
import Section from './section';

import Card from './travel-card';
import { ICompany } from '@/type';

export default function LastTravels() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const lastTravels = company?.travels?.slice(-3);

  return (
    <Section verticalAlignment='start'>
      <h2 className='mb-20 text-2xl lg:text-3xl lg:px-36 text-center'>
        Nuestros últimos viajes
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {lastTravels.map((travel) => (
          <Card
            travel={travel}
            key={travel.id}
            href={`/viajes/${travel.id}`}
          />
        ))}
      </div>
    </Section>
  );
}
