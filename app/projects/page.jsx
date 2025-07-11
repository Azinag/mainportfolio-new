import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects-grid';
import AnalyticsTracker from '@/components/analytics-tracker';

export function generateMetadata() {
  return {
    title: 'Projects',
    description: 'Explore my portfolio of web development projects. From modern websites to complex web applications built with Next.js, React, and Tailwind CSS.',
    openGraph: {
      title: 'Projects - Noureddine Azinag',
      description: 'Explore my portfolio of web development projects. From modern websites to complex web applications built with Next.js, React, and Tailwind CSS.',
    },
  };
}

export default function Projects() {
  return (
    <>
      <AnalyticsTracker />
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <ProjectsTitle />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              <ProjectsDescription />
            </p>
          </div>
          <ProjectsGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}

function ProjectsTitle() {
  return (
    <>
      My <span className="text-primary">Projects</span>
    </>
  );
}

function ProjectsDescription() {
  return "A collection of web development projects showcasing modern technologies and clean design";
}