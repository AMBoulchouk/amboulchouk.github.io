
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Projects } from './components/Projects';
import { Teaching } from './components/Teaching';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen selection:bg-accent-violet/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Timeline Section */}
        <ExperienceTimeline />

        {/* Projects Grid Section */}
        <Projects />

        {/* Teaching & Mentoring Section */}
        <Teaching />

        {/* Professional Services Section */}
        <Services />

        {/* Contact CTA Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
