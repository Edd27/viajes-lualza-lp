import FloatAction from '@/components/float-action';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Loading from '@/components/loading';
import useCompanyData from '@/store/company';
import useSiteData from '@/store/site';
import { ICompany, ISite } from '@/type';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { site, setSite } = useSiteData() as {
    site: ISite;
    setSite: (site: ISite) => void;
  };
  const { setCompany } = useCompanyData() as {
    setCompany: (company: ICompany) => void;
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchSiteData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/site`);
        const { data } = await response.json();
        setSite(data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/company`);
        const { data } = await response.json();
        setCompany(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchSiteData();
    fetchCompanyData();
    setIsLoading(false);
  }, [setSite, setCompany]);

  useEffect(() => {
    document.title = site?.title ?? 'Website';

    let linkFavicon = document.querySelector("link[rel~='icon']");

    if (!linkFavicon) {
      linkFavicon = document.createElement('link');
      const link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    (linkFavicon as HTMLLinkElement).href = site?.favicon ?? '/vite.svg';
  }, [site]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatAction />
    </section>
  );
}
