import Card from '@/components/card';
import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useSiteData from '@/store/site';
import { ISite, ITravel } from '@/type';

export default function Travels() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  const travels = site?.database['travels'] ?? [];

  return (
    <Layout>
      <Section
        className='pt-28'
        verticalAlignment='start'
      >
        <h1 className='font-bold text-3xl mb-20'>Todas nuestras excursiones</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {(travels as ITravel[]).map((travel: ITravel, index) => (
            <Card
              key={travel.id || index}
              title={travel.title}
              description={travel.description}
              image={travel.image}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
