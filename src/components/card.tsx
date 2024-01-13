import WhatsAppIcon from "./icons/Whatsapp";


interface ICard {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: ICard) {
  return (
    <div className='lg:max-w-sm bg-card dark:bg-secondary border hover:dark:bg-gray-900 hover:bg-zinc-200 rounded-lg shadow bg-zinc-100 border-zinc-300 dark:border-zinc-600 '>
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
        <button className="bg-green-600 hover:bg-green-700 rounded-lg p-2 text-zinc-100 font-semibold flex flex-row gap-2 w-full items-center justify-center">
          <WhatsAppIcon />
          <label>
            Solicitar información
          </label>
          
          </button>
      </div>
    </div>
  );
}
