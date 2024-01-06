import { useRef, type ReactNode } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { IImage } from '@/type';

type SectionProps = {
  carouselImages?: IImage[];
  carouselDelay?: number;
  background?: string;
  verticalAlignment?: 'start' | 'center' | 'end' | 'between';
  horizontalAlignment?: 'start' | 'center' | 'end';
  screenHeight?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function Section({
  carouselImages = [],
  carouselDelay = 2000,
  background = '',
  verticalAlignment = 'between',
  horizontalAlignment = 'center',
  screenHeight = true,
  className = '',
  children,
}: SectionProps) {
  const plugin = useRef(
    Autoplay({ delay: carouselDelay, stopOnInteraction: false })
  );

  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center w-full',
        {
          'min-h-screen': screenHeight === true,
          'h-auto': screenHeight === false,
          [`bg-[url('${background}')] bg-center bg-no-repeat bg-cover`]:
            background,
          relative: carouselImages.length > 0 || background,
          [`items-${horizontalAlignment}`]: horizontalAlignment,
          [`justify-${verticalAlignment}`]: verticalAlignment,
          'py-16 px-3 lg:px-24': !carouselImages.length && !background,
        },
        className
      )}
    >
      {carouselImages.length > 0 ? (
        <>
          <div className='absolute z-40 py-16 px-3 lg:px-24'>{children}</div>
          <Carousel
            plugins={[plugin.current]}
            className='w-full'
          >
            <CarouselContent className='min-h-screen max-h-screen'>
              {carouselImages.map((img) => (
                <CarouselItem
                  key={img.id}
                  className='p-0 border-none brightness-50'
                >
                  <img
                    className='w-full h-full object-cover'
                    src={img.url}
                    alt={`Hero image ${img.id}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </>
      ) : (
        children
      )}
    </section>
  );
}
