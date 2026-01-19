import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"> 
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold text-gradient-gold">
                Auto Ally
              </span>
              <span className="text-2xl font-display font-light text-foreground">
                Ltd
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Your trusted destination for premium luxury vehicles. 
              Experience excellence in every drive.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-gold transition-colors">Home</a></li>
              <li><a href="#inventory" className="text-muted-foreground hover:text-gold transition-colors">Available Cars</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Vehicle Types</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Sedans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">SUVs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Coupes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Sports Cars</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Electric Vehicles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Financing Options</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Trade-In</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Warranty</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Auto Ally Gh. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion for automotive excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
