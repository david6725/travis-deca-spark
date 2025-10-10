import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Opportunities from "@/components/Opportunities";
import Highlights from "@/components/Highlights";
import Calendar from "@/components/Calendar";
import Officers from "@/components/Officers";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Opportunities />
        <Highlights />
        <Calendar />
        <Officers />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
