import { motion } from "framer-motion";
import { Sprout, TestTube2, Waves, ShieldCheck, Sun, Zap } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Eco-First Approach",
    description: "We minimize harsh chemicals using enzyme treatments and optimized mineral balancing."
  },
  {
    icon: ShieldCheck,
    title: "Skin-Friendly",
    description: "No more red eyes or dry skin. Our low-chlorine protocols are gentle on sensitive skin."
  },
  {
    icon: Zap,
    title: "Equipment Protection",
    description: "Proper water balance extends the life of your pumps, heaters, and grouting."
  },
  {
    icon: Waves,
    title: "Crystal Clear Promise",
    description: "If your water isn't perfect, we revisit for free. That's our premium guarantee."
  },
  {
    icon: TestTube2,
    title: "Transparent Reporting",
    description: "Receive digital reports after every visit with photos and chemical readings."
  },
  {
    icon: Sun,
    title: "UV & Salt Experts",
    description: "Certified technicians for advanced salt chlorinators and UV sterilization systems."
  }
];

export function Features() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">The EcoPool Standard</h2>
          <p className="text-muted-foreground text-lg">
            We don't just "clean pools." We manage water chemistry to create a spa-like swimming experience 
            that enhances your property's value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/60 transition-colors border border-transparent hover:border-primary/10"
            >
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
