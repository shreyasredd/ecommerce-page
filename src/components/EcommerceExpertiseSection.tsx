
import { ShoppingCart } from "lucide-react";

const platforms = [
  "eBay", "Walmart", "Amazon", "Etsy", "Shopify", "PrestaShop", "BigCommerce"
];

const EcommerceExpertiseSection = () => {
  return (
    <section id="ecommerce-expertise" className="bg-light-100 py-16">
      <div className="section-padding">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
            <ShoppingCart className="inline-block text-primary" /> Our eCommerce Expertise
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-neutral-600">
            From store initiation to digital marketing, we are familiar with all major eCommerce platforms:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-white/80 px-4 py-2 rounded-lg border border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceExpertiseSection;
