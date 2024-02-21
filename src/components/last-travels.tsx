import useAppStore from '@/store/app-store';
import Section from './section';
import TravelCard from './travel-card';
import { ICompany } from '@/type';

export default function LastTravels() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const lastTravels = company?.travels?.slice(-3);

  return (
    <Section screenHeight={false}>
      <h2 className='font-bold text-3xl mb-20'>Nuestros ultimos viajes</h2>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
        {lastTravels.map((travel) => (
          <TravelCard
            travel={travel}
            key={travel.id}
            href={`/viajes/${travel.id}`}
          />
        ))}
      </div>
    </Section>
  );
}
