import { motion } from "framer-motion";
import waterTexture from "@assets/generated_images/clean_water_texture.png";
import { Button } from "@/components/ui/button";

export function WaterQualitySection() {
  return (
    <section id="guarantee" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3] group">
               <img 
                src={waterTexture} 
                alt="Crystal clear water texture" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                 <div className="bg-white/90 backdrop-blur px-8 py-6 rounded-xl shadow-lg max-w-xs text-center border border-white/50">
                    <div className="text-5xl font-serif font-bold text-primary mb-1">100%</div>
                    <div className="text-sm uppercase tracking-widest font-bold text-muted-foreground">Clarity Guarantee</div>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              See the difference. <br/>
              <span className="text-accent">Feel the difference.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Most pool companies in Bali rely on "shocking" the pool with massive amounts of chlorine when it turns green. This is harsh on your skin, eyes, and swimwear.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>EcoPool Bali</strong> takes a proactive approach. We balance alkalinity, pH, and calcium hardness to create water that is naturally stable and requires 80% less harsh chemicals.
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-primary/5">
                 <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">1</div>
                 <div>
                    <h4 className="font-bold text-primary">Free Water Analysis</h4>
                    <p className="text-sm text-muted-foreground">We test your current water chemistry and equipment health.</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-primary/5">
                 <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">2</div>
                 <div>
                    <h4 className="font-bold text-primary">The "Reset" Treatment</h4>
                    <p className="text-sm text-muted-foreground">One-time deep clean and balance restoration to start fresh.</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-primary/5">
                 <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">3</div>
                 <div>
                    <h4 className="font-bold text-primary">Monthly Quality Reports</h4>
                    <p className="text-sm text-muted-foreground">Receive a "Water Quality Score" digital report after every visit.</p>
                 </div>
               </div>
            </div>

            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
              Book Your Free Water Test
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
