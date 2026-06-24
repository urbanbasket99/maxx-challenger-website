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
    name: "Steel Toe Safety Shoe",
    bestFor: "Automobile & Heavy Manufacturing",
    certification: "IS 15298 Part 2",
    moq: "50 Pairs",
  },

  {
    name: "Anti-Static (ESD) Safety Shoe",
    bestFor: "Electronics & Pharma",
    certification: "IS 15298 + EN ISO 20345",
    moq: "50 Pairs",
  },

  {
    name: "Chemical Resistant Safety Shoe",
    bestFor: "Chemical Processing Plants",
    certification: "IS 15298",
    moq: "50 Pairs",
  },

  {
    name: "Lightweight Composite Toe Safety Shoe",
    bestFor: "Long Shift Workers",
    certification: "IS 15298",
    moq: "50 Pairs",
  },
];
const industryRows = [
  [
    "Automobile / Auto Components",
    "Heavy parts, oil spills",
    "Steel toe + oil resistant sole",
  ],
  [
    "Pharmaceuticals",
    "Static, long shifts",
    "Composite toe + ESD",
  ],
  [
    "Food Processing",
    "Wet floors",
    "Steel toe + waterproof",
  ],
  [
    "Electronics",
    "Static discharge",
    "Composite toe + ESD",
  ],
  [
    "Chemical Processing",
    "Chemical spills",
    "Chemical resistant sole",
  ],
  [
    "Textile",
    "Long standing shifts",
    "Lightweight composite toe",
  ],
  [
    "Metal Fabrication",
    "Heavy impact",
    "Steel toe + heat resistant sole",
  ],
  [
    "Paper / Packaging",
    "Slippery surfaces",
    "SRC slip resistant shoe",
  ],
];
const certifications = [
  {
    title: "IS 15298 Part 1 & 2",
    description:
      "India BIS standard for industrial safety footwear.",
  },
  {
    title: "EN ISO 20345",
    description:
      "European safety footwear standard.",
  },
  {
    title: "ESD / Anti-Static",
    description:
      "Electrostatic dissipative footwear.",
  },
  {
    title: "SRC Slip Resistance",
    description:
      "Highest slip resistance rating.",
  },
  {
    title: "200J Toe Cap",
    description:
      "Impact protection against falling objects.",
  },
  {
    title: "Oil Resistant Sole",
    description:
      "Suitable for industrial environments.",
  },
];
const steps = [
  {
    title: "Share Your Requirement",
    description:
      "Factory type, worker count and certification needs.",
  },
  {
    title: "Get a Custom Quote",
    description:
      "Pricing with GST breakup within 24 hours.",
  },
  {
    title: "Sample Evaluation",
    description:
      "Trial samples before bulk confirmation.",
  },
  {
    title: "Delivery & Documentation",
    description:
      "Bulk delivery with certification documents.",
  },
];
const faqs = [
  {
    question:
      "What safety shoes are legally required for factory workers in India?",
    answer:
      "Under the Factories Act 1948, employers must provide appropriate PPE including IS 15298 certified safety footwear.",
  },
  {
    question:
      "What is the difference between steel toe and composite toe safety shoes?",
    answer:
      "Steel toe offers maximum impact protection while composite toe is lighter and metal detector friendly.",
  },
  {
    question:
      "What are ESD or anti-static safety shoes and when are they needed?",
    answer:
      "ESD shoes safely dissipate static electricity and are used in electronics, pharma and clean-room environments.",
  },
  {
    question:
      "How often should factory safety shoes be replaced?",
    answer:
      "Typically every 6–12 months depending on wear and working conditions.",
  },
  {
    question:
      "Can you supply safety shoes on an Annual Rate Contract for our factory?",
    answer:
      "Yes. We support annual PPE contracts with scheduled deliveries.",
  },
  {
    question:
      "What is the minimum order quantity for factory safety shoes?",
    answer:
      "Our standard MOQ is 50 pairs.",
  },
  {
    question:
      "Do you supply industrial safety shoes to factories in Hyderabad and Telangana?",
    answer:
      "Yes. We supply throughout Hyderabad, Telangana and across India.",
  },
];

