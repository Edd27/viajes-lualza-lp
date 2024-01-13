import Section from '@/components/section';
import Layout from '@/layouts/layout';
import { useParams } from 'react-router-dom';

export default function TravelDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <Section
        className='pt-28'
        verticalAlignment='start'
      >
        <h1 className='font-bold text-3xl mb-20'>Viaje {id}</h1>
      </Section>
    </Layout>
  );
}
