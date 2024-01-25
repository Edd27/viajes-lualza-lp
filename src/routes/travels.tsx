import Card from '@/components/card';
import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useSiteData from '@/store/site';
import { ISite, ITravel } from '@/type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Travels() {
  const [searchTerm, setSearchTerm] = useState('');
  const { site } = useSiteData() as {
    site: ISite;
  };

  const travels = site?.database?.travels ?? [];

  return (
    <Layout>
      <Section
        className='pt-28'
        verticalAlignment='start'
      >
        <h1 className='font-bold text-3xl mb-20'>Todos nuestros viajes</h1>
        <input
          type='text'
          placeholder='Buscar viajes...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-2 border border-black rounded w-full md:w-[900px] dark:text-black mb-20'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {(travels as ITravel[])
            ?.filter((travel: ITravel) =>
              travel.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            ?.map((travel: ITravel, index) => (
              <Link
                key={travel.id || index}
                to={`/viajes/${travel.id}`}
              >
                <Card
                  title={travel.title}
                  description={travel.description}
                  image={travel.images[0]?.url}
                  href={`/viajes/${travel.id}`}
                />
              </Link>
            ))}
        </div>
      </Section>
    </Layout>
  );
}
