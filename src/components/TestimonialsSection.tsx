import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Food Critic",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    quote: "An extraordinary culinary journey that transcends traditional fine dining. The attention to detail in every dish is simply remarkable."
  },
  {
    name: "James Chen",
    role: "Wine Enthusiast",
    image: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
    quote: "The wine pairing was exceptional, and the sommelier's knowledge added an extra layer of sophistication to an already perfect evening."
  },
  {
    name: "Isabella Martinez",
    role: "Food Blogger",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    quote: "Every visit to Maison is a celebration of flavors. The seasonal menu never fails to surprise and delight."
  },
  {
    name: "Michael Roberts",
    role: "Restaurant Connoisseur",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    quote: "The ambiance, service, and cuisine create an unforgettable experience that keeps me coming back for more."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-200">Guest Experiences</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#202020] p-6 rounded-lg h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-serif text-lg text-gray-200">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400/70 font-sans tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300/80 italic flex-grow font-sans">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
