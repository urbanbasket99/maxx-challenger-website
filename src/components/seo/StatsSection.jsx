import {
  Factory,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: Factory,
    number: "10+",
    title: "Years of Experience",
    description: "Delivering industrial safety solutions.",
  },
  {
    icon: PackageCheck,
    number: "30+",
    title: "Safety Products",
    description: "Wide range of PPE products.",
  },
  {
    icon: ShieldCheck,
    number: "1000+",
    title: "Happy Customers",
    description: "Trusted by industries across India.",
  },
  {
    icon: Truck,
    number: "Pan India",
    title: "Supply Network",
    description: "Fast delivery across India.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-3xl p-8 text-center shadow hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div className="bg-[#0B1F3A] w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon className="text-yellow-400" size={30} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-[#0B1F3A]">
                  {item.number}
                </h3>

                <p className="font-semibold mt-2">
                  {item.title}
                </p>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}