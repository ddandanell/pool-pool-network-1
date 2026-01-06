import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/luxury_bali_villa_pool.png";

export function Hero() {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Bali Pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="container relative z-10 px-6 pt-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/90">Premium Eco-Maintenance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Pure Water, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Pure Peace of Mind.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Bali's premier low-chlorine pool care. We protect your skin, 
            your villa's equipment, and the island's environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 px-8 h-14 text-lg rounded-full w-full sm:w-auto">
              Get Your Water Quality Score
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg rounded-full w-full sm:w-auto">
              Our Process <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Kids & Pet Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Crystal Clear Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>Saltwater Specialists</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
