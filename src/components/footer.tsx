import useCompanyData from '@/store/company';
import useSiteData from '@/store/site';
import { ICompany, ISite } from '@/type';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SOCIAL_ICONS: {
  [key: string]: JSX.Element;
} = {
  facebook: <Facebook className='size-4' />,
  twitter: <Twitter className='size-4' />,
  instagram: <Instagram className='size-4' />,
};

export default function Footer() {
  const { company } = useCompanyData() as {
    company: ICompany;
  };

  const { site } = useSiteData() as {
    site: ISite;
  };

  return (
    <footer className='bg-primary text-white'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0 flex flex-col justify-between gap-5'>
            <Link
              to='/'
              className='flex items-center'
            >
              <img
                src={site?.logo}
                alt={`Logo ${site?.title}`}
                className='h-8 me-3'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                {company?.name}
              </span>
            </Link>
            <p className='max-w-xs text-pretty'>{company?.description}</p>
          </div>
          <div className='flex gap-8 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase'>Contacto</h2>
              <ul className='font-medium'>
                {company?.phones?.map((phone) => (
                  <li
                    className='mb-4'
                    key={phone.id}
                  >
                    <a
                      href={`tel:${phone.number}`}
                      className='hover:underline'
                    >
                      {phone.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase'>
                Encuentranos
              </h2>
              <ul className='font-medium'>
                {company?.addresses?.map((address) => (
                  <li
                    key={address.id}
                    className='max-w-60'
                  >
                    <a
                      href={`https://www.google.com/maps?q=${address.street}+${address.number}+${address.suburb}+${address.zip}+${address.city}+${address.state}`}
                      target='_blank'
                      rel='noreferrer noopener'
                      key={address.id}
                      className='underline md:no-underline hover:underline text-pretty'
                    >
                      <span>
                        {address.street} {address.number}, {address.suburb},{' '}
                        {address.zip} {address.city}, {address.state}.
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 sm:mx-auto lg:my-8' />
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
                {SOCIAL_ICONS[social.name.toLowerCase()]}
                <span className='sr-only'>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <footer className='bg-primary text-white flex flex-col items-center justify-center py-20 px-3 lg:px-24'>
      <div className='w-full flex md:justify-center md:text-center'>
        <Link
          to='/'
          className='font-bold text-3xl flex items-center gap-x-2'
        >
          <img
            src={site?.logo}
            alt={`Logo ${site?.title}`}
            className='size-10'
          />
          <span>{company?.name}</span>
        </Link>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-20'>
        <div className='w-full md:w-1/3'>
          <h2 className='font-bold text-lg mb-2'>Acerca de nosotros</h2>
          <p className='text-pretty'>{company?.description}</p>
        </div>
        <div className='w-full md:w-1/3'>
          <h2 className='font-bold text-lg mb-2'>Contacto</h2>
          <section>
            {company?.phones?.map((phone) => (
              <a
                href={`tel:${phone.number}`}
                key={phone.id}
                className='underline md:no-underline hover:underline'
              >
                <Phone className='size-6' />
                <span>{phone.number}</span>
              </a>
            ))}
          </section>
          <section>
            {company?.emails?.map((email) => (
              <a
                href={`mailto:${email.value}`}
                key={email.id}
                className='underline md:no-underline hover:underline'
              >
                <Mail className='size-6' />
                <span>{email.value}</span>
              </a>
            ))}
          </section>
          <section>
            {company?.addresses?.map((address) => (
              <a
                href={`https://www.google.com/maps?q=${address.street}+${address.number}+${address.suburb}+${address.zip}+${address.city}+${address.state}`}
                target='_blank'
                rel='noreferrer noopener'
                key={address.id}
                className='underline md:no-underline hover:underline'
              >
                <MapPin className='size-6' />
                <span className='w-full'>
                  {address.street} {address.number}, {address.suburb},{' '}
                  {address.zip} {address.city}, {address.state}.
                </span>
              </a>
            ))}
          </section>
        </div>
        <div className='w-full md:w-1/3'>
          <h2 className='font-bold text-lg mb-2'>Redes sociales</h2>
          <section className='w-full flex items-center'>
            {company?.socials?.map((social) => (
              <a
                className='size-10'
                target='_blank'
                rel='noreferrer noopener'
                href={social.url}
                key={social.id}
              >
                {SOCIAL_ICONS[social.name.toLowerCase()]}
              </a>
            ))}
          </section>
        </div>
      </div>
    </footer>
  );
}
