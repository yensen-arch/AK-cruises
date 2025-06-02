import { Card, CardContent } from "@/components/ui/card";

const experiences = [{
  title: "Exclusive Access & Expert Guides",
  description: "Each expedition is led by an expert team of naturalists, historians, and photographers—bringing depth and insight to every destination.",
  color: "bg-blue-50 text-blue-600",
  image: "https://res.cloudinary.com/dqh2tacov/image/upload/v1734684533/cld-sample-4.jpg"
}, {
  title: "Remote Wonders & Unparalleled Scenery",
  description: "From polar ice to volcanic isles, experience the wild beauty of untouched locations with A&K’s purpose-built luxury vessels.",
  color: "bg-rose-50 text-rose-600",
  image: "https://res.cloudinary.com/dqh2tacov/image/upload/v1734684532/samples/cup-on-a-table.jpg"
}, {
  title: "Curated Itineraries with Purpose",
  description: "Every voyage is designed with conservation and cultural respect in mind, ensuring meaningful, sustainable travel.",
  color: "bg-amber-50 text-amber-600",
  image: "https://res.cloudinary.com/dqh2tacov/image/upload/v1734684530/samples/balloons.jpg"
}, {
  title: "Luxurious Expedition Cruising",
  description: "Enjoy fine dining, spacious suites, and personalized service aboard small ships designed for comfort and discovery.",
  color: "bg-emerald-50 text-emerald-600",
  image: "https://res.cloudinary.com/dqh2tacov/image/upload/v1734684526/samples/landscapes/beach-boat.jpg"
}];

const whyChooseUs = [{
  title: "We Do it All",
  color: "bg-indigo-50 text-indigo-600",
  points: [
    "We'll create a special list of cruise options just for you",
    "We'll assist you in choosing the perfect small ship",
    "We'll handle every detail of your pre and post-cruise extension"
  ]
}, {
  title: "3 E's",
  color: "bg-amber-50 text-amber-600",
  points: [
    "Experience - We have over 35 years of in-depth knowledge",
    "Expertise - We know small ship cruising, like no one else",
    "Execution - Logistics and service is our calling card"
  ]
}, {
  title: "Best Selection & Price",
  color: "bg-green-50 text-green-600",
  points: [
    "We have a massive selection of cruises at the best value",
    "We have members only specials",
    "Unique Loyalty Program that rewards you for all your travel with us"
  ]
}, {
  title: "Trusted Service",
  color: "bg-blue-50 text-blue-600",
  points: [
    "Virtuoso affiliate through Travel Experts, a member",
    "ARC Accredited",
    "24/7/365 Service - we never close"
  ]
}];

const ExperienceAndWhy = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-viking-navy mb-4">
           A&K Cruises and Small Ship Travel - The Perfect Relationship
          </h2>
          <div className="w-24 h-1 bg-viking-gold mx-auto"></div>
        </div>

        {/* Viking River Cruises Section */}
        <div className="mb-24">
          <div className="mb-12 flex justify-center border-2 border-viking-gold py-4">
            <img
              src="https://cdn.sanity.io/images/6plxhipn/production/d0db23ab523bfc57f93c6088644501bc2d548512-1280x401.png?w=720"
              alt="Viking River Cruises Logo"
              className="w-auto h-20 filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-viking-navy mb-12 flex items-center justify-center">
            <span className="inline-block w-8 h-8 rounded-full bg-viking-blue mr-3 flex items-center justify-center text-white text-sm">1</span>
            Choose A&K Cruises For:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-viking-gold/5 rounded-bl-3xl"></div>
                  <h3 className="text-xl font-bold text-viking-blue mb-3 group-hover:text-viking-gold transition-colors">{experience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Small Ship Travel Section */}
        <div>
          <div className="mb-12 flex justify-center border-2 border-viking-gold py-4">
            <img
              src="/lovable-uploads/726f9fef-1111-44df-90fb-010712f9a048.png"
              alt="Small Ship Travel Logo"
              className="w-auto h-20 filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-viking-navy mb-12 flex items-center justify-center">
            <span className="inline-block w-8 h-8 rounded-full bg-viking-gold mr-3 flex items-center justify-center text-white text-sm">2</span>
            Choose Small Ship Travel For:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-viking-gold border-t-0 border-r-0 border-b-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-viking-navy">{item.title}</h3>
                  </div>
                  <ul className="text-gray-600 space-y-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 bg-viking-gold/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="h-1.5 w-1.5 bg-viking-gold rounded-full"></span>
                        </span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndWhy;