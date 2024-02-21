import Section from '@/components/section';
import Layout from '@/layouts/layout';
import useAppStore from '@/store/app-store';
import { ICompany, ITravelImage } from '@/type';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Gallery() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const images = company.travels.reduce(
    (acc, travel) => [...acc, ...travel.images],
    [] as ITravelImage[]
  );

  if (images.length === 0)
    return (
      <Layout>
        <Section
          className='pt-28'
          verticalAlignment='center'
        >
          <h1 className='font-bold text-3xl mb-20'>
            Aun no tenemos imagenes en nuestra galeria.
          </h1>
        </Section>
      </Layout>
    );

  return (
    <Layout>
      <Section>
        <h1 className='font-bold text-3xl mb-20'>Nuestra galería.</h1>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          style={{ width: '100%' }}
        >
          <Masonry gutter='0.5rem'>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={`Recuerdo de ${image.createdAt}`}
                className='object-cover w-full h-full rounded-2xl'
                loading='lazy'
                decoding='async'
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
    </Layout>
  );
}
