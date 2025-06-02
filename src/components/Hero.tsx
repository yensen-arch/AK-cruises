
import ContactCTA from "./ContactCTA";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-viking-navy/80 to-viking-blue/60 z-10"></div>
      
      {/* Background Image with subtle animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-zoom" 
        style={{
          backgroundImage: "url('/lovable-uploads/Bupadest_Parliament_House.jpg')",
          animation: "slowZoom 30s infinite alternate ease-in-out"
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen py-16">
        {/* Logo with enhanced styling */}
        <div className="inline-block mb-16 px-6 backdrop-blur-sm border border-viking-gold/40 rounded-full py-3 bg-white shadow-lg">
          <img 
            src="/lovable-uploads/e77f7277-33f1-416a-868a-afe1cef7e796.png" 
            alt="Small Ship Travel Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Section - Takes up more space on larger screens */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-md">
            Experience the Elegance of <span className="text-viking-gold">A&K Cruises</span>
            </h1>
            
            <p className="text-white/95 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow">
            Sail to the world’s most remote and awe-inspiring destinations in unmatched style. Enjoy curated expeditions, enriching experiences, and legendary service.
            </p>
          </div>
          
          {/* Form Section with improved styling */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              {/* Form with ContactCTA component */}
              <div className="relative z-10">
                <ContactCTA siteName="ak-cruises" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;