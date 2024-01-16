import Layout from '@/layouts/layout';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Gallery() {
  //TODO: Implementar con API
  const images: string[] = [
    'https://picsum.photos/200/300?image=1050',
    'https://picsum.photos/200/300?image=1051',
    'https://picsum.photos/200/300?image=1052',
    'https://picsum.photos/200/300?image=1053',
    'https://picsum.photos/200/300?image=1054',
    'https://picsum.photos/200/300?image=1055',
  ];
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
                key={image}
                src={image}
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
