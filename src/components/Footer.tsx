import { Facebook, Instagram, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return <footer className="bg-[#18191C] text-white py-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full items-start">
        {/* 1. Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/lovable-uploads/8dc67d55-0df8-46a2-b0d7-1fdc37077715.png" alt="Small Ship Travel Logo" className="h-12 w-auto mb-2" />
          <div className="flex space-x-6 mt-2">
            <a href="https://www.facebook.com/SmallShipTravel" target="_blank" rel="noopener noreferrer" className="border-2 border-[#C89B3C] p-2 rounded-full flex items-center justify-center transition-colors">
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a href="https://www.instagram.com/smallshiptravel/" target="_blank" rel="noopener noreferrer" className="border-2 border-[#C89B3C] p-2 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/company/small-ship-travel" target="_blank" rel="noopener noreferrer" className="border-2 border-[#C89B3C] p-2 rounded-full flex items-center justify-center transition-colors">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
        {/* 2. sponsors */}
        <div className="flex flex-col items-center ">
          <div className="bg-white text-black p-3 rounded-xl flex items-center justify-center min-w-[170px] mb-2">
            <img src="/lovable-uploads/61af4306-9e13-49ae-b581-1c4e661f5fc3.png" alt="Virtuoso Member Logo" className="object-cover scale-150 h-10 w-auto " />
          </div>
          <p className="text-white/70 text-xs text-center md:text-center">
            Affiliated with Travel Experts <br /> A proud member of Virtuoso
          </p>
        </div>
        {/* 3. Contact info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center w-full">
            <Phone className="h-4 w-4 text-[#C89B3C] mr-2" />
            <a href="tel:+1-888-318-8110" className="text-[#C89B3C] font-medium hover:underline">+1-888-318-8110</a>
          </div>
          <div className="flex items-center w-full">
            <Mail className="h-4 w-4 text-[#C89B3C] mr-2" />
            <a href="mailto:ajain@smallshiptravel.com" className="text-[#C89B3C] font-medium hover:underline">ajain@smallshiptravel.com</a>
          </div>
          <div className="flex items-center w-full">
            <MapPin className="h-4 w-4 text-[#C89B3C] mr-2" />
            <span className="text-white/70">PO BOX 91853, Raleigh, NC 27675</span>
          </div>
        </div>
        {/* 5. Book an Appointment button */}
        <div className="flex flex-col items-center md:items-end w-full">
          <a href="https://calendly.com/smallshiptravel/client_meeting" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-[#C89B3C] hover:bg-[#b88a2e] text-white font-bold rounded-sm py-3 text-base shadow-none border-none">
              BOOK AN APPOINTMENT
            </Button>
          </a>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;