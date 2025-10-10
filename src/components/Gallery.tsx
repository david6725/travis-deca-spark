import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      title: "State Competition 2024",
      description: "Our team at the State Leadership Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      title: "Workshop Session",
      description: "Members participating in business strategy workshop",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    },
    {
      title: "Award Ceremony",
      description: "Celebrating our district competition winners",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      title: "Community Service",
      description: "DECA members giving back to the community",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    },
    {
      title: "Team Building",
      description: "Building connections and leadership skills",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      title: "Guest Speaker Event",
      description: "Learning from industry professionals",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Capturing our journey, achievements, and memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
