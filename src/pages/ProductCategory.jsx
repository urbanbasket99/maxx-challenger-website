import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import productCategories from "../data/productCategories";
import CTA from "../components/CTA";


function ProductCategory() {
  const { category } = useParams();

  const data = productCategories[category];

  if (!data) {
    return (
      <div className="text-center py-40 text-4xl font-bold">
        Category Not Found
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
<Helmet>
  <title>
    {`${data.title} in Hyderabad | Maxx Challenger Safety Products`}
  </title>

  <meta
    name="description"
    content={data.description}
  />

  <meta
    name="keywords"
    content={`${data.title}, industrial safety products Hyderabad, PPE products Hyderabad`}
  />
</Helmet>

      <div className="bg-[#F8FAFC]">

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white py-24 text-center">

          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-5xl md:text-6xl font-bold">
              {data.title}
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              {data.description}
            </p>

          </div>

        </section>

        {/* Products */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {data.products.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[280px] object-cover"
                  />

                  <div className="p-8">

                    <h3 className="text-2xl font-bold text-[#0B1F3A]">
                      {item.name}
                    </h3>

                    <a
                      href="https://wa.me/918328310975"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 bg-yellow-400 px-5 py-3 rounded-full font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                    >
                      WhatsApp Inquiry
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        <CTA />

      </div>
    </>
  );
}

export default ProductCategory;