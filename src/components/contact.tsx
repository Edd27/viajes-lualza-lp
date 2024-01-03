import useSiteData from '@/store/site';
import Section from './section';
import { ISection, ISite } from '@/type';

export default function Contact() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  const contactSection = site?.sections?.find(
    (section: ISection) => section?.name === 'contact'
  ) as ISection | undefined;

  const iframeMap =
    typeof contactSection?.content !== 'string'
      ? contactSection?.content['map']?.replaceAll("\\'", '"')
      : '';

  const email: string | undefined = contactSection?.content?.email;
  const phone: string | undefined = contactSection?.content?.phone;
  const address: string | undefined = contactSection?.content?.address;

  console.log(email); // Puede ser una cadena o undefined
  console.log(phone); // Puede ser una cadena o undefined
  console.log(address);
  return (
    <Section verticalAlignment='center'>
      <h2 className='mb-10 text-2xl lg:text-3xl lg:px-36 text-center'>
        {contactSection?.title ?? 'Acerca de nosotros'}
      </h2>
      <div className='flex flex-col lg:flex-row w-full text-lg lg:text-xl text-center items-center gap-4'>
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
          <h2 className='py-2 '>
            {address?.street} #{address?.number} {address?.city},{' '}
            {address?.state}
          </h2>
          <a
            className='py-2'
            href={`tel:${phone}`}
          >
            {phone}
          </a>
          <a
            className='py-2'
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
        <div className='w-full lg:w-1/2 border rounded-md overflow-hidden h-[400px] lg:h-[600px] flex flex-col'>
          <div
            dangerouslySetInnerHTML={{
              __html: `${iframeMap}`,
            }}
            className='h-full w-full'
          />
        </div>
      </div>
    </Section>
  );
}
