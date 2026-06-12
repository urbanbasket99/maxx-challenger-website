import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const products = [
  {
    title: "Safety Helmets",
    image: "🪖",
    slug: "safety-helmets",
  },
  {
    title: "Safety Shoes",
    image: "👞",
    slug: "safety-shoes",
  },
  {
    title: "Safety Gloves",
    image: "🧤",
    slug: "safety-gloves",
  },
  {
    title: "Reflective Jackets",
    image: "🦺",
    slug: "reflective-jackets",
  },
  {
    title: "PVC Gumboots",
    image: "🥾",
    slug: "gumboots",
  },
  {
    title: "Road Safety Products",
    image: "🚧",
    slug: "road-safety",
  },
];

function ProductCategories() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
            Premium Safety Product Categories
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            We offer a wide range of industrial safety
            products for construction, manufacturing,
            warehouses, factories and infrastructure projects.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] rounded-[30px] p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >

              <div className="text-7xl">
                {item.image}
              </div>

              <h3 className="text-2xl font-bold text-[#0B1F3A] mt-6">
                {item.title}
              </h3>

              <Link
  to={`/products/${item.slug}`}
  className="inline-block mt-6 text-yellow-500 font-semibold hover:translate-x-1 transition"
>
  View Products →
</Link>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductCategories;