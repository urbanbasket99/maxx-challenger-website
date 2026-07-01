import gumboot1 from "../assets/gumboots/gumboot1.jpg";
import gumboot2 from "../assets/gumboots/gumboot2.jpg";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const gumboots = [
  {
    name: "PVC Gumboot - Double Colour",
    image: gumboot1,
    desc: "Heavy-duty double colour PVC gumboot with anti-skid sole, chemical & oil resistant. Ideal for construction, manufacturing and agriculture.",
    slug: "pvc-gumboot-double-colour",
  },

  {
    name: "PVC Gumboot - Regular",
    image: gumboot2,
    desc: "Regular PVC gumboot with oil resistant outsole and waterproof construction for industrial and workplace protection.",
    slug: "pvc-gumboot-regular",
  },
];
console.log(gumboots);
console.log(gumboots.length);
function PVCGumboots() {
  return (
    <div className="bg-[#F8FAFC]">

      {/* HERO */}

      <section className="bg-[#0B1F3A] text-white py-24 text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Industrial PVC Gumboots
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Premium waterproof PVC safety gumboots for construction,
            agriculture, food processing, mining, chemical and
            manufacturing industries.
          </p>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {gumboots.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
        >

          <div className="h-[300px] flex items-center justify-center p-6">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full object-contain"
            />
          </div>

          <div className="p-6">

            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm">
              Industrial Safety
            </span>

            <h3 className="text-2xl font-bold text-[#0B1F3A] mt-5">
              {item.name}
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              {item.desc}
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="https://wa.me/918328310975"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-5 py-3 rounded-full"
              >
                WhatsApp
              </a>

              <Link
                to={`/product/${item.slug}`}
                className="bg-[#0B1F3A] text-white px-5 py-3 rounded-full"
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
      {/* FEATURES */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A] mb-16">
            Why Choose Our PVC Gumboots?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-[#F8FAFC] p-8 rounded-[25px] shadow">
              <h3 className="font-bold text-xl mb-3">
                100% Waterproof
              </h3>

              <p>
                Seamless single-piece PVC construction keeps feet dry in wet conditions.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-[25px] shadow">
              <h3 className="font-bold text-xl mb-3">
                Anti-Slip Sole
              </h3>

              <p>
                Deep cleated outsole provides excellent grip on slippery surfaces.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-[25px] shadow">
              <h3 className="font-bold text-xl mb-3">
                Chemical Resistant
              </h3>

              <p>
                Resistant to oils, acids, alkalis and industrial chemicals.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-[25px] shadow">
              <h3 className="font-bold text-xl mb-3">
                Comfortable Fit
              </h3>

              <p>
                Ergonomic footbed reduces fatigue during long working hours.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A] mb-16">
            Engineered for Demanding Industries
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-[25px] shadow">
              🌾 Agriculture & Farming
            </div>

            <div className="bg-white p-8 rounded-[25px] shadow">
              🏗 Construction
            </div>

            <div className="bg-white p-8 rounded-[25px] shadow">
              🧪 Chemical Industries
            </div>

            <div className="bg-white p-8 rounded-[25px] shadow">
              🏭 Manufacturing
            </div>

            <div className="bg-white p-8 rounded-[25px] shadow">
              🍗 Food Processing
            </div>

            <div className="bg-white p-8 rounded-[25px] shadow">
              ⛏ Mining & Aquaculture
            </div>

          </div>

        </div>

      </section>

      {/* SPECIFICATIONS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A] mb-12">
            Technical Specifications
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border">

              <thead className="bg-[#0B1F3A] text-white">

                <tr>

                  <th className="p-4">Feature</th>
                  <th>Regular</th>
                  <th>Double Colour</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border">
                  <td className="p-4">Material</td>
                  <td>PVC</td>
                  <td>PVC</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Height</td>
                  <td>11 Inches</td>
                  <td>13 Inches</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Waterproof</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Oil Resistant</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Steel Toe</td>
                  <td>Optional</td>
                  <td>Available</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <CTA />

    </div>
  );
}

export default PVCGumboots;