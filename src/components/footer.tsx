import useAppStore from '@/store/app-store';
import { ICompany } from '@/type';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_ICONS: {
  [key: string]: JSX.Element;
} = {
  facebook: <Facebook className='size-4' />,
  twitter: <Twitter className='size-4' />,
  instagram: <Instagram className='size-4' />,
};

export default function Footer() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  return (
    <footer className='bg-primary text-white'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='grid md:grid-cols-2 md:justify-between'>
          <div className='mb-6 md:mb-0 flex flex-col justify-between gap-5'>
            <Link
              to='/'
              className='flex items-center'
            >
              <img
                src={company.logo}
                alt={`Logo ${company.name}`}
                className='h-8 me-3'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                {company?.name}
              </span>
            </Link>
            <p className='max-w-xs text-pretty'>{company.description}</p>
          </div>
          <div className='grid md:grid-cols-2 gap-3 md:gap-6'>
            <div>
              <h2 className='mb-3 lg:mb-6 text-sm font-bold uppercase'>
                Contacto
              </h2>
              <ul>
                {company?.phones?.map((phone) => (
                  <li
                    className='mb-4'
                    key={phone.id}
                  >
                    <a
                      href={`tel:${phone.phone}`}
                      className='hover:underline'
                    >
                      {phone.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='mb-3 lg:mb-6 text-sm font-bold uppercase'>
                Encuentranos
              </h2>
              <ul>
                {company?.addresses?.map((address) => (
                  <li
                    key={address.id}
                    className='max-w-60'
                  >
                    <a
                      href={`https://www.google.com/maps?q=${address.street}+${address.number}+${address.suburb}+${address.zipCode}+${address.city}+${address.state}`}
                      target='_blank'
                      rel='noreferrer noopener'
                      key={address.id}
                      className='underline md:no-underline hover:underline text-pretty'
                    >
                      <span>
                        {address.street} {address.number}, {address.suburb},{' '}
                        {address.zipCode} {address.city}, {address.state}.
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 sm:mx-auto lg:my-8 border-white/40' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm sm:text-center'>
            © {new Date().getFullYear()}{' '}
            <Link
              to='/'
              className='hover:underline'
            >
              {company?.name}
            </Link>
            . Todos los derechos reservados.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0 gap-x-2'>
            {company?.socials?.map((social) => (
              <a
                target='_blank'
                rel='noreferrer noopener'
                href={social.url}
                key={social.id}
              >
                {SOCIAL_ICONS[social.code.toLowerCase()]}
                <span className='sr-only'>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
