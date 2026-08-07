import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import StatsSection from "../components/StatsSection";
import isiLogo from "../assets/certifications/isi.png";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <SEO
  title="Industrial Safety Products in Hyderabad | Maxx Challenger Safety Products"
  description="Maxx Challenger Safety Products is a trusted supplier of industrial safety products in Hyderabad including helmets, gloves, safety shoes, jackets, gumboots and road safety equipment."
  keywords="industrial safety products Hyderabad, safety helmets Hyderabad, safety shoes Hyderabad, PPE products Hyderabad"
  canonical="https://maxxchallengersafety.com/"
/>

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
       Explore Our Complete Safety Product Range
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Explore our most requested industrial safety products for
        construction companies, infrastructure projects, factories,
        EPC contractors, and industrial workplaces across India.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <Link
    to="/products/foot-protection"
    className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-[#0B1F3A]">
      Safety Shoes
    </h3>

    <p className="text-gray-600 mt-3">
      Premium industrial safety shoes with steel toe protection for construction, factories, engineering and manufacturing industries.
    </p>
  </Link>

  <Link
    to="/products/head-protection"
    className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-[#0B1F3A]">
      Safety Helmets
    </h3>

    <p className="text-gray-600 mt-3">
      ISI-certified industrial safety helmets with ratchet and pinlock suspension for maximum head protection.
    </p>
  </Link>

  <Link
    to="/pvc-gumboots"
    className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-[#0B1F3A]">
      PVC Gumboots
    </h3>

    <p className="text-gray-600 mt-3">
      Heavy-duty PVC gumboots designed for industrial, chemical and construction applications.
    </p>
  </Link>

  {/*<Link
    to="/products/body-protection"
    className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
  >
    <h3 className="text-xl font-bold text-[#0B1F3A]">
      Reflective Jackets
    </h3>

    <p className="text-gray-600 mt-3">
      High-visibility reflective jackets for road safety, construction and industrial workplaces.
    </p>
  </Link>*/}

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