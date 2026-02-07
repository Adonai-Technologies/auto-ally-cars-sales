import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/HkbRBG1MejwZczSu5?g_st=aw";
const PHONE_NUMBER = "+233277184474";
const EMAIL_ADDRESS = "workssuprememotor@gmail.com";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.target);
    formData.append("access_key", "a746a43f-0b0b-400b-859e-edfcaf73679d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        e.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Find Your
              <span className="block text-gradient-gold">Perfect Car?</span>
            </h2>

            <p className="text-muted-foreground mb-8">
              Visit our location or contact us today. Our team of experts is ready to help you find the vehicle of your dreams.
            </p>

            <div className="space-y-6">

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground underline group-hover:text-gold transition">
                    View on Google Maps
                  </p>
                </div>
              </a>

              <a href={`tel:${PHONE_NUMBER}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground group-hover:text-gold transition">
                    (+233) 027 718-4474
                  </p>
                </div>
              </a>

              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground group-hover:text-gold transition">
                    {EMAIL_ADDRESS}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 9AM - 8PM | Sun: 10AM - 6PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New Car Inquiry" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <Input name="first_name" placeholder="John" required />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input name="last_name" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="(+233) 027 718-4474"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about the car you're looking for..."
                  rows={4}
                  className="resize-none"
                  required
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 ml-2" />
              </Button>

              {result && (
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {result}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
