import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./sections/Hero";
import Why from "./sections/Why";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import Estimator from "./sections/Estimator";
import Faq from "./sections/Faq";
import Assistant from "./sections/Assistant";
import Enquiry from "./sections/Enquiry";
import FinalCta from "./sections/FinalCta";

export default function App() {
  return (
    <div id="main" className="min-h-screen bg-ivory text-ink antialiased dark:bg-night dark:text-night-ink">
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <Estimator />
        <Faq />
        <Assistant />
        <Enquiry />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
