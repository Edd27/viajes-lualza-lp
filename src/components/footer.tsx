import useCompanyData from '@/store/company';
import { ICompany } from '@/type';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const { company } = useCompanyData() as {
    company: ICompany;
  };

  const firstEmail: string | undefined = company?.emails?.[0]?.value;
  const firstPhoneNumber: string | undefined = company?.phones?.[0]?.number;
  const socialFA: string | undefined = company?.socials?.[0]?.url;
  const socialTW: string | undefined = company?.socials?.[1]?.url;
  const socialIG: string | undefined = company?.socials?.[2]?.url;

  return (
    <footer className='bg-primary text-white flex items-center justify-center flex-col py-20 px-3 lg:px-24'>
      <div className='h-full w-full flex flex-col'>
        <div className=' lg:h-[130px] w-full flex items-center justify-center'>
          <img
            src='Logo'
            alt='Logo'
          />
          {company.name}
        </div>
        <div className='w-full lg:h-[130px] flex flex-col lg:flex-row gap-4'>
          <div className=' h-full lg:w-1/3'>
            Acá va la descripción de la empresa
          </div>
          <div className='h-full lg:w-1/3 flex flex-col gap-2'>
            Contacto
            <h2>
              Dirección: {company?.addresses?.[0].street ?? ''}
              {'  #'}
              {company?.addresses?.[0].number ?? ''}
              {' ,'}
              {company?.addresses?.[0].city ?? ''}
              {' ,'}
              {company?.addresses?.[0].state ?? ''}
            </h2>
            <a href={`tel:${firstPhoneNumber}`}>Tel: {firstPhoneNumber}</a>
            <a href={`mailto:${firstEmail}`}>Correo: {firstEmail}</a>
          </div>
          <div className='h-full lg:w-1/3 flex flex-col gap-4 '>
            Redes sociales
            <div className='flex gap-4 items-center justify-center lg:justify-start'>
              <a
                className='h-8 w-8'
                target='_blank'
                href={socialFA}
              >
                <FaFacebook size={30} />
              </a>
              <a
                className='h-8 w-8'
                target='_blank'
                href={socialTW}
              >
                <FaTwitter size={30} />
              </a>
              <a
                className='h-8 w-8'
                target='_blank'
                href={socialIG}
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
