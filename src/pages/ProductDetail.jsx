import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

function ProductDetail() {
  const { slug } = useParams();

  const product = productDetails[slug];

  if (!product) {
    return (
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-24 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Product Image */}
          <div className="bg-white rounded-[35px] shadow-xl p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-[25px]"
            />
          </div>

          {/* Product Details */}
          <div>

            <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-[#0B1F3A] mt-6">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">

              <div>
                <h3 className="font-bold text-xl">
                  Material
                </h3>
                <p className="text-gray-600">
                  {product.material}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Sizes
                </h3>
                <p className="text-gray-600">
                  {product.sizes}
                </p>
              </div>

            </div>

            {/* Features */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Features
              </h2>

              <ul className="mt-5 space-y-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Applications
              </h2>

              <div className="flex flex-wrap gap-3 mt-5">
                {product.applications.map(
                  (app, index) => (
                    <span
                      key={index}
                      className="bg-white shadow px-5 py-3 rounded-full"
                    >
                      {app}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/918328310975?text=Hi, I am interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-[#0B1F3A] hover:text-white transition duration-300"
            >
              WhatsApp Inquiry
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;