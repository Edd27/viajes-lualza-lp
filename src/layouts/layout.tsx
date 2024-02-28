import FloatAction from "@/components/float-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Loading from "@/components/loading";
import ErrorPage from "@/error-page";
import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import {
  useEffect, useState,
} from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    company, setCompany,
  } = useAppStore() as {
    company: ICompany;
    setCompany: (company: ICompany) => void;
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/companies/${
          import.meta.env.VITE_COMPANY_ID
        }/public-profile`);

        const { data } = await response.json();

        setCompany(data);
      } catch (e) {
        setError(true);
      }

      setIsLoading(false);
    };

    fetchDataFromApi();
  }, [setCompany]);

  useEffect(() => {
    document.title = company.name ?? "Web site";

    let linkFavicon = document.querySelector("link[rel~='icon']");

    if (!linkFavicon) {
      linkFavicon = document.createElement("link");
      const link = document.createElement("link") as HTMLLinkElement;
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    (linkFavicon as HTMLLinkElement).href = company?.logo ?? "/vite.svg";
  }, [company]);

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!company) {
    return <ErrorPage />;
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
