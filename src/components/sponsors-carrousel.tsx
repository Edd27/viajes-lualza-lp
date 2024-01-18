import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export default function SponsorsCarrousel() {
  return (
    <section className='text-center '>
      <h2 className='mb-10 text-2xl font-bold lg:text-3xl'>Colaboradores</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full '
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <div className='p-1 '>
                <div className='rounded-lg bg-zinc-100'>
                  <div className='flex items-center justify-center  p-6 aspect-square sm:max-h-[200px] md:max-h-[300px] lg:max-h-[400px] '>
                    <span className='text-3xl font-semibold text-red-500'>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
