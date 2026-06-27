import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";

function IndustrialSafetyHyderabad() {
  return (
    <>
      <Helmet>
        <title>
          Industrial Safety Products Hyderabad |
          Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content="Looking for industrial safety products in Hyderabad? Maxx Challenger Safety Products supplies safety shoes, helmets, PPE kits, gloves, reflective jackets, gumboots and road safety products."
        />

        <meta
          name="keywords"
          content="industrial safety products Hyderabad, PPE suppliers Hyderabad, industrial safety equipment Hyderabad, safety products Hyderabad"
        />
      </Helmet>

      <div className="bg-[#F8FAFC]">

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white py-24 text-center">

          <div className="max-w-5xl mx-auto px-6">

            <span className="text-yellow-400 uppercase tracking-widest font-semibold">
              Industrial Safety Equipment
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Industrial Safety Products
              in Hyderabad
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Trusted manufacturer and supplier of
              industrial safety products in Hyderabad
              including safety shoes, helmets, gloves,
              PPE products, reflective jackets and
              road safety equipment.
            </p>

          </div>

        </section>

        {/* Content */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="bg-white rounded-[35px] p-10 shadow-md">

              <h2 className="text-4xl font-bold text-[#0B1F3A]">
                Trusted Industrial Safety Products Manufacturer and
                Supplier in Hyderabad
              </h2>

              <p className="text-gray-600 mt-6 leading-8 text-lg">
                Maxx Challenger Safety Products is one
                of the trusted manufacturer and suppliers of industrial
                safety products in Hyderabad, serving
                factories, warehouses, construction
                companies, logistics firms and industrial
                businesses with premium workplace safety
                solutions.
              </p>

              <p className="text-gray-600 mt-6 leading-8 text-lg">
                We supply premium quality safety shoes,
                industrial safety helmets, safety gloves,
                reflective jackets, gumboots and road
                safety products at competitive pricing
                with reliable delivery.
              </p>

              <h2 className="text-3xl font-bold text-[#0B1F3A] mt-12">
                Our Industrial Safety Products
              </h2>

              <ul className="grid md:grid-cols-2 gap-5 mt-8 text-lg text-gray-700">

                <li>✔ Safety Shoes</li>
                <li>✔ Safety Helmets</li>
                <li>✔ PPE Products</li>
                <li>✔ Reflective Jackets</li>
                <li>✔ Safety Gloves</li>
                <li>✔ Safety Gumboots</li>
                <li>✔ Road Safety Products</li>
                <li>✔ Construction Safety Equipment</li>

              </ul>

              <h2 className="text-3xl font-bold text-[#0B1F3A] mt-14">
                Industries We Serve
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

                {[
                  "Construction",
                  "Manufacturing",
                  "Warehousing",
                  "Logistics",
                  "Infrastructure",
                  "Engineering",
                  "Factories",
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

            </div>

          </div>

        </section>

        <CTA />

      </div>
    </>
  );
}

export default IndustrialSafetyHyderabad;