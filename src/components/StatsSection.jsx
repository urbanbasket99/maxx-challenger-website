import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Package,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: <ShieldCheck size={40} />,
    number: "10+",
    title: "Years Experience",
  },

  {
    icon: <Users size={40} />,
    number: "1000+",
    title: "Happy Customers",
  },

];

function StatsSection() {
  return (
    <section className="py-15 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Our Strength
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
            Trusted Industrial Safety Partner
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            Delivering premium industrial safety products
            and trusted service to businesses since 2014.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] rounded-[35px] p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >

              <div className="flex justify-center text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-[#0B1F3A]">
                {item.number}
              </h3>

              <p className="text-gray-600 text-lg mt-3">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;