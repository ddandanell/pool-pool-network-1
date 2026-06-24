import SEO from "@/components/SEO";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WaterQualitySection } from "@/components/landing/WaterQualitySection";
import { Pricing } from "@/components/landing/Pricing";
import { ServicesAreas } from "@/components/landing/ServicesAreas";
import { FAQ } from "@/components/landing/FAQ";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Droplets } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      <SEO />

      <Navbar />
      <Hero />
      <Features />
      <WaterQualitySection />
      <ServicesAreas />
      <Pricing />
      <FAQ />

      {/* Premium Footer with WhatsApp CTA */}
      <footer className="bg-primary text-white">
        {/* CTA Strip */}
        <div className="bg-accent/10 border-b border-white/10">
          <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-1">
                Ready for crystal-clear, eco-friendly water?
              </h3>
              <p className="text-white/70">
                Get your free water quality assessment today.
              </p>
            </div>
            <a
              href="https://wa.me/6282323011656?text=Hi%20EcoPool%20Bali!%20I%27d%20like%20to%20book%20a%20free%20water%20test."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-10 h-14 text-lg gap-3 shadow-lg shadow-green-500/25"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Droplets className="h-5 w-5 text-accent" />
                </div>
                <span className="text-2xl font-serif font-bold">
                  EcoPool<span className="text-accent">Bali</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Bali's premier eco-friendly pool maintenance. Low-chlorine,
                enzyme-based treatments for villas, resorts, and private estates.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/6282323011656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+6282323011656"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@ecopoolbali.com"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-5 text-accent uppercase text-xs tracking-widest">
                Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Villa Pool Maintenance
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Green Pool Recovery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Saltwater System Care
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Equipment Repair & Maintenance
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Water Testing & Analysis
                  </a>
                </li>
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="font-bold mb-5 text-accent uppercase text-xs tracking-widest">
                Areas Covered
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-3 w-3 shrink-0 text-accent" />
                  Canggu & Berawa
                </li>
                <li className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-3 w-3 shrink-0 text-accent" />
                  Seminyak & Kerobokan
                </li>
                <li className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-3 w-3 shrink-0 text-accent" />
                  Uluwatu & Jimbaran
                </li>
                <li className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-3 w-3 shrink-0 text-accent" />
                  Ubud & Sanur
                </li>
                <li className="flex items-center gap-2 text-white/60">
                  <MapPin className="h-3 w-3 shrink-0 text-accent" />
                  Nusa Dua & Bukit
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-5 text-accent uppercase text-xs tracking-widest">
                Contact
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://wa.me/6282323011656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-accent shrink-0" />
                    <span>+62 823-2301-1656 (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6282323011656"
                    className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    <span>+62 823-2301-1656</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@ecopoolbali.com"
                    className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <span>hello@ecopoolbali.com</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
                  Quick Response
                </p>
                <p className="text-sm font-medium">
                  Typically replies within 30 minutes on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} EcoPool Bali. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://poolcleaningbali.online"
                className="hover:text-white/60 transition-colors"
              >
                poolcleaningbali.online
              </a>
              <a
                href="https://baligreenpoolrescue.online"
                className="hover:text-white/60 transition-colors"
              >
                baligreenpoolrescue.online
              </a>
            </div>
            <p>Eco-Friendly Pool Maintenance in Bali</p>
          </div>
          <div className="container mx-auto px-6 pb-6 text-center text-xs text-white/40">
            Enjoying villa life in Bali? We also recommend a{" "}
            <a href="https://mychef.id/" target="_blank" rel="noopener" className="underline hover:text-white/60 transition-colors">private chef in Bali</a>{" "}
            and{" "}
            <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener" className="underline hover:text-white/60 transition-colors">private tutors in Bali</a>.
          </div>
        </div>
      </footer>
    </div>
  );
}
