import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import StatsSection from "../components/StatsSection";
import isiLogo from "../assets/certifications/isi.png";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Industrial Safety Products in Hyderabad |
          Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content="Maxx Challenger Safety Products is a trusted supplier of industrial safety products in Hyderabad including helmets, gloves, safety shoes, jackets, gumboots and road safety equipment."
        />

        <meta
          name="keywords"
          content="industrial safety products Hyderabad, safety helmets Hyderabad, safety shoes Hyderabad, PPE products Hyderabad"
        />
      </Helmet>

      <Hero />
       <ProductCategories />
      <AboutSection />
     
      <StatsSection />
      
      <WhyChooseUs />
      {/* Popular Safety Solutions */}
<section className="py-20 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
        Popular Safety Solutions
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Explore our most requested industrial safety products for
        construction companies, infrastructure projects, factories,
        EPC contractors, and industrial workplaces across India.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Safety Shoes */}
      <a
        href="/safety-shoes-for-construction-workers"
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
      >
        <div className="text-5xl mb-4">👞</div>

        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
          Safety Shoes
        </h3>

        <p className="text-gray-600 mb-4">
          IS 15298 certified steel toe safety shoes for
          construction workers and industrial employees.
        </p>

        <span className="text-yellow-500 font-semibold">
          View Details →
        </span>
      </a>

      {/* Safety Helmets */}
      <a
        href="/safety-helmets-for-construction-workers"
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
      >
        <div className="text-5xl mb-4">⛑️</div>

        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
          Safety Helmets
        </h3>

        <p className="text-gray-600 mb-4">
          IS 2925 certified industrial safety helmets
          for construction and infrastructure projects.
        </p>

        <span className="text-yellow-500 font-semibold">
          View Details →
        </span>
      </a>

      {/* Reflective Jackets */}
      <a
        href="/reflective-jackets-for-construction-workers"
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
      >
        <div className="text-5xl mb-4">🦺</div>

        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
          Reflective Jackets
        </h3>

        <p className="text-gray-600 mb-4">
          High visibility reflective jackets for
          road projects, construction sites and industries.
        </p>

        <span className="text-yellow-500 font-semibold">
          View Details →
        </span>
      </a>

      {/* PPE Kits */}
      <a
        href="/ppe-kit-for-construction-sites"
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
      >
        <div className="text-5xl mb-4">🛡️</div>

        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
          PPE Kits
        </h3>

        <p className="text-gray-600 mb-4">
          Complete PPE kits including helmets,
          shoes, gloves, jackets and safety accessories.
        </p>

        <span className="text-yellow-500 font-semibold">
          View Details →
        </span>
      </a>

    </div>

  </div>
</section>
      <section className="bg-[#3D3D42] py-12">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-white text-center mb-10">
      OUR <span className="text-yellow-400">ACCREDITATIONS</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="text-center">
        <img
          src={isiLogo}
          alt="ISI Certification"
          className="h-20 mx-auto"
        />
        <p className="text-white font-semibold mt-4">
          IS:2925:1998
        </p>
      </div>

      <div className="text-center">
        <img
          src={isiLogo}
          alt="ISI Certification"
          className="h-20 mx-auto"
        />
        <p className="text-white font-semibold mt-4">
          IS:15298 : Part 3
        </p>
      </div>

      <div className="text-center">
        <img
          src={isiLogo}
          alt="ISI Certification"
          className="h-20 mx-auto"
        />
        <p className="text-white font-semibold mt-4">
          IS:15298 : Part 4
        </p>
      </div>

    </div>
  </div>
</section>

      <CTA />
    </>
  );
}

export default Home;