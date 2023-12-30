import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";
import useSiteData from "./store/site";
import { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  const { site } = useSiteData();

  console.log(site);

  useEffect(() => {
    document.title = site.title ?? "Website";

    let linkFavicon = document.querySelector("link[rel~='icon']");

    if (!linkFavicon) {
      linkFavicon = document.createElement("link");
      const link = document.createElement("link") as HTMLLinkElement;
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    (linkFavicon as HTMLLinkElement).href = site.favicon ?? "/vite.svg";
  }, [site]);

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
