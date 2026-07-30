import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Truck,
  Pickaxe,
  Zap,
  Warehouse,
  FlaskConical,
  HardHat,
} from "lucide-react";

const industries = [
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Safety footwear for construction workers, contractors, and infrastructure projects.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial safety shoes for factories, production units, and assembly plants.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Comfortable footwear for warehouse staff, inventory handlers, and distribution centers.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Reliable protection for transport, loading, unloading, and delivery operations.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Suitable safety footwear for electrical maintenance and utility environments.",
  },
  {
    icon: Pickaxe,
    title: "Mining",
    description:
      "Heavy-duty shoes designed for demanding mining and quarry applications.",
  },
  {
    icon: FlaskConical,
    title: "Chemical & Pharma",
    description:
      "Protective footwear for laboratories, chemical plants, and pharmaceutical facilities.",
  },
  {
    icon: Building2,
    title: "Engineering",
    description:
      "Industrial footwear for fabrication, engineering workshops, and heavy industries.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[3px] text-yellow-500">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0B1F3A] lg:text-5xl">
            Safety Shoes for Every Industry
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Maxx Challenger manufactures premium industrial safety shoes for
            businesses across multiple sectors. Our footwear is engineered to
            provide reliable protection, comfort, and durability in demanding
            work environments.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A] text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {industry.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}