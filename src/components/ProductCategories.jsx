import { Link } from "react-router-dom";

const products = [
  {
    title: "Head Protection",
    image: "/helmet.jpg?v=1",
    slug: "head-protection",
    desc: "Industrial safety helmets designed for construction, manufacturing and workplace protection.",
  },
  {
    title: "Foot Protection",
    image: "/shoes.jpg?v=1",
    slug: "foot-protection",
    desc: "Safety shoes and gumboots designed for maximum workplace safety and comfort.",
  },
 
];
function ProductCategories() {
  return (
    <section className="py-8 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm uppercase mb-4">
  Safety Categories
</div>
<h2 className="text-4xl font-extrabold text-[#0B1F3A] mb-4">
  Complete Industrial Safety Solutions
</h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            Explore premium industrial safety products
            trusted by construction, manufacturing,
            warehousing and industrial businesses.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

              </div>

              {/* Content */}
              <div className="p-8">

                <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Premium Safety
                </span>

                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                High-quality {item.title.toLowerCase()} designed for
                industrial protection, workplace safety
                and bulk requirements.
                </p>

                <Link
                  to={`/products/${item.slug}`}
                  className="inline-block mt-8 bg-[#0B1F3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#0B1F3A] transition duration-300"
                >
                  View Products →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductCategories;