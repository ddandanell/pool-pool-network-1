import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { WaterQualitySection } from "@/components/landing/WaterQualitySection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <WaterQualitySection />
      <Pricing />
      
      {/* Simple Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">EcoPool<span className="text-accent">Bali</span></h3>
              <p className="text-white/70 max-w-sm">
                Bali's premier eco-friendly pool maintenance service. 
                Protecting your health and the island's environment, one pool at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white">Villa Maintenance</a></li>
                <li><a href="#" className="hover:text-white">Green Pool Recovery</a></li>
                <li><a href="#" className="hover:text-white">Equipment Repair</a></li>
                <li><a href="#" className="hover:text-white">Water Testing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-accent">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Canggu & Seminyak</li>
                <li>Uluwatu & Jimbaran</li>
                <li>Ubud & Central Bali</li>
                <li className="pt-2 text-white font-medium">+62 812 3456 7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} EcoPool Bali. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
