import Hero from "@/components/Hero";
import ExperienceAndWhy from "@/components/ExperienceAndWhy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full overflow-x-hidden">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceAndWhy />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;