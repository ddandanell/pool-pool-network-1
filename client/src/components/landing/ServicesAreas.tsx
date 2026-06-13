import { motion } from "framer-motion";
import { MapPin, Wrench, Droplets, Award, Clock, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Green Pool Recovery",
    description:
      "Turn green, algae-filled water crystal clear in 48-72 hours with our enzyme-based shock treatment and deep filtration process.",
  },
  {
    icon: Wrench,
    title: "Salt Cell & Heater Service",
    description:
      "Certified maintenance for salt chlorinators, heat pumps, UV sterilizers, and mineral purification systems common in Bali villas.",
  },
  {
    icon: Award,
    title: "Water Quality Management",
    description:
      "Proactive chemical balancing — pH, alkalinity, calcium hardness, and stabilizer — to keep water stable with minimal chlorine.",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description:
      "We arrive within your scheduled window every visit, or the next treatment is free. Bali time doesn't apply to us.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. Everything is itemized in your monthly invoice and digital service report.",
  },
  {
    icon: MapPin,
    title: "Full Bali Coverage",
    description:
      "From Canggu to Ubud, Seminyak to Uluwatu — our team covers all major villa areas across the island.",
  },
];

const areas = [
  "Canggu",
  "Seminyak",
  "Uluwatu",
  "Jimbaran",
  "Ubud",
  "Sanur",
  "Nusa Dua",
  "Kerobokan",
  "Pererenan",
  "Berawa",
  "Echo Beach",
  "Bukit Peninsula",
];

export function ServicesAreas() {
  return (
    <section id="services-areas" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Specialized Services for Bali Pools
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond basic cleaning — we're water chemistry experts who understand Bali's unique tropical conditions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Why Choose{" "}
              <span className="text-accent">EcoPool Bali</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just pool cleaners — we're water quality specialists dedicated to giving you peace of mind.
            </p>

            <div className="space-y-6">
              {whyUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-serif font-bold">Areas We Serve</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-white/80 text-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/60 text-sm border-t border-white/10 pt-6">
              Don't see your area?{" "}
              <a
                href="https://wa.me/6282323011656"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-white transition-colors"
              >
                Contact us
              </a>{" "}
              — we may still be able to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
