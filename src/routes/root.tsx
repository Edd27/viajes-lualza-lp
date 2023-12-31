import Hero from '../components/hero';
import About from '../components/about';
import Contact from '../components/contact';
import Layout from '@/layouts/layout';

export default function Root() {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}
