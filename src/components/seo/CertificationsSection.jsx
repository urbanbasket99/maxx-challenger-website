import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Factory,
  Award,
  ClipboardCheck,
  Wrench,
} from "lucide-react";

const certifications = [
  {
    icon: BadgeCheck,
    title: "IS Standards",
    description:
      "Products are manufactured in accordance with applicable Indian Standards for industrial safety footwear.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Tested",
    description:
      "Every product undergoes rigorous quality inspection to ensure reliable workplace protection.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description:
      "Modern manufacturing processes with strict quality control at every production stage.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description:
      "High-quality leather, steel toe caps, and durable PU soles for long-lasting performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Performance Tested",
    description:
      "Products are tested for durability, comfort, grip, impact resistance, and industrial use.",
  },
  {
    icon: Wrench,
    title: "Industrial Reliability",
    description:
      "Designed to perform consistently in construction, engineering, manufacturing, logistics, and heavy industries.",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[3px] text-yellow-500">
            Quality & Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0B1F3A] lg:text-5xl">
            Built on Quality. Trusted for Protection.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Maxx Challenger, quality is integrated into every stage of the
            manufacturing process. From raw material selection to final
            inspection, we focus on delivering dependable industrial safety
            footwear for demanding workplaces.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A] text-yellow-400 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-[#0B1F3A] p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Quality You Can Trust
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            Our commitment to quality manufacturing and dependable industrial
            safety solutions has made Maxx Challenger a trusted partner for
            businesses across India.
          </p>
        </div>
      </div>
    </section>
  );
}