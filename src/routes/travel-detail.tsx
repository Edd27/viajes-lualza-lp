import WhatsAppIcon from '@/components/icons/Whatsapp';
import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useAppStore from '@/store/app-store';
import { ICompany } from '@/type';
import { useParams } from 'react-router-dom';

export default function TravelDetail() {
  const { id } = useParams();

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const travel = company.travels.find((t) => t.id === id);

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

  const whatsAppMessage = encodeURIComponent(
    `Hola, me gustaría saber más sobre ${travel.name}`
  );

  return (
    <Layout>
      <Section
        className='text-center'
        verticalAlignment='center'
        carouselImages={travel.images}
        carouselDelay={5000}
      >
        <div className='w-full p-6 rounded-xl backdrop-blur-lg text-white backdrop-brightness-75'>
          <h2 className='md:text-7xl mb-3 font-semibold '>{travel.name}</h2>
          {travel.initialDate || travel.endDate ? (
            <h3 className='md:text-3xl'>
              {travel.initialDate} {`- ${travel.endDate}`}
            </h3>
          ) : null}
        </div>
      </Section>
      <Section>
        <article className='max-w-2xl'>
          <p className='text-pretty mb-10'>{travel.description}</p>
          <a
            className='bg-green-600 hover:bg-green-700 rounded-lg p-2 text-zinc-100 font-semibold flex flex-row gap-2 items-center justify-center'
            target='_blank'
            href={`https://api.whatsapp.com/send?phone=${company?.phones?.find(
              (p) => p.type === 'WHATSAPP'
            )}&text=${whatsAppMessage}`}
          >
            <WhatsAppIcon />
            Solicitar informacion
          </a>
        </article>
      </Section>
    </Layout>
  );
}
