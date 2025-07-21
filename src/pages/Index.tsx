import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CurriculumPaths from "@/components/CurriculumPaths";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CurriculumPaths />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