function SafetyShoesForFactoryWorkers() {
return (
<> <Helmet> <title>
Safety Shoes for Factory Workers | Bulk Supply India </title>

```
    <meta
      name="description"
      content="IS 15298 certified safety shoes for manufacturing & factory workers. Steel toe, anti-static, oil resistant. Bulk orders with pan-India delivery."
    />

    <meta
      name="keywords"
      content="safety shoes for factory workers India, industrial safety footwear manufacturer India, steel toe shoes for manufacturing plant, anti-static safety shoes factory bulk supply"
    />
  </Helmet>

  {/* HERO SECTION */}

  <section className="bg-[#0B1F3A] text-white py-24">
    <div className="max-w-7xl mx-auto px-6 text-center">

      <h1 className="text-5xl font-bold mb-6">
        IS 15298 Certified Safety Shoes for Factory & Manufacturing Workers — Bulk Supply Across India
      </h1>

      <p className="text-xl max-w-4xl mx-auto mb-8">
        Bulk supply of industrial safety footwear for automobile,
        pharmaceutical, food processing, textile and heavy manufacturing
        plants across India.
      </p>

      <a
        href="/contact"
        className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold"
      >
        Request a Bulk Quote →
      </a>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 text-sm">

        <div>✅ IS 15298 / ISI Certified</div>
        <div>✅ Anti-Static (ESD) Options</div>
        <div>✅ Oil Resistant Soles</div>
        <div>✅ Chemical Resistant Options</div>
        <div>✅ MOQ from 50 Pairs</div>
        <div>✅ Pan India Delivery</div>

      </div>

    </div>
  </section>

  {/* WHY FACTORY WORKERS NEED SPECIALISED FOOTWEAR */}

  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-[#0B1F3A] mb-8">
        Factory Floor Hazards Are Different From Construction Sites — Your Footwear Should Be Too
      </h2>

      <p className="text-gray-700 leading-8">
        Manufacturing and factory environments present a distinct set of
        foot hazards including heavy machinery, falling components, oil
        and chemical spills, static electricity near sensitive equipment
        and long shifts on hard concrete floors.
      </p>

      <p className="text-gray-700 leading-8 mt-4">
        Under the Factories Act 1948, employers are required to provide
        appropriate PPE including safety footwear for workers exposed to
        foot injury risks. IS 15298 is India's BIS standard for safety
        footwear, but selecting the correct specification is critical.
      </p>

      <p className="text-gray-700 leading-8 mt-4">
        Our industrial safety shoes are available in steel toe,
        composite toe, anti-static (ESD), oil resistant and
        chemical resistant variants matched to your specific
        manufacturing environment.
      </p>

    </div>
  </section>

  {/* PRODUCT RANGE */}

 <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="PRODUCT RANGE"
      title="Matched to Your Manufacturing Environment"
      description="Industrial footwear engineered for specific factory hazards."
    />

    <ProductCards products={products} />

  </div>
</section>

  {/* FACTORY TYPE MATCHING */}

  <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="SPECIFICATION GUIDE"
      title="Which Safety Shoe Is Right for Your Factory?"
      description="Map your industry to the correct safety footwear specification."
    />

    <IndustryTable
      headers={[
        "Factory / Industry",
        "Key Hazard",
        "Recommended Shoe",
      ]}
      rows={industryRows}
    />

  </div>
</section>
  {/* CERTIFICATIONS & STANDARDS */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="CERTIFICATIONS & STANDARDS"
      title="Every Pair We Supply Meets These Standards"
      description="Certification documentation supplied with every order."
    />

    <CertificationCards
      items={certifications}
    />

  </div>
</section>

{/* ANNUAL RATE CONTRACT */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

```
<h2 className="text-4xl font-bold mb-8">
  Annual PPE Supply Contracts for Manufacturing Plants
</h2>

<p className="text-gray-700 leading-8">
  Most manufacturing facilities replace worker safety footwear
  every 6–12 months. We support Annual Rate Contract (ARC)
  arrangements for factories with 50+ workers, providing
  fixed pricing, scheduled deliveries and priority stock allocation.
</p>

<p className="text-gray-700 leading-8 mt-4">
  Benefits include locked-in pricing, quarterly or annual delivery
  schedules, dedicated account management and GST-compliant
  invoicing for every supply cycle.
</p>

<a
  href="/contact"
  className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold"
>
  Enquire About Annual Rate Contracts →
</a>
```

  </div>
</section>

{/* INDUSTRIES WE SUPPLY */}

<section className="py-20 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">

```
<h2 className="text-4xl font-bold mb-10">
  Trusted by Manufacturing Plants and Industrial Units Across India
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white p-6 rounded-lg shadow">
    Automobile & Auto Component Plants
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Pharmaceutical Manufacturing Units
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Chemical Processing Plants
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Food Processing Factories
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Electronics Manufacturing Units
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Textile & Garment Factories
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Metal Fabrication Units
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    Paper & Packaging Industries
  </div>

</div>
```

  </div>
</section>

{/* BULK ORDER PROCESS */}

<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <SectionHeader
      eyebrow="HOW TO ORDER"
      title="Safety Shoes for Your Factory Team in 4 Steps"
    />

    <ProcessSteps steps={steps} />

  </div>
</section>
{/* FAQ SECTION */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <SectionHeader
      eyebrow="COMMON QUESTIONS"
      title="Frequently Asked Questions"
    />

    <FAQAccordion faqs={faqs} />

  </div>
</section>

{/* FINAL CTA */}

<FinalCTA
  title="Protect Your Factory Workers — From The Ground Up"
  description="Whether you need 50 pairs or 2,000 pairs, we supply IS 15298 certified safety footwear with pan-India delivery, GST invoicing and annual contract options."
/>
</>


);
}

export default SafetyShoesForFactoryWorkers;
