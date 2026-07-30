import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Factory,
  PackageCheck,
  Truck,
  ShieldCheck,
  Headset,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Manufacturer Direct Pricing",
    description:
      "Get competitive pricing by purchasing directly from the manufacturer.",
  },
  {
    icon: Factory,
    title: "OEM & Bulk Orders",
    description:
      "We support corporate procurement, OEM manufacturing, and dealer requirements.",
  },
  {
    icon: PackageCheck,
    title: "Premium Quality",
    description:
      "Every product is manufactured using high-quality materials and undergoes strict quality checks.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description:
      "Reliable delivery network serving customers across India.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial Grade Protection",
    description:
      "Designed to provide dependable protection in demanding work environments.",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    description:
      "Our team is available to assist with product selection, quotations, and after-sales support.",
  },
];

export default function CustomerBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
            Why Choose Maxx Challenger
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0B1F3A]">
            Benefits of Partnering With Us
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We combine manufacturing expertise, quality assurance, and reliable
            service to deliver industrial safety footwear that businesses can
            depend on.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-500">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}