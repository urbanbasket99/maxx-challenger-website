import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";


import "react-medium-image-zoom/dist/styles.css";

function ProductDetail() {
  const { slug } = useParams();

  const product = productDetails[slug];
  const relatedProducts = Object.entries(productDetails)
  .filter(([key]) => key !== slug)
  .slice(0, 4);

const [activeTab, setActiveTab] = useState("features");

const [selectedImage, setSelectedImage] = useState(
  product.images?.[0] || product.image
);

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

  {/* Main Image */}
  <div className="h-[550px] flex items-center justify-center overflow-hidden rounded-[20px]">
    <img
      src={selectedImage}
      alt={product.name}
      className="max-h-full max-w-full object-contain rounded-[20px] transition-transform duration-300 hover:scale-125 cursor-zoom-in"
    />
  </div>

  {/* Thumbnails */}
  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
    {product.images?.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`${product.name}-${index}`}
        onClick={() => setSelectedImage(img)}
        className={`w-20 h-20 flex-shrink-0 object-cover rounded-lg border-2 cursor-pointer transition ${
          selectedImage === img
            ? "border-yellow-400"
            : "border-gray-200 hover:border-yellow-400"
        }`}
      />
    ))}
  </div>

</div><div>

  {/* Breadcrumb */}
  <div className="flex flex-wrap items-center gap-2 text-sm mb-6">

    <Link
      to="/"
      className="text-gray-500 hover:text-yellow-500"
    >
      Home
    </Link>

    <span>/</span>

    <Link
      to="/products"
      className="text-gray-500 hover:text-yellow-500"
    >
      Products
    </Link>

    <span>/</span>

    <span className="text-gray-500">
      {product.category}
    </span>

    <span>/</span>

    <span className="font-semibold text-[#0B1F3A]">
      {product.name}
    </span>

  </div>

  {/* Category */}
  <span className="bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full">
    {product.category}
  </span>

  {/* Product Name */}
  <h1 className="text-6xl font-bold mt-6">
    {product.name}
  </h1>

            <div className="mt-30">
  <div className="flex gap-4 mb-8">
  <button
    onClick={() => setActiveTab("features")}
    className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
      activeTab === "features"
        ? "bg-yellow-400 text-black shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    KEY FEATURES
  </button>

  <button
    onClick={() => setActiveTab("description")}
    className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
      activeTab === "description"
        ? "bg-[#0B1F3A] text-white shadow-lg"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`}
  >
    DESCRIPTION
  </button>
  </div>

 

  {/* Specifications Tab */}
 <div className="mt-8 min-h-[250px]">

  {activeTab === "features" ? (

    <ul className="space-y-4">
      {product.features?.map((feature, index) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
          <span className="text-yellow-500">✔</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>

  ) : (

    <div className="space-y-3">

      {Object.entries(product.specification || {}).map(
        ([key, value]) => (
          <div
            key={key}
            className="flex justify-between border-b py-3"
          >
            <span className="font-semibold">
              {key}
            </span>

            <span>
              {value}
            </span>
          </div>
        )
      )}

    </div>

  )}

 </div>
          </div>
<div className="grid grid-cols-2 gap-4 mt-6">
   <div className="bg-white p-4 rounded-lg shadow">
    ISI Certified
   </div>

  <div className="bg-white p-4 rounded-lg shadow">
    Premium Quality
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    Durable Material
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    Industrial Grade
  </div>
 </div>
            
          </div>
                      

        </div>

      </div>
  
      {/* Related Products */}
 <div className="mt-20">
  <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
    Related Products
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {relatedProducts.map(([key, item]) => (
      <Link
        key={key}
        to={`/product/${key}`}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-contain p-4"
        />

        <div className="p-4">
          <h3 className="font-bold text-[#0B1F3A]">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {item.category}
          </p>

          <span className="inline-block mt-4 text-yellow-500 font-semibold">
            View Product →
          </span>
        </div>
      </Link>
    ))}

  </div>
  </div>
    </section>
    
  </>
);

}

export default ProductDetail;