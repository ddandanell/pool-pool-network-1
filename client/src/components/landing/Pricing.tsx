import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Villa Essential",
    price: "1.5M",
    period: "/month",
    description: "Perfect for private 2-3 bedroom villas.",
    features: [
      "2x Weekly Cleaning Visits",
      "Chemical Balancing Included",
      "Filter Cleaning & Backwash",
      "Digital Photo Reports",
      "Surface Skimming & Vacuuming"
    ],
    highlight: false
  },
  {
    name: "Wellness Premium",
    price: "2.5M",
    period: "/month",
    description: "Ideal for luxury rentals and sensitive skin.",
    features: [
      "3x Weekly Cleaning Visits",
      "Low-Chlorine / Enzyme Treatment",
      "Salt Cell Cleaning",
      "Priority Emergency Response",
      "Detailed Water Quality Ledger",
      "Equipment Preventative Check"
    ],
    highlight: true
  },
  {
    name: "Resort & Estate",
    price: "Custom",
    period: "",
    description: "Tailored for large pools or multiple units.",
    features: [
      "Daily or 4x Weekly Options",
      "Full Chemical Supply Management",
      "Staff Training & Oversight",
      "Energy Efficiency Audit",
      "Commercial Equipment Maintenance",
      "24/7 Support Line"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Transparent Maintenance Packages</h2>
          <p className="text-muted-foreground">Choose the level of care your sanctuary deserves.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 ${
                tier.highlight 
                  ? "bg-primary text-white shadow-xl scale-105 z-10" 
                  : "bg-white text-foreground border border-border shadow-sm"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-primary"}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>IDR {tier.period}</span>
                </div>
                <p className={`mt-4 text-sm ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${tier.highlight ? "text-accent" : "text-primary"}`} />
                    <span className="text-sm font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 text-base font-semibold rounded-xl ${
                  tier.highlight 
                    ? "bg-accent text-primary hover:bg-accent/90" 
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Inquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
