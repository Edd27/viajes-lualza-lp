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
      <nav className='fixed z-50 flex items-center justify-between w-full px-3 py-3 mx-auto shadow lg:px-24 bg-card dark:bg-primary'>
        <Link to='/'>
          <img
            src={site?.logo}
            alt={`Logo ${site?.title}`}
            className='w-10 h-10'
          />
        </Link>
        <div className='flex items-center justify-center w-full font-bold gap-x-5 text-primary dark:text-inherit'>
          <Link to='/'>
            <span>Inicio</span>
          </Link>
          <Link to='/viajes'>
            <span>Viajes</span>
          </Link>
          <Link to='/galeria'>
            <span>Galería</span>
          </Link>
        </div>
        <div className='flex items-center gap-x-4'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
