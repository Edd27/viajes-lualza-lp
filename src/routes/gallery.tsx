import Layout from '@/layouts/layout';
import useSiteData from '@/store/site';
import { ISite } from '@/type';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { IGallery } from '../type';

export default function Gallery() {
  const { site } = useSiteData() as {
    site: ISite;
  };
  const images: IGallery[] = (site?.database?.gallery as IGallery[]) ?? [];

  console.log({ images });
  return (
    <Layout>
      <div className='items-center justify-center w-full px-3 py-16 lg:px-24'>
        <h2 className='mb-20 text-2xl text-center lg:text-3xl lg:px-36'>
          Nuestros recuerdos
        </h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          style={{ width: '100%' }}
        >
          <Masonry gutter='0.5rem'>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt='image'
                className='object-cover w-full h-full rounded-2xl'
                loading='lazy'
                decoding='async'
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  );
}
