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

  return (
    <Section verticalAlignment='center'>
      <h2 className='mb-10 text-2xl lg:text-3xl'>
        {contactSection?.title ?? 'Acerca de nosotros'}
      </h2>
      <div className='w-full border rounded-md overflow-hidden h-[600px] flex flex-col'>
        <div
          dangerouslySetInnerHTML={{
            __html: `${iframeMap}`,
          }}
          className='h-full w-full'
        />
      </div>
    </Section>
  );
}
