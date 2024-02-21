import { ICompany, ITravel } from '@/type';
import WhatsAppIcon from './icons/Whatsapp';
import { Link } from 'react-router-dom';
import useAppStore from '@/store/app-store';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface ITravelCardProps {
  travel: ITravel;
  href: string;
}

export default function Card({ travel, href }: ITravelCardProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const whatsAppMessage = encodeURIComponent(
    `Hola, me gustaría saber más sobre ${travel?.name}`
  );

  return (
    <div className='lg:max-w-sm bg-card dark:bg-secondary border hover:dark:bg-gray-900 hover:bg-zinc-200 rounded-lg shadow bg-zinc-100 border-zinc-300 dark:border-zinc-600 '>
      <Carousel
        plugins={[plugin.current]}
        className='w-full rounded-t-lg overflow-hidden'
      >
        <CarouselContent className='min-h-screen max-h-screen'>
          {travel.images.map((img) => (
            <CarouselItem
              key={img.id}
              className='p-0 border-none brightness-50'
            >
              <img
                className='w-full h-full object-cover'
                src={img.url}
                alt={`Imagen ${img.id} de viaje ${travel.name}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary'>
          {travel.name}
        </h5>
        {travel.description ? (
          <p className='mb-3 font-normal text-pretty'>{travel.description}</p>
        ) : null}
        <div className='flex gap-2'>
          <Link
            to={href}
            className='flex w-full border bg-primary rounded-lg p-2 text-zinc-100 font-semibold items-center justify-center'
          >
            Mas informacion
          </Link>
          <a
            className=' bg-green-600 hover:bg-green-700 rounded-lg p-2 text-zinc-100 font-semibold  flex items-center justify-center w-auto '
            href={`https://api.whatsapp.com/send?phone=${company?.phones?.find(
              (p) => p.type === 'WHATSAPP'
            )}&text=${whatsAppMessage}`}
            target='_blank'
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
