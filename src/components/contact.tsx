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

  const contactData = contactSection?.content;
  const email = contactData?.email;
  const phone = contactData?.phone;
  const address = contactData?.address;

  console.log(email, phone, address);
  return (
    <Section verticalAlignment='center'>
      <h2 className='mb-10 text-2xl lg:text-3xl px-36 text-center'>
        {contactSection?.title ?? 'Acerca de nosotros'}
      </h2>
      <div className='flex w-full text-lg lg:text-2xl text-center items-center '>
        <div className='w-1/2 flex flex-col items-center justify-center '>
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
        <div className='w-1/2 border rounded-md overflow-hidden h-[600px] flex flex-col'>
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
