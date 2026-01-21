import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Fuel,
  Gauge,
  Settings2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import carSuv from "@/assets/car-suv.jpeg";
import carSedan from "@/assets/car-sedan.jpeg";
import carCoupe from "@/assets/car-coupe.jpeg";
import carNissan from "@/assets/car-nissan.png";
import carPrado from "@/assets/car-prado.png";
import carElantra from "@/assets/car-elantra1.jpeg";
import carElantra2 from "@/assets/car-elantra2.jpeg";


/**
 * 👉 TO ADD MORE IMAGES TO A CAR:
 * Just add more images inside the `images` array
 */
const cars = [
  {
    id: 1,
    name: "Hyundai Elantra",
    make: "Hyundai",
    model: "GLS",
    year: 2016,
    mileage: 45230,
    category: "Sedan",
    price: 115000,
    images: [carElantra, carElantra2],
    specs: {
      fuel: "Petrol",
      power: "145 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 2,
    name: "Toyota Highlander",
    make: "Toyota",
    model: "4WD",
    year: 2012,
    mileage: 67890,
    category: "SUV",
    price: 175000,
    images: [carSuv, carSedan],
    specs: {
      fuel: "Petrol",
      power: "187 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 3,
    name: "Ford Escape",
    make: "Ford",
    model: "SE",
    year: 2016,
    mileage: 56789,
    category: "SUV",
    price: 230000,
    images: [carCoupe, carSuv],
    specs: {
      fuel: "Petrol",
      power: "250 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 4,
    name: "Nissan Versa",
    make: "Nissan",
    model: "SE",
    year: 2015,
    mileage: 53000,
    category: "Saloon",
    price: 75000,
    images: [carNissan, carSedan],
    specs: {
      fuel: "Petrol",
      power: "181 HP",
      transmission: "6-Speed Auto",
    },
  },
  {
    id: 5,
    name: "Toyota Prado",
    make: "Toyota",
    model: "TXL",
    year: 2012,
    mileage: 120000,
    category: "SUV",
    price: 261000,
    images: [carPrado, carSuv, carCoupe],
    specs: {
      fuel: "Petrol",
      power: "185 HP",
      transmission: "CVT Auto",
    },
  },
];

const PHONE_NUMBER = "+233277184474";

const InventorySection = () => {
  // 🔹 Track current image index per car
  const [activeImage, setActiveImage] = useState<Record<number, number>>({});

  const nextImage = (carId: number, length: number) => {
    setActiveImage((prev) => ({
      ...prev,
      [carId]: ((prev[carId] ?? 0) + 1) % length,
    }));
  };

  const prevImage = (carId: number, length: number) => {
    setActiveImage((prev) => ({
      ...prev,
      [carId]:
        ((prev[carId] ?? 0) - 1 + length) % length,
    }));
  };

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
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => {
            const currentIndex = activeImage[car.id] ?? 0;

            return (
              <div
                key={car.id}
                className="bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition shadow-card"
              >
                {/* Image Carousel */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={car.images[currentIndex]}
                    alt={car.name}
                    className="w-full h-full object-cover transition duration-700"
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {car.category}
                  </div>

                  {/* Carousel Controls */}
                  {car.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(car.id, car.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={() => nextImage(car.id, car.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    {car.year} • {car.make} • {car.model}
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2">
                    {car.name}
                  </h3>

                  <div className="text-sm text-muted-foreground mb-4">
                    {car.mileage.toLocaleString()} miles
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                    <Spec icon={<Fuel />} label={car.specs.fuel} />
                    <Spec icon={<Gauge />} label={car.specs.power} />
                    <Spec icon={<Settings2 />} label={car.specs.transmission} />
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gradient-gold">
                      ₵{car.price.toLocaleString()}
                    </span>

                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Button variant="premium" size="sm">
                        Call Now
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-12">
          <a href={`tel:${PHONE_NUMBER}`}>
            <Button variant="heroOutline" size="lg">
              Call Us Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

/* 🔹 Small reusable spec component */
const Spec = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <div className="flex flex-col items-center text-center text-xs text-muted-foreground">
    <span className="text-gold mb-1">{icon}</span>
    {label}
  </div>
);

export default InventorySection;
