
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "hasthakalalu.com",
    content: "Their expertise in eCommerce development helped us scale our handcraft business and reach a global audience effectively.",
    rating: 5,
  },
  {
    id: 2,
    name: "chessboards.com",
    content: "Outstanding service from start to finish. They helped us optimize our product catalog and streamline checkout processes.",
    rating: 5,
  },
  {
    id: 3,
    name: "hasthakalalu.in",
    content: "The team delivered a custom eCommerce solution that perfectly matched our requirements and business goals.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-light-100 py-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Clients Love Us</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it—see what our clients have to say about our eCommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-accent"
            >
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent-400 fill-accent-400" size={18} />
                  ))}
                </div>

                <p className="italic text-neutral-600 mb-6">"{testimonial.content}"</p>
                
                <div className="mt-auto font-medium text-primary-500">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
