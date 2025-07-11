import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import AnalyticsTracker from '@/components/analytics-tracker';

export function generateMetadata() {
  return {
    title: 'Contact',
    description: 'Get in touch with Noureddine Azinag for your web development needs. Ready to bring your ideas to life with modern, fast websites.',
    openGraph: {
      title: 'Contact - Noureddine Azinag',
      description: 'Get in touch with Noureddine Azinag for your web development needs. Ready to bring your ideas to life with modern, fast websites.',
    },
  };
}

export default function Contact() {
  return (
    <>
      <AnalyticsTracker />
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <ContactTitle />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              <ContactDescription />
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactTitle() {
  return (
    <>
      Let's <span className="text-primary">Connect</span>
    </>
  );
}

function ContactDescription() {
  return "Ready to bring your ideas to life? Let's discuss your next project";
}