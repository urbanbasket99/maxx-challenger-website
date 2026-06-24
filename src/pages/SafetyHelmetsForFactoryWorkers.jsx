import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import SectionHeader from "../components/SectionHeader";
import ProductCards from "../components/ProductCards";
import IndustryTable from "../components/IndustryTable";
import CertificationCards from "../components/CertificationCards";
import ProcessSteps from "../components/ProcessSteps";
import FAQAccordion from "../components/FAQAccordion";
import FinalCTA from "../components/FinalCTA";

const products = [
  {
    title: "HDPE Safety Helmet",
    spec: "4 Point Suspension",
    certification: "IS 2925 / ISI",
    bestFor: "General Manufacturing",
    moq: "30 Nos"
  },
  {
    title: "Ventilated Ratchet Helmet",
    spec: "6 Point Ratchet",
    certification: "IS 2925 / ISI",
    bestFor: "Long Shift Factory Workers",
    moq: "30 Nos"
  },
  {
    title: "FRP Industrial Helmet",
    spec: "High Impact Protection",
    certification: "IS 2925 / CE",
    bestFor: "Heavy Industry",
    moq: "50 Nos"
  },
  {
    title: "Helmet with Chin Strap",
    spec: "Height Safety Applications",
    certification: "IS 2925",
    bestFor: "Maintenance Teams",
    moq: "30 Nos"
  }
];

const industries = [
  {
    industry: "Automobile Manufacturing",
    hazard: "Overhead Components",
    shoe: "HDPE Ratchet Helmet"
  },
  {
    industry: "Pharmaceutical Plants",
    hazard: "Production Areas",
    shoe: "Ventilated Helmet"
  },
  {
    industry: "Food Processing",
    hazard: "Long Shift Work",
    shoe: "Lightweight Helmet"
  },
  {
    industry: "Metal Fabrication",
    hazard: "Heavy Impact Risk",
    shoe: "FRP Helmet"
  },
  {
    industry: "Warehousing",
    hazard: "Material Handling",
    shoe: "HDPE Helmet"
  },
  {
    industry: "Chemical Plants",
    hazard: "Industrial Operations",
    shoe: "FRP Helmet"
  }
];

const certifications = [
  {
    title: "IS 2925",
    desc: "BIS standard for industrial safety helmets"
  },
  {
    title: "ISI Mark",
    desc: "Mandatory compliance certification"
  },
  {
    title: "CE EN 397",
    desc: "European industrial helmet standard"
  },
  {
    title: "Impact Resistance",
    desc: "Protection against falling objects"
  },
  {
    title: "Penetration Resistance",
    desc: "Tested for workplace hazards"
  },
  {
    title: "Electrical Protection",
    desc: "Available in electrical-rated variants"
  }
];

