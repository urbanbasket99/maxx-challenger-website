import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";
import { Helmet } from "react-helmet-async";
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
  <>
    <Helmet>
      <title>
        {`${product.name} in Hyderabad | Maxx Challenger Safety Products`}
      </title>

      <meta
        name="description"
        content={`${product.name} supplier in Hyderabad. Premium industrial safety products for workplace protection.`}
      />

      <meta
        name="keywords"
        content={`${product.name}, safety products Hyderabad, PPE products`}
      />
    </Helmet>

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
          </div>

        </div>
      </div>
    </section>
  </>
);

}

export default ProductDetail;