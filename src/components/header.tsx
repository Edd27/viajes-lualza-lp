import useSiteData from '@/store/site';
import { ModeToggle } from './mode-toggle';
import { ISite } from '@/type';
import { Link } from 'react-router-dom';

export default function Header() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  return (
    <header>
      <nav className='w-full shadow mx-auto flex items-center justify-between fixed z-50 py-3 px-3 lg:px-24 bg-card dark:bg-primary'>
        <Link to='/'>
          <img
            src={site?.logo}
            alt={`Logo ${site?.title}`}
            className='w-10 h-10'
          />
        </Link>
        <div className='w-full flex items-center justify-center gap-x-5 font-bold text-primary dark:text-inherit'>
          <Link to='/'>
            <span>Inicio</span>
          </Link>
          <Link to='/viajes'>
            <span>Viajes</span>
          </Link>
        </div>
        <div className='flex items-center gap-x-4'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
