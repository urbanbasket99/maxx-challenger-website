import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Truck,
  PackageCheck,
  Headset,
} from "lucide-react";

const trustItems = [
  {
    icon: Factory,
    title: "Manufacturer",
    description: "Trusted PPE Manufacturer",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Premium Tested Products",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Fast & Reliable Shipping",
  },
  {
    icon: PackageCheck,
    title: "Bulk Orders",
    description: "Corporate & Dealer Supply",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "Quick Response Team",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0B1F3A] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#102b52]"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-[#0B1F3A] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}