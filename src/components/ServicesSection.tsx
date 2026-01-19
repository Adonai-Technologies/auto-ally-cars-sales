import { Shield, Wrench, FileCheck, HandCoins, Car, Headphones } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Certified Pre-Owned",
    description: "Every vehicle undergoes a rigorous 150-point inspection for your peace of mind.",
  },
  {
    icon: HandCoins,
    title: "Flexible Financing",
    description: "Competitive rates and customized payment plans tailored to your budget.",
  },
  {
    icon: Wrench,
    title: "Premium Service",
    description: "State-of-the-art service center with factory-trained technicians.",
  },
  {
    icon: FileCheck,
    title: "Trade-In Program",
    description: "Get the best value for your current vehicle with our fair trade-in offers.",
  },
  {
    icon: Car,
    title: "Test Drives",
    description: "Experience your dream car firsthand with our complimentary test drive service.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you with any questions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-gold">Luxe Motors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive services to ensure your car buying experience is seamless and enjoyable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-charcoal-light rounded-2xl border border-border hover:border-gold/50 transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
