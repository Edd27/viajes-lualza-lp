import useCompanyData from '@/store/company';
import { ICompany } from '@/type';

export default function Footer() {
  const { company } = useCompanyData() as {
    company: ICompany;
  };

  console.log(company);

  return (
    <footer className='bg-primary text-white flex items-center justify-center flex-col py-20 px-3 lg:px-24'>
      <h1>Footer</h1>
    </footer>
  );
}
