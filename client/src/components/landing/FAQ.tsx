import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "eco-friendly",
    question: "What makes EcoPool Bali different from other pool services?",
    answer:
      "We use a low-chlorine, enzyme-based treatment system that requires up to 80% less harsh chemicals than traditional methods. Our approach is gentler on your skin, eyes, and swimwear, extends equipment life, and is better for Bali's environment. Most local services rely on heavy chlorine 'shocks' — we take a proactive chemistry-balancing approach.",
  },
  {
    value: "frequency",
    question: "How often should my villa pool be cleaned in Bali?",
    answer:
      "In Bali's tropical climate, we recommend a minimum of 2 visits per week for most residential pools. Daily leaf fall, high UV exposure, and warm water temperatures accelerate algae growth and chemical evaporation. Our Villa Essential plan covers 2x weekly, while our Wellness Premium package includes 3x weekly for maximum clarity.",
  },
  {
    value: "green-pool",
    question: "My pool has turned green. How quickly can you restore it?",
    answer:
      "We offer priority green pool recovery and can typically restore clarity within 48-72 hours, depending on severity. Our Reset Treatment involves draining/balancing, enzyme shock treatment, filter deep-clean, and a follow-up visit to ensure the water chemistry stays stable. We serve both poolcleaningbali.online and baligreenpoolrescue.online customers.",
  },
  {
    value: "chemicals",
    question: "Are your treatments safe for children and pets?",
    answer:
      "Absolutely. Our low-chlorine protocols maintain Free Available Chlorine at 0.5-1.5 ppm — well below the discomfort threshold. We also offer saltwater and UV-based systems that drastically reduce chemical usage. Your family can swim just minutes after our treatment, with no red eyes or skin irritation.",
  },
  {
    value: "saltwater",
    question: "Do you service saltwater chlorinator systems?",
    answer:
      "Yes — saltwater pools are our specialty. Our technicians are certified in salt cell cleaning, calcium scale removal, and salinity optimization. We also handle UV sterilisation units, mineral purifiers, and ozone systems found in luxury Bali villas.",
  },
  {
    value: "areas",
    question: "What areas of Bali do you service?",
    answer:
      "We cover all major areas including Canggu, Seminyak, Uluwatu, Jimbaran, Ubud, Sanur, Nusa Dua, Kerobokan, and Pererenan. If your villa is in a more remote location, contact us for a custom quote — we may still be able to help.",
  },
  {
    value: "pricing",
    question: "How much does pool maintenance cost in Bali?",
    answer:
      "Our packages start from IDR 1.5 million/month for 2x weekly visits (Villa Essential), IDR 2.5 million/month for 3x weekly premium service (Wellness Premium), and custom pricing for large estates and resorts. All plans include chemical balancing, filter cleaning, and digital photo reports.",
  },
  {
    value: "reports",
    question: "Do you provide water quality reports?",
    answer:
      "Yes — every visit includes a digital Water Quality Score report with before/after photos, chemical readings (pH, alkalinity, chlorine, calcium hardness, stabilizer), and any equipment notes. You'll receive these via WhatsApp or email so you can track your pool health over time.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about eco-friendly pool maintenance in Bali.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border border-border rounded-xl px-6 bg-secondary/20 data-[state=open]:bg-secondary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-primary py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="https://wa.me/6282323011656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:text-accent transition-colors"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
