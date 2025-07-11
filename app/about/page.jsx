import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutContent from '@/components/about-content';
import AnalyticsTracker from '@/components/analytics-tracker';

export function generateMetadata() {
  return {
    title: 'About',
    description: 'Learn about Noureddine Azinag, a passionate web developer from Morocco. Discover my journey, skills, and the technologies I use to build amazing websites.',
    openGraph: {
      title: 'About - Noureddine Azinag',
      description: 'Learn about Noureddine Azinag, a passionate web developer from Morocco. Discover my journey, skills, and the technologies I use to build amazing websites.',
    },
  };
}

export default function About() {
  return (
    <>
      <AnalyticsTracker />
      <Header />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}