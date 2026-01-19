import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Luxury sports car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
            Premium Car Dealership
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6">
            Drive Your
            <span className="block text-gradient-gold">Dreams</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Discover our exclusive collection of luxury vehicles. 
            Experience performance, elegance, and prestige like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              Explore Inventory
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 mt-12 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">500+</div>
              <div className="text-muted-foreground text-sm">Vehicles Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">15+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">98%</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
