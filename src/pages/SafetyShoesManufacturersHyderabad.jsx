import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function SafetyShoesManufacturersHyderabad() {
  return (
    <>
      <Helmet>
        <title>
          Safety Shoes Manufacturers Hyderabad | Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content="Leading Safety Shoes Manufacturers in Hyderabad offering IS certified industrial safety shoes, steel toe shoes, PU sole safety footwear and protective footwear for construction, manufacturing and industrial workplaces."
        />

        <meta
          name="keywords"
          content="Safety Shoes Manufacturers Hyderabad, Industrial Safety Shoes Hyderabad, Steel Toe Safety Shoes Hyderabad, Safety Footwear Manufacturers Hyderabad"
        />
      </Helmet>

      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Safety Shoes Manufacturers Hyderabad
          </h1>

          <p className="text-xl max-w-4xl mx-auto">
            Maxx Challenger Safety Products is one of the leading Safety Shoes
            Manufacturers in Hyderabad supplying premium industrial safety
            footwear for construction, manufacturing, engineering, logistics,
            warehousing and industrial workplaces.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">
            Industrial Safety Shoes Supplier in Hyderabad
          </h2>

          <p className="text-gray-700 leading-8">
            Industrial workplaces require reliable foot protection against
            impact, compression, slips, punctures and workplace hazards.
            Maxx Challenger manufactures and supplies high-quality safety shoes
            designed to provide superior protection, durability and comfort.
          </p>

          <p className="text-gray-700 leading-8 mt-4">
            Our range includes steel toe safety shoes, PU sole safety shoes,
            leather safety shoes and industrial protective footwear suitable
            for construction sites, factories, warehouses and heavy industries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-10">
            Why Choose Maxx Challenger Safety Shoes?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Steel Toe Protection
              </h3>
              <p>
                Protection against impact and compression hazards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Anti-Slip Sole
              </h3>
              <p>
                Excellent grip on industrial floors and work sites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Durable Construction
              </h3>
              <p>
                Built to withstand demanding industrial environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Comfortable Fit
              </h3>
              <p>
                Designed for long working hours and worker comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-8">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg">
              Construction Industry
            </div>

            <div className="border p-6 rounded-lg">
              Manufacturing Plants
            </div>

            <div className="border p-6 rounded-lg">
              Engineering Industries
            </div>

            <div className="border p-6 rounded-lg">
              Warehouses & Logistics
            </div>

            <div className="border p-6 rounded-lg">
              Infrastructure Projects
            </div>

            <div className="border p-6 rounded-lg">
              Oil & Gas Industry
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold text-xl">
                Do you supply safety shoes in bulk?
              </h3>
              <p>
                Yes. We supply safety shoes for industrial projects,
                factories and construction companies across India.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Are your safety shoes suitable for construction sites?
              </h3>
              <p>
                Yes. Our safety shoes are designed for construction,
                manufacturing and industrial environments.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Do you provide delivery across Telangana?
              </h3>
              <p>
                Yes. We supply throughout Hyderabad, Telangana and India.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Looking for Safety Shoes Manufacturers in Hyderabad?
          </h2>

          <p className="text-xl mb-8">
            Contact Maxx Challenger Safety Products today for industrial safety
            shoes, bulk orders and customized requirements.
          </p>

          <a
            href="tel:+916300135294"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold inline-block"
          >
            Call Now
          </a>

        </div>
      </section>
    </>
  );
}

export default SafetyShoesManufacturersHyderabad;