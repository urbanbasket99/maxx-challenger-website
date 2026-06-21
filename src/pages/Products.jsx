import helmet from "../assets/products/helmet.jpg";
import shoes from "../assets/shoes/shoes.png";
import gloves from "../assets/products/gloves.jpg";
import jacket from "../assets/products/jacket.jpg";
import gumboot from "../assets/products/gumboot.jpg";
import roadSafety from "../assets/products/road-safety.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const products = [
  {
    title: "Safety Helmets",
    image: helmet,
    slug: "industrial-safety-helmet",
    desc: "Premium industrial safety helmets for workplace protection.",
  },
  {
    title: "Safety Shoes",
    image: shoes,
    slug: "safety-shoes",
    desc: "Durable industrial safety shoes for worker protection.",
  },
  {
    title: "Safety Gloves",
    image: gloves,
    slug: "safety-gloves",
    desc: "Protective gloves for industrial safety.",
  },
  {
    title: "Reflective Jackets",
    image: jacket,
    slug: "reflective-jackets",
    desc: "High visibility jackets for worker safety.",
  },
  {
    title: "PVC Gumboots",
    image: gumboot,
    slug: "gumboots",
    desc: "Heavy-duty waterproof gumboots.",
  },
  {
    title: "Road Safety Products",
    image: roadSafety,
    slug: "road-safety",
    desc: "Barriers, cones, studs and traffic safety products.",
  },
];

function Products() {
  return (
    <div className="bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-24 text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Industrial Safety Products
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Explore premium industrial safety products
            designed for factories, warehouses,
            construction sites and industrial workplaces.
          </p>

        </div>

      </section>

      {/* Products Grid */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Product Categories
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              Premium Safety Equipment
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] object-cover"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.desc}
                  </p>

                  <div className="flex gap-3 mt-6 flex-wrap">

 <Link
  to={`/product/${item.slug}`}
  className="bg-yellow-400 px-5 py-3 rounded-full font-semibold"
>
 Click Test
</Link>

  <a
    href="https://wa.me/918328310975"
    target="_blank"
    className="border border-green-500 text-green-600 px-5 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition"
  >
    WhatsApp
  </a>

</div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Products;