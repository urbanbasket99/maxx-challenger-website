import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function IntroductionSection({
  badge = "Trusted Industrial Safety Manufacturer",
  title,
  description,
  highlights = [],
  image,
  imageAlt,
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {badge}
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0B1F3A] lg:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 whitespace-pre-line">
              {description}
            </p>

            {highlights.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:shadow-md"
                  >
                    <CheckCircle2
                      className="mt-1 text-green-600"
                      size={22}
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={image}
                alt={imageAlt || title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}