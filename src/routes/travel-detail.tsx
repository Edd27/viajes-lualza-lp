
import WhatsAppIcon from '@/components/icons/Whatsapp';
import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useSiteData from '@/store/site';
import { ISite, ITravel } from '@/type';
import { useParams } from 'react-router-dom';

export default function TravelDetail() {
  const { id } = useParams();

  const { site } = useSiteData() as {
    site: ISite;
  };

  const travels = (site?.database?.travels as ITravel[]) ?? [];

  const travel = travels.find((t) => t.id === id);
  if (!travel) {
    return (
      <Layout>
        <Section
          className='pt-28'
          verticalAlignment='start'
        >
          <h1 className='font-bold text-3xl mb-20'>Viaje no encontrado</h1>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section
        className='text-center'
        verticalAlignment='center'
        carouselImages={[{ id: '1', url: travel.image }]}
        carouselDelay={5000}
      >
        <div className='w-full p-6 rounded-xl backdrop-blur-lg text-white backdrop-brightness-75'>
          <h2 className='md:text-7xl mb-3 font-semibold '>{travel.title}</h2>
          <h3 className='md:text-3xl'>{travel.date}</h3>
        </div>
      </Section>
      <Section>
        <article className='max-w-2xl'>
          <p className='text-pretty mb-10'>{travel.description}</p>
          <button className="bg-green-600 hover:bg-green-700 rounded-lg p-2 text-zinc-100 font-semibold flex flex-row gap-2 items-center justify-center">
          <WhatsAppIcon />
          <label>
            Solicitar información
          </label>
          
          </button>
        </article>
      </Section>
    </Layout>
  );
}
