import { motion } from "framer-motion";
import {
  Shield,
  HardHat,
  Zap,
  Droplets,
  Footprints,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: HardHat,
    title: "Protection from Falling Objects",
    description:
      "Steel toe safety shoes help reduce injuries caused by falling tools, machinery, and heavy materials commonly found on industrial sites.",
  },
  {
    icon: Footprints,
    title: "Slip & Trip Prevention",
    description:
      "Slip-resistant soles provide excellent grip on wet, oily, and uneven surfaces, helping reduce workplace accidents.",
  },
  {
    icon: Zap,
    title: "Electrical Hazard Protection",
    description:
      "Specialized safety footwear offers additional protection for employees working near electrical equipment and installations.",
  },
  {
    icon: Droplets,
    title: "Oil & Chemical Resistance",
    description:
      "Industrial-grade soles are designed to perform in environments exposed to oils, chemicals, and other workplace contaminants.",
  },
  {
    icon: Shield,
    title: "All-Day Comfort & Durability",
    description:
      "Ergonomic construction, breathable materials, and shock-absorbing soles improve comfort during long working hours.",
  },
  {
    icon: BadgeCheck,
    title: "Workplace Safety Compliance",
    description:
      "Using appropriate safety footwear helps organizations meet workplace PPE requirements and improve employee safety practices.",
  },
];

export default function WhySafetyShoes() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
            Workplace Safety
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0B1F3A] lg:text-5xl">
            Why Industrial Safety Shoes Are Essential
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Industrial safety shoes are an essential part of personal protective
            equipment (PPE). They help reduce workplace injuries, improve worker
            comfort, and provide dependable foot protection across construction,
            manufacturing, logistics, engineering, warehousing, and other
            industrial environments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A] text-yellow-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl bg-[#0B1F3A] p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Protect Your Workforce with Reliable Safety Footwear
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            Choosing high-quality industrial safety shoes helps create a safer
            workplace while supporting productivity and employee confidence.
            Maxx Challenger manufactures durable safety footwear designed for
            demanding industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
}