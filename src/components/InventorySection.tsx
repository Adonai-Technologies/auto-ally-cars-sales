import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, Gauge, Settings2, Calendar, Car, Gauge as Speedometer } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carCoupe from "@/assets/car-coupe.jpg";

const cars = [
  {
    id: 1,
    name: "Navigator X7",
    make: "Luxe",
    model: "X7 Premium",
    year: 2024,
    mileage: 1250,
    category: "SUV",
    price: 89500,
    image: carSuv,
    specs: {
      fuel: "Hybrid",
      power: "450 HP",
      transmission: "8-Speed Auto",
    },
  },
  {
    id: 2,
    name: "Velocita RS",
    make: "Luxe",
    model: "RS Sport",
    year: 2023,
    mileage: 8420,
    category: "Sports Sedan",
    price: 124900,
    image: carSedan,
    specs: {
      fuel: "Petrol",
      power: "580 HP",
      transmission: "7-Speed DCT",
    },
  },
  {
    id: 3,
    name: "Gran Coupe",
    make: "Luxe",
    model: "GT Edition",
    year: 2024,
    mileage: 520,
    category: "Coupe",
    price: 156000,
    image: carCoupe,
    specs: {
      fuel: "Petrol",
      power: "620 HP",
      transmission: "9-Speed Auto",
    },
  },
];

const InventorySection = () => {
  return (
    <section id="inventory" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Available Cars
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Exceptional <span className="text-gradient-gold">Vehicles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our handpicked selection of premium automobiles. 
            Each vehicle meets our rigorous standards for quality and performance.
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-primary-foreground text-xs font-semibold rounded-full">
                  {car.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <span>{car.year}</span>
                  <span>•</span>
                  <span>{car.make}</span>
                  <span>•</span>
                  <span>{car.model}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {car.name}
                </h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {car.mileage.toLocaleString()} miles
                </div>
                
                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                  <div className="flex flex-col items-center text-center">
                    <Fuel className="h-4 w-4 text-gold mb-1" />
                    <span className="text-xs text-muted-foreground">{car.specs.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Gauge className="h-4 w-4 text-gold mb-1" />
                    <span className="text-xs text-muted-foreground">{car.specs.power}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Settings2 className="h-4 w-4 text-gold mb-1" />
                    <span className="text-xs text-muted-foreground">{car.specs.transmission}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-display font-bold text-gradient-gold">
                      ${car.price.toLocaleString()}
                    </span>
                  </div>
                  <Button variant="premium" size="sm" className="group/btn">
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Inventory
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
