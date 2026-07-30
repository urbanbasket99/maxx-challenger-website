import { Helmet } from "react-helmet-async";
import { Download } from "lucide-react";

export default function Catalogue() {
  return (
    <>
      <Helmet>
        <title>Product Catalog | Maxx Challenger Safety Products</title>
        <meta
          name="description"
          content="Download the complete Maxx Challenger Safety Products Catalog."
        />
      </Helmet>

      {/* Hero */}

      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Product Catalog
          </h1>

              </div>
      </section>

      {/* Catalogue */}

      <section className="py-5 bg-[#F8FAFC]">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-[30px] shadow-xl p-10 text-center">

         
            <h2 className="text-4xl font-bold text-[#0B1F3A] mt-10">
              Maxx Challenger Product Catalog
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              Explore our complete range of industrial safety products,
              including Safety Shoes, Safety Helmets, PVC Gumboots,
              Reflective Jackets, Safety Gloves, Fall Protection,
              Road Safety Equipment and other PPE solutions.
            </p>

            <a
              href="/catalogues/MAXX-CHALLENGER-CATALOGUE.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-[#0B1F3A] hover:bg-yellow-500 hover:text-[#0B1F3A] text-white px-10 py-5 rounded-full font-semibold transition-all duration-300"
            >
              <Download size={22} />
              Download Catalog
            </a>

          </div>

        </div>

      </section>
    </>
  );
}