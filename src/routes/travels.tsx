import Card from '@/components/travel-card';
import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useAppStore from '@/store/app-store';
import { ICompany } from '@/type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Travels() {
  const [searchTerm, setSearchTerm] = useState('');

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const travels = company.travels;

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
          {travels
            ?.filter((travel) =>
              travel.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            ?.map((travel, index) => (
              <Link
                key={travel.id || index}
                to={`/viajes/${travel.id}`}
              >
                <Card
                  travel={travel}
                  href={`/viajes/${travel.id}`}
                />
              </Link>
            ))}
        </div>
      </Section>
    </Layout>
  );
}
