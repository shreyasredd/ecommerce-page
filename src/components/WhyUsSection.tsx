
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "🧩",
    title: "Tailored Solutions",
    description: "Custom-built eCommerce platforms aligned with your goals"
  },
  {
    icon: "🚀",
    title: "Faster Time to Market",
    description: "Agile teams delivering MVPs and full launches on time"
  },
  {
    icon: "🔄",
    title: "Ongoing Support",
    description: "From optimization to scaling—we stay with you post-launch"
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience-Driven. Results-Oriented. Future-Ready.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl italic mb-8 max-w-3xl mx-auto">
            "100+ successful eCommerce launches delivered across industries."
          </p>
          
          <Button className="bg-accent-400 text-neutral-700 hover:bg-accent-400/90 font-medium text-base px-8 py-6">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
