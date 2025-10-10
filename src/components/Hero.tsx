import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/80 to-background"></div>
      </div>

      {/* DECA Pattern Overlay */}
      <div className="absolute inset-0 deca-pattern opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground">
            Travis High School{" "}
            <span className="bg-gradient-deca bg-clip-text text-transparent">
              DECA
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
            Emerging Leaders. Future Entrepreneurs.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in developing the next generation of leaders, entrepreneurs,
            and business professionals through competitions, leadership
            development, and real-world experience.
          </p>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors group"
            >
              <span className="text-sm font-medium">Learn More</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-lg rotate-45 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/10 rounded-lg rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
