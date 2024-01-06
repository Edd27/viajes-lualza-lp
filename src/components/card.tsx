interface ICard {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: ICard) {
  return (
    <div className='lg:max-w-sm bg-card dark:bg-secondary border border-card rounded-lg shadow'>
      <img
        className='rounded-t-lg'
        src={image}
        alt={`Imagen de ${title}`}
      />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-pretty'>{description}</p>
      </div>
    </div>
  );
}
