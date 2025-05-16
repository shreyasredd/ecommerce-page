
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🧱",
    title: "Custom Store Development",
    description: "Shopify, Magento, WooCommerce, or headless—tailored to your needs"
  },
  {
    icon: "📦",
    title: "Inventory & Product Management",
    description: "Real-time sync, forecasting, and catalog automation"
  },
  {
    icon: "💳",
    title: "Payment Gateway Integration",
    description: "Multi-currency, BNPL, EMI, and secure checkout flows"
  },
  {
    icon: "🚚",
    title: "Logistics & Fulfillment",
    description: "3PL, tracking, reverse logistics, and smart workflows"
  },
  {
    icon: "📈",
    title: "Marketing Automation",
    description: "SEO, WhatsApp/email marketing, and CRO strategies"
  },
  {
    icon: "💬",
    title: "CRM & Customer Engagement",
    description: "Loyalty programs, live chat, and lifecycle communication"
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    description: "PCI-DSS, GDPR, fraud detection, and secure hosting"
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Real-time dashboards with GA4, Mixpanel, and Power BI"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-light-100 py-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle mx-auto">
            From platform development to logistics automation, we cover it all.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-success text-white hover:bg-success/90 font-medium text-base px-8 py-6">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
