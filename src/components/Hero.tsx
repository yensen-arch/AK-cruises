
import ContactCTA from "./ContactCTA";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-viking-navy/80 to-viking-blue/60 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105" 
        style={{
          backgroundImage: "url('/lovable-uploads/Bupadest_Parliament_House.jpg')",
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-8 sm:py-12 lg:py-6 min-h-screen">
        {/* Logo with enhanced styling */}
        <div className="inline-block mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 backdrop-blur-sm border border-viking-gold/40 rounded-full py-2 sm:py-3 bg-white shadow-lg">
          <img 
            src="/lovable-uploads/e77f7277-33f1-416a-868a-afe1cef7e796.png" 
            alt="Small Ship Travel Logo" 
            className="h-8 sm:h-10 md:h-12 object-contain"
          />
        </div>
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content Section - Takes up more space on larger screens */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 sm:mb-6 leading-tight drop-shadow-md">
            Experience the Elegance of <span className="text-viking-gold">A&K Cruises</span>
            </h1>
            
            <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed drop-shadow px-2 sm:px-0">
            Sail to the world's most remote and awe-inspiring destinations in unmatched style. Enjoy curated expeditions, enriching experiences, and legendary service.
            </p>
          </div>
          
          {/* Form Section with improved styling */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:mx-0 transform transition-all duration-500 hover:scale-[1.02] order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
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