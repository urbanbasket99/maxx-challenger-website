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
<certifications/>
      <CTA />
    </>
  );
}

export default Home;