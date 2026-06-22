import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import seoPages from "../data/seoData";
import { Link } from "react-router-dom";
function SeoLandingPage() {
  const { slug } = useParams();

  const page = seoPages[slug];

  if (!page) {
    return (
      <div className="text-center py-20">
        <h1>Page Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{page.title} | Maxx Challenger Safety Products</title>

        <meta
          name="description"
          content={page.description}
        />

        <meta
          name="keywords"
          content={page.keyword}
        />
      </Helmet>

      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {page.title}
          </h1>

          <p className="text-xl text-gray-300">
            {page.description}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {page.products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
            >
              {product}
            </div>
          ))}
        </div>
      </section>
<div className="flex gap-4 mt-10">
  <Link
    to="/products"
    className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
  >
    View Products
  </Link>

  <Link
    to="/contact"
    className="bg-[#0B1F3A] text-white px-6 py-3 rounded-lg font-semibold"
  >
    Get Free Quote
  </Link>
</div>
    </>
  );
}

export default SeoLandingPage;