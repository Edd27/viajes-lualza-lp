import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Layout from "@/layouts/layout";
import LastTravels from "@/components/last-travels";

export default function Root() {
  return (
    <Layout>
      <Hero />
      <About />
      <LastTravels />
      <Contact />
    </Layout>
  );
}
