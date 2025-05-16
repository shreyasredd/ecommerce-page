
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import EcommerceExpertiseSection from "@/components/EcommerceExpertiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <EcommerceExpertiseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
