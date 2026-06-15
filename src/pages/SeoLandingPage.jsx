import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import seoPages from "../data/seoData";
import CTA from "../components/CTA";

function SeoLandingPage() {
  const { slug } = useParams();

  const data = seoPages[slug];

  if (!data) {
    return (
      <div className="text-center py-40 text-4xl font-bold">
        Page Not Found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title}</title>

        <meta
          name="description"
          content={data.description}
        />
      </Helmet>

      <div className="bg-[#F8FAFC]">

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white py-24 text-center">

          <div className="max-w-5xl mx-auto px-6">

            <span className="text-yellow-400 uppercase tracking-widest font-semibold">
              Hyderabad Industrial Safety
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              {data.title}
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              {data.description}
            </p>

          </div>

        </section>

        {/* Content */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-[#0B1F3A]">
  Trusted Supplier in Hyderabad
</h2>

<p className="text-gray-600 mt-6 text-lg leading-8">
  Maxx Challenger Safety Products is a trusted
  supplier of premium industrial safety products
  in Hyderabad, serving industries in Jeedimetla,
  Kukatpally, Patancheru, Balanagar, Medchal,
  Cherlapally and nearby industrial areas.
</p>

<p className="text-gray-600 mt-5 text-lg leading-8">
  We provide premium workplace safety equipment
  for factories, warehouses, construction sites,
  engineering companies and industrial businesses
  with competitive pricing and reliable delivery.
</p>

{/* Products */}
<h2 className="text-3xl font-bold mt-12 text-[#0B1F3A]">
  Products We Supply
</h2>

<div className="grid md:grid-cols-2 gap-5 mt-8">

  {data.products.map((item, index) => (
    <div
      key={index}
      className="bg-[#F8FAFC] rounded-2xl p-5 shadow-sm font-semibold"
    >
      ✔ {item}
    </div>
  ))}

</div>

{/* Industries */}
<h2 className="text-3xl font-bold mt-14 text-[#0B1F3A]">
  Industries We Serve
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

  {[
    "Construction",
    "Manufacturing",
    "Warehousing",
    "Logistics",
    "Engineering",
    "Factories",
    "Infrastructure",
    "Industrial Plants",
  ].map((item, index) => (
    <div
      key={index}
      className="bg-[#F8FAFC] rounded-2xl p-5 text-center shadow-sm font-semibold"
    >
      {item}
    </div>
  ))}

</div>

{/* Internal Links */}
<h2 className="text-3xl font-bold mt-14 text-[#0B1F3A]">
  Explore Safety Products
</h2>

<div className="flex flex-wrap gap-4 mt-8">

  <Link
    to="/products/safety-helmets"
    className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
  >
    Safety Helmets
  </Link>

  <Link
    to="/products/safety-shoes"
    className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
  >
    Safety Shoes
  </Link>

  <Link
    to="/products/safety-gloves"
    className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
  >
    Safety Gloves
  </Link>

</div>

{/* FAQ */}
<h2 className="text-3xl font-bold mt-14 text-[#0B1F3A]">
  Frequently Asked Questions
</h2>

<div className="space-y-6 mt-8">

  <div className="bg-[#F8FAFC] p-6 rounded-2xl">
    <h3 className="font-bold text-xl">
      Do you provide bulk industrial safety products?
    </h3>

    <p className="text-gray-600 mt-3">
      Yes, we supply bulk orders for factories,
      warehouses, construction companies and
      industrial businesses in Hyderabad.
    </p>
  </div>

  <div className="bg-[#F8FAFC] p-6 rounded-2xl">
    <h3 className="font-bold text-xl">
      Which areas do you supply in Hyderabad?
    </h3>

    <p className="text-gray-600 mt-3">
      We supply safety products in Jeedimetla,
      Kukatpally, Balanagar, Medchal,
      Patancheru, Cherlapally and nearby areas.
    </p>
  </div>

</div>

          </div>

        </section>

        <CTA />

      </div>
    </>
  );
}

export default SeoLandingPage;