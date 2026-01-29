import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Share2, MessageCircle, X } from "lucide-react";
import { cars, PHONE_NUMBER } from "@/data/cars-data";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  const [index, setIndex] = useState(0); // Carousel index
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [modalIndex, setModalIndex] = useState(0); // Modal image index

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Car not found</p>
      </div>
    );
  }

  // Open fullscreen modal
  const openModal = (imgIndex: number) => {
    setModalIndex(imgIndex);
    setModalOpen(true);
  };

  // Share handler
  const handleShare = async () => {
    const shareData = {
      title: car.name,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The car link has been copied to your clipboard.",
          duration: 3000,
        });
      }
    } catch (err) {
      console.error("Share failed:", err);
      toast({
        title: "Unable to share",
        description: "Something went wrong while trying to share this car.",
        duration: 3000,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 container mx-auto px-4">
      <Toaster />

      {/* Back button */}
      <Link to="/" className="text-gold mb-4 inline-block">← Back</Link>

      {/* Image carousel */}
      <div className="relative h-[500px] overflow-hidden rounded-xl cursor-pointer">
        <img
          src={car.images[index]}
          className="w-full h-full object-contain bg-black"
          alt={car.name}
          onClick={() => openModal(index)}
        />

        {car.images.length > 1 && (
          <>
            <button
              onClick={() => setIndex((index - 1 + car.images.length) % car.images.length)}
              className="absolute left-4 top-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => setIndex((index + 1) % car.images.length)}
              className="absolute right-4 top-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Car info */}
      <h1 className="text-3xl font-bold mt-6">{car.name}</h1>
      <p className="text-muted-foreground">
        {car.year} • {car.make} • {car.model}
      </p>
      <p className="text-muted-foreground mt-2">{car.mileage.toLocaleString()} miles</p>

      {/* Specs */}
      <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mt-4 mb-4">
        <Spec icon="⛽" label={car.specs.fuel} />
        <Spec icon="⚡" label={car.specs.power} />
        <Spec icon="⚙️" label={car.specs.transmission} />
      </div>

      {/* Price & Actions */}
      <div className="flex flex-wrap gap-3 mt-4">
        <span className="text-2xl font-bold text-gradient-gold">
          ₵{car.price.toLocaleString()}
        </span>

        <a href={`tel:${PHONE_NUMBER}`}>
          <Button>Call</Button>
        </a>

        <a
          href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=I'm interested in ${car.name}`}
          target="_blank"
        >
          <Button variant="outline">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </a>

        <Button variant="outline" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      {/* Fullscreen modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20"
            onClick={() => setModalOpen(false)}
          >
            <X />
          </button>

          <button
            className="absolute left-4 top-1/2 text-white p-2 rounded-full hover:bg-white/20"
            onClick={() =>
              setModalIndex((modalIndex - 1 + car.images.length) % car.images.length)
            }
          >
            <ChevronLeft />
          </button>

          <img
            src={car.images[modalIndex]}
            className="max-h-[90%] max-w-[90%] object-contain"
            alt={car.name}
          />

          <button
            className="absolute right-4 top-1/2 text-white p-2 rounded-full hover:bg-white/20"
            onClick={() => setModalIndex((modalIndex + 1) % car.images.length)}
          >
            <ChevronRight />
          </button>

          <Button
            variant="outline"
            className="absolute bottom-8 right-8 flex items-center gap-2"
            onClick={handleShare}
          >
            <Share2 /> Share
          </Button>
        </div>
      )}
    </section>
  );
}

/* 🔹 Simple Spec Component */
const Spec = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center text-center text-xs text-muted-foreground">
    <span className="text-gold mb-1">{icon}</span>
    {label}
  </div>
);
