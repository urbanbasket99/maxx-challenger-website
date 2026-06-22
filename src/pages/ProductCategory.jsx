import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  className="group bg-white rounded-[35px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
>

  {/* Product Image */}
  <div className="overflow-hidden">

    <img
      src={item.image}
      alt={item.name}
      className="w-60 h-[320px] object-cover group-hover:scale-110 transition duration-700 justify-centre"
    />

  </div>

  {/* Content */}
  <div className="p-8">

    <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
      Industrial Safety
    </span>

    <h3 className="text-2xl font-bold text-[#0B1F3A]">
      {item.name}
    </h3>

    <p className="text-gray-600 mt-4 leading-7">
      Premium quality {item.name.toLowerCase()} for
      industrial safety, construction, manufacturing,
      and workplace protection.
    </p>

    {/* Buttons */}
    <div className="flex gap-3 mt-6 flex-wrap relative z-50">
  <a
    href="https://wa.me/918328310975"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#00C853] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition"
  >
    WhatsApp
  </a>

<Link
  to={`/product/${item.slug}`}
  className="bg-red-500 text-white px-6 py-3 rounded-full"
>
  View Product
</Link>
</div>

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