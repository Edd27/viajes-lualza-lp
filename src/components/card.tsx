import WhatsAppIcon from './icons/Whatsapp';
import { Link } from 'react-router-dom';
import useCompanyData from '@/store/company';
import useSiteData from '@/store/site';
import { ICompany, ISite, ITravel } from '@/type';
import { useParams } from 'react-router-dom';

interface ICard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function Card({ title, description, image, href }: ICard) {
  const { id } = useParams();

  const { site } = useSiteData() as {
    site: ISite;
  };

  const { company } = useCompanyData() as {
    company: ICompany;
  };

  const travels = (site?.database?.travels as ITravel[]) ?? [];

  const travel = travels.find((t) => t.id === id);

  const whatsAppMessage = encodeURIComponent(
    `Hola, me gustaría saber más sobre ${travel?.title}`
  );

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
              (p) => p.type === 'whatsapp'
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
