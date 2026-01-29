import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/logo1.jpeg"; // <-- replace with your actual logo path

const PHONE_NUMBER = "+233277184474";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Available Cars", href: "#inventory" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            {/* <img
              src={logoImage}
              alt="BuyMyGhCar Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            /> */}
            <div className="flex gap-1 items-end">
              <span className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">
                BuyMyGhCar
              </span>
              <span className="text-2xl md:text-3xl font-display font-light text-foreground">
                .com
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">{PHONE_NUMBER}</span>
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="hero" size="lg">
                Book Test Drive
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="hero" className="w-full mt-4">
                Book Test Drive
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
