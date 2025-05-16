
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.requirements) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message. We'll contact you shortly!");
      setFormData({
        name: "",
        email: "",
        company: "",
        requirements: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Ready to Launch Your eCommerce Platform?</h2>
          <p className="section-subtitle mx-auto">
            Let's discuss your goals and get started with a tailored digital commerce strategy.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 text-base"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 text-base"
                required
              />
            </div>
            
            <div>
              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 text-base"
              />
            </div>
            
            <div>
              <Textarea
                name="requirements"
                placeholder="Project Requirements *"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full p-4 text-base h-32"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-accent-400 text-neutral-700 hover:bg-accent-400/90 font-medium text-base p-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Schedule a Free Strategy Call"}
            </Button>
          </form>
          
          <div className="text-center mt-8 text-neutral-600">
            Prefer email? Write to us at{" "}
            <a href="mailto:info@finxbridge.com" className="text-primary hover:underline">
              info@finxbridge.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
