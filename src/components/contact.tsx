import useAppStore from '@/store/app-store';
import Section from './section';
import { ICompany } from '@/type';

export default function Contact() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  return (
    <Section verticalAlignment='center'>
      <h2 className='mb-10 text-2xl lg:text-3xl lg:px-36 text-center'>
        Acerca de nosotros
      </h2>
      {company?.addresses?.map(
        ({ street, number, suburb, zipCode, city, state, mapFrame }) => (
          <div className='flex flex-col lg:flex-row w-full text-lg lg:text-xl text-center items-center gap-4'>
            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
              <h2 className='py-2 '>
                {street} {number}, {suburb}, {zipCode}, {city}, {state}.
              </h2>
            </div>
            {mapFrame ? (
              <div className='w-full lg:w-1/2 border rounded-md overflow-hidden h-[400px] lg:h-[600px] flex flex-col'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${mapFrame.replaceAll("\\'", '"')}`,
                  }}
                  className='h-full w-full'
                />
              </div>
            ) : null}
          </div>
        )
      )}
    </Section>
  );
}
