import Hero from '@/components/hero';
import Services from '@/components/services';
import FeaturedProjects from '@/components/featured-projects';
import Footer from '@/components/footer';
import Header from '@/components/header';
import AnalyticsTracker from '@/components/analytics-tracker';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export function generateMetadata() {
  return {
    title: 'Home',
    description: 'Hi, I\'m Noureddine Azinag — I build fast, modern websites. Full-stack web developer from Morocco serving clients worldwide.',
    openGraph: {
      title: 'Noureddine Azinag - Full Stack Web Developer',
      description: 'Hi, I\'m Noureddine Azinag — I build fast, modern websites. Full-stack web developer from Morocco serving clients worldwide.',
    },
  };
}

export default function Home() {
  return (
    <>
      <AnalyticsTracker />
      <Header />
      <Hero />
      <Services />
      <FeaturedProjects />
      <Footer />
    </>
  );
}