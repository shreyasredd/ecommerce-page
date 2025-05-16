
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/95 to-secondary/90 text-white overflow-hidden relative">
      <div className="section-padding flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          <h1 className="hero-text mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Powering Digital Commerce with 10 Years of Expertise
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            From idea to implementation, we help you build high-performing, scalable, and secure eCommerce solutions tailored for growth.
          </p>
          
          <div className="space-y-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-accent-400" />
              <span>10+ Years of eCommerce Experience</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-accent-400" />
              <span>Trusted by Retailers, D2C Brands, and B2B Platforms</span>
            </div>
            <div className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-accent-400" />
              <span>Scalable, Custom, and Omnichannel Solutions</span>
            </div>
          </div>
          
          <Button className="bg-accent-400 text-neutral-700 hover:bg-accent-400/90 font-medium text-base px-8 py-6 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
            Get a Free Consultation
          </Button>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
          <div className="relative">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-accent-400/20 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-success/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full max-w-md animate-float" style={{ animationDelay: "1s" }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-accent-400 text-4xl mb-2">📦</div>
                  <span className="text-sm font-medium">Store Management</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-accent-400 text-4xl mb-2">🛒</div>
                  <span className="text-sm font-medium">Digital Commerce</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-accent-400 text-4xl mb-2">🔄</div>
                  <span className="text-sm font-medium">Integration</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-accent-400 text-4xl mb-2">📊</div>
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
