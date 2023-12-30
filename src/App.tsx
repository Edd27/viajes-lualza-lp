import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";
import useSiteData from "./store/site";
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import { ISite } from "./type";
import Loading from "./components/loading";

function App() {
  const { site, setSite } = useSiteData() as {
    site: ISite;
    setSite: (site: ISite) => void;
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSiteData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/site`);
        const { data } = await response.json();
        setSite(data);
      } catch (e) {
        console.error(e);
      }

      setIsLoading(false);
    };

    fetchSiteData();
  }, [setSite]);

  useEffect(() => {
    document.title = site?.title ?? "Website";

    let linkFavicon = document.querySelector("link[rel~='icon']");

    if (!linkFavicon) {
      linkFavicon = document.createElement("link");
      const link = document.createElement("link") as HTMLLinkElement;
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    (linkFavicon as HTMLLinkElement).href = site?.favicon ?? "/vite.svg";
  }, [site]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <section>
        <Header />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default App;
