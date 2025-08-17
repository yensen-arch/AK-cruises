"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Gift, Loader2, Phone } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import ReCAPTCHA from "react-google-recaptcha";

interface ContactCTAProps {
  siteName?: string;
}

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country_code: string;
  terms_accepted: boolean;
}

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  country_code: z.string().min(1, "Country code is required"),
  terms_accepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const countryOptions = [
  { code: "+1", country: "US", flag: "🇺🇸", value: "+1-US" },
  { code: "+1", country: "CA", flag: "🇨🇦", value: "+1-CA" },
  { code: "+44", country: "GB", flag: "🇬🇧", value: "+44-GB" },
  { code: "+61", country: "AU", flag: "🇦🇺", value: "+61-AU" },
  { code: "+64", country: "NZ", flag: "🇳🇿", value: "+64-NZ" },
];

const ContactCTA = ({
  siteName = "ak-cruises"
}: ContactCTAProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country_code: "+1-US",
      terms_accepted: false,
    },
    mode: "onBlur"
  });

  const onSubmit = async (data: FormValues) => {
    // if (!recaptchaToken) {
    //   toast({
    //     title: "Verification Required",
    //     description: "Please complete the reCAPTCHA verification",
    //     variant: "destructive"
    //   });
    //   return;
    // }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          country_code: data.country_code,
          site_name: siteName,
          interests: [],
          terms_accepted: data.terms_accepted,
        });

      if (error) {
        throw error;
      }

      setShowSuccessDialog(true);
      form.reset();
      setRecaptchaToken(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-[500px] mx-auto bg-opacity-95 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-6 shadow-2xl text-viking-navy border border-white/50 relative overflow-hidden">
      <div className="relative">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold">
            New Clients: Sign Up for our rewards program and get a
            <span className="text-viking-gold"> $250 Credit </span>
          </h3>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-viking-navy/80 font-medium">First Name *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-viking-navy/50">
                          <User size={16} />
                        </div>
                        <Input 
                          placeholder="Your first name" 
                          className="pl-10 py-5 sm:py-6 border-viking-navy/20 focus:border-viking-gold focus:ring-1 focus:ring-viking-gold rounded-lg" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-viking-red text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-viking-navy/80 font-medium">Last Name *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-viking-navy/50">
                          <User size={16} />
                        </div>
                        <Input 
                          placeholder="Your last name" 
                          className="pl-10 py-5 sm:py-6 border-viking-navy/20 focus:border-viking-gold focus:ring-1 focus:ring-viking-gold rounded-lg" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-viking-red text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-viking-navy/80 font-medium">Email *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-viking-navy/50">
                        <Mail size={16} />
                      </div>
                      <Input 
                        type="email" 
                        placeholder="email@email.com" 
                        className="pl-10 py-5 sm:py-6 border-viking-navy/20 focus:border-viking-gold focus:ring-1 focus:ring-viking-gold rounded-lg" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-viking-red text-xs" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-[auto_1fr] gap-2 sm:gap-4">
              <FormField
                control={form.control}
                name="country_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-viking-navy/80 font-medium">Code</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="py-5 sm:py-6 text-sm sm:text-base border-viking-navy/20 focus:border-viking-gold focus:ring-1 focus:ring-viking-gold rounded-lg w-[100px] sm:w-[120px]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <span className="flex items-center gap-1">
                                <span>{option.flag}</span>
                                <span>{option.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-viking-red text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-viking-navy/80 font-medium">Phone Number *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-viking-navy/50">
                          <Phone size={16} />
                        </div>
                        <Input 
                          type="tel" 
                          placeholder="(555) 555-5555" 
                          className="pl-10 py-5 sm:py-6 border-viking-navy/20 focus:border-viking-gold focus:ring-1 focus:ring-viking-gold rounded-lg" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-viking-red text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="terms_accepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-viking-navy/20 mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-viking-navy/80 text-xs sm:text-sm">
                      I agree to the{" "} 
                      <a
                        href="https://www.smallshiptravel.com/legal/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-viking-gold hover:underline"
                      >
                        terms and conditions
                      </a>
                      {" "}and{" "}
                      <a
                        href="https://www.smallshiptravel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-viking-gold hover:underline"
                      >
                        privacy policy
                      </a>
                    </FormLabel>
                    <FormMessage className="text-viking-red text-xs" />
                  </div>
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-viking-red hover:bg-viking-red/90 text-white py-5 sm:py-6 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 shadow-lg shadow-viking-red/20 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Gift size={20} />
                  <span>Get Your $250 Credit</span>
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md bg-gradient-to-b from-white to-gray-50 border border-viking-gold/30 rounded-2xl shadow-2xl p-4 sm:p-6 animate-fade-in">
          <DialogHeader className="space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/338770d5-a2a6-460b-abf5-9fa14be97117.png" 
                alt="Small Ship Travel" 
                className="h-12 sm:h-16 object-contain" 
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl font-serif text-viking-navy">
              Request Submitted Successfully!
            </DialogTitle>
          </DialogHeader>

          <div className="text-center space-y-4 sm:space-y-5">
            <p className="text-gray-700 text-base sm:text-lg">
              Thank you for your interest in A&K Cruises. Our travel expert will contact you soon to discuss your journey.
            </p>
            <div className="bg-viking-gold/10 p-3 sm:p-4 rounded-xl border border-viking-gold/20 flex items-center justify-center gap-2">
              {/* <Gift size={18} className="text-viking-gold" /> */}
              <span className="text-viking-navy text-sm sm:text-base font-medium">
                New travelers receive a $250 credit after completing their first trip.
              </span>
            </div>
          </div>

          <div className="flex justify-center pt-4 sm:pt-6">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-viking-red hover:bg-viking-red/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg transition duration-300 ease-in-out text-sm sm:text-base"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactCTA;