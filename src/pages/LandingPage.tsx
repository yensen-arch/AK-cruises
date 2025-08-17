import { useParams, Navigate } from "react-router-dom";
import Hero from "@/components/Hero";
import ExperienceAndWhy from "@/components/ExperienceAndWhy";
import Footer from "@/components/Footer";
import { getCruiseLineBySlug } from "@/lib/cruise-data";

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const cruiseLine = getCruiseLineBySlug(slug);
  
  if (!cruiseLine) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="w-full overflow-x-hidden">
        <Hero cruiseLine={cruiseLine} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceAndWhy cruiseLine={cruiseLine} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