const faqs = [
  {
    question: "What safety helmet standard is required for factory workers in India?",
    answer: "IS 2925 certified industrial safety helmets are the accepted standard for workplace head protection in India."
  },
  {
    question: "What is the difference between HDPE and FRP helmets?",
    answer: "HDPE helmets are lighter and economical. FRP helmets provide higher impact and heat resistance for demanding industrial environments."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "MOQ starts from 30 helmets for standard models."
  },
  {
    question: "Can helmets be printed with our company logo?",
    answer: "Yes. Custom logo branding is available for bulk orders."
  },
  {
    question: "Do you supply across India?",
    answer: "Yes. We supply throughout India with GST documentation."
  },
  {
    question: "Can I get samples before ordering?",
    answer: "Yes. Sample helmets can be arranged before bulk confirmation."
  }
];
function SafetyHelmetsForConstructionWorkers() {
return (
<> <Helmet>
  <title>
    Safety Helmets for Factory Workers | Bulk Supply India
  </title>

  <meta
    name="description"
    content="IS 2925 certified safety helmets for factory and manufacturing workers. HDPE, FRP, ratchet helmets for bulk orders across India."
  />

  <meta
    name="keywords"
    content="safety helmets for factory workers India, industrial safety helmet manufacturer India, IS 2925 helmets bulk supply, factory safety helmets Hyderabad"
  />
</Helmet>
  {/* HERO SECTION */}

 <section className="bg-[#0B1F3A] text-white py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h1 className="text-5xl font-bold mb-6">
      IS 2925 Certified Safety Helmets for Factory & Manufacturing Workers
    </h1>

    <p className="text-xl max-w-4xl mx-auto mb-10">
      Bulk supply of industrial safety helmets for manufacturing plants,
      automobile factories, pharmaceutical units, food processing plants,
      warehouses and heavy industries across India.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <a
        href="/contact"
        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
      >
        Request Bulk Quote
      </a>

      <a
        href="https://wa.me/916300135294"
        className="border border-white px-8 py-4 rounded-xl font-bold"
      >
        WhatsApp Now
      </a>
    </div>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
      <div>✅ IS 2925 Certified</div>
      <div>✅ ISI Marked</div>
      <div>✅ HDPE & FRP Options</div>
      <div>✅ MOQ from 30 Nos</div>
      <div>✅ Pan India Delivery</div>
      <div>✅ GST Invoice</div>
    </div>

  </div>
</section>

  {/* WHY HELMETS */}

<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="WORKPLACE SAFETY"
      title="Manufacturing Plants Present Unique Head Injury Risks"
      description="Factory environments expose workers to moving equipment, overhead loads, forklifts, conveyors and falling objects."
    />

    <div className="bg-white rounded-xl shadow p-8 leading-8 text-gray-700">
      <p>
        Manufacturing facilities expose workers to head injury hazards that are
        different from construction sites. Workers may encounter overhead
        material handling systems, cranes, forklifts, conveyor systems,
        production machinery and falling tools or components.
      </p>

      <p className="mt-4">
        Under the Factories Act 1948 and standard EHS requirements, employers
        are expected to provide appropriate PPE including industrial safety
        helmets where head injury hazards exist.
      </p>

      <p className="mt-4">
        IS 2925 certified helmets provide tested protection against impact and
        penetration hazards while ensuring worker comfort during long shifts.
      </p>
    </div>

  </div>
</section>
  {/* PRODUCT RANGE */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="PRODUCT RANGE"
      title="Industrial Safety Helmets for Manufacturing Plants"
      description="Choose the right helmet specification for your factory environment."
    />

    <ProductCards products={products} />

  </div>
</section>

  {/* HDPE VS FRP */}

 <IndustryTable
  title="Which Safety Helmet Is Right For Your Factory?"
  data={industries}
/>
  {/* CERTIFICATIONS */}

 <CertificationCards
  title="Every Helmet We Supply Meets These Standards"
  cards={certifications}
/>
  {/* SECTION 3 - CONSTRUCTION HELMET RANGE */}

<section className="pt-8 pb-20 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">

```
<h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
  The Right Helmet for Every Construction Condition
</h2>

<p className="text-gray-600 mb-10">
  Choose from multiple helmet configurations based on your site risks,
  climate conditions and compliance requirements.
</p>

<div className="grid md:grid-cols-2 gap-8">

  <div className="bg-white p-8 rounded-xl shadow">
    <h3 className="text-2xl font-bold mb-4">
      HDPE Safety Helmet — Standard
    </h3>

    <p><strong>Shell:</strong> HDPE, UV Stabilised</p>
    <p><strong>Suspension:</strong> 4 Point Nylon</p>
    <p><strong>Certification:</strong> IS 2925 ISI Marked</p>
    <p><strong>Best For:</strong> Building & Civil Construction</p>
    <p><strong>MOQ:</strong> 30 Pieces</p>

    <button className="mt-4 bg-yellow-400 px-5 py-2 rounded">
      Get Quote
    </button>
  </div>

  <div className="bg-white p-8 rounded-xl shadow">
    <h3 className="text-2xl font-bold mb-4">
      HDPE Ventilated Safety Helmet
    </h3>

    <p><strong>Shell:</strong> HDPE with Ventilation Slots</p>
    <p><strong>Suspension:</strong> 6 Point Ratchet</p>
    <p><strong>Certification:</strong> IS 2925 ISI Marked</p>
    <p><strong>Best For:</strong> Hot Outdoor Construction Sites</p>
    <p><strong>MOQ:</strong> 30 Pieces</p>

    <button className="mt-4 bg-yellow-400 px-5 py-2 rounded">
      Get Quote
    </button>
  </div>

  <div className="bg-white p-8 rounded-xl shadow">
    <h3 className="text-2xl font-bold mb-4">
      FRP Safety Helmet (Full Brim)
    </h3>

    <p><strong>Shell:</strong> Fibreglass Reinforced Plastic</p>
    <p><strong>Suspension:</strong> 6 Point with Sweatband</p>
    <p><strong>Certification:</strong> IS 2925 / CE EN 397</p>
    <p><strong>Best For:</strong> Electrical & High Impact Areas</p>
    <p><strong>MOQ:</strong> 50 Pieces</p>

    <button className="mt-4 bg-yellow-400 px-5 py-2 rounded">
      Get Quote
    </button>
  </div>

  <div className="bg-white p-8 rounded-xl shadow">
    <h3 className="text-2xl font-bold mb-4">
      HDPE Helmet with Chin Strap
    </h3>

    <p><strong>Shell:</strong> HDPE</p>
    <p><strong>Suspension:</strong> 4 Point Adjustable</p>
    <p><strong>Certification:</strong> IS 2925 ISI Marked</p>
    <p><strong>Best For:</strong> Height Work & Scaffolding</p>
    <p><strong>MOQ:</strong> 30 Pieces</p>

    <button className="mt-4 bg-yellow-400 px-5 py-2 rounded">
      Get Quote
    </button>
  </div>

</div>


  </div>
</section>



  
  {/* WHO WE SUPPLY */}

  <section className="py-20 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold mb-8">
        Supplied to Construction Companies Across India
      </h2>

      <ul className="space-y-4">
        <li>✔ Building & Civil Contractors</li>
        <li>✔ EPC Companies</li>
        <li>✔ Government Projects</li>
        <li>✔ Real Estate Developers</li>
        <li>✔ Infrastructure Projects</li>
        <li>✔ Industrial Plant Construction</li>
      </ul>

    </div>
  </section>

  {/* INTERNAL LINKS */}

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-3xl font-bold mb-8">
        Related Construction PPE
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          to="/safety-shoes-for-construction-workers"
          className="bg-[#F8FAFC] p-6 rounded-lg shadow"
        >
          Safety Shoes for Construction Workers
        </Link>

        <Link
          to="/products"
          className="bg-[#F8FAFC] p-6 rounded-lg shadow"
        >
          Reflective Jackets
        </Link>

        <Link
          to="/products"
          className="bg-[#F8FAFC] p-6 rounded-lg shadow"
        >
          PPE Kits
        </Link>

      </div>

    </div>
  </section>
  {/* SECTION 9 - FAQ */}

<FAQAccordion
  title="Frequently Asked Questions"
  faqs={faqs}
/>

  {/* FINAL CTA */}

  <section className="bg-[#0B1F3A] text-white py-20">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-4xl font-bold mb-6">
        Equip Your Site Crew with IS Certified Safety Helmets
      </h2>

      <p className="text-xl mb-8">
        Whether you need 30 helmets or 3,000 helmets,
        Maxx Challenger delivers certified industrial head protection
        with bulk supply capability across India.
      </p>

   

    </div>
  </section>

</>

);
}

export default SafetyHelmetsForConstructionWorkers;
