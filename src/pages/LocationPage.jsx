import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ShieldCheck,
  Factory,
  Truck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Phone,
} from "lucide-react";
import { useState } from "react";

import locations from "../data/locations";
import FinalCTA from "../components/FinalCTA";

function LocationPage() {
  const { city } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const location = locations.find((item) => item.slug === city);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0B1F3A]">
            Location Not Found
          </h1>

          <Link
            to="/"
            className="inline-block mt-6 bg-[#0B1F3A] text-white px-6 py-3 rounded-full"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const products = [
    {
      title: "Safety Shoes",
      description:
        "Industrial safety shoes designed for protection, comfort and everyday workplace use.",
      link: "/products/safety-shoes",
    },
    {
      title: "Safety Helmets",
      description:
        "Industrial safety helmets for construction, manufacturing and other work environments.",
      link: "/products/safety-helmets",
    },
    {
      title: "PVC Gumboots",
      description:
        "Waterproof PVC gumboots suitable for wet, muddy and demanding working conditions.",
      link: "/pvc-gumboots",
    },
    {
      title: "Safety Gloves",
      description:
        "Protective gloves for handling, industrial work and workplace applications.",
      link: "/products/safety-gloves",
    },
    {
      title: "Reflective Jackets",
      description:
        "High-visibility reflective jackets for construction, roadwork and industrial sites.",
      link: "/products/reflective-jackets",
    },
    {
      title: "Safety Belts",
      description:
        "Work-at-height safety equipment for suitable industrial and construction applications.",
      link: "/products/safety-belts",
    },
  ];

  const benefits = [
    "Wide range of industrial PPE products",
    "Products for factories, construction and infrastructure",
    "Bulk order and dealer enquiries",
    "Product information and quotation support",
    "Service for businesses and industrial customers",
    "Convenient enquiry through phone and WhatsApp",
  ];

  const faqs = [
    {
      question: `What safety products are available in ${location.city}?`,
      answer: `Maxx Challenger Safety Products offers safety shoes, safety helmets, PVC gumboots, safety gloves, reflective jackets, safety belts and other workplace safety products for suitable industrial applications in and around ${location.city}.`,
    },
    {
      question: `Do you supply safety products to businesses in ${location.city}?`,
      answer: `Yes. Businesses, contractors, factories, construction companies, warehouses and other organizations in ${location.city} can contact us for product details, bulk requirements and quotations.`,
    },
    {
      question: "Can I enquire about bulk orders?",
      answer:
        "Yes. You can contact our team with the required product, quantity, delivery location and any specific requirements. Our team can provide product information and quotation details.",
    },
    {
      question: "How can I contact Maxx Challenger?",
      answer:
        "You can contact us through WhatsApp, phone or the contact form on our website. Please share your product requirement and location for a faster response.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>

        <meta
          name="description"
          content={location.metaDescription}
        />

        <link
          rel="canonical"
          href={`https://www.maxxchallengersafety.com/locations/${location.slug}`}
        />

        <meta
          property="og:title"
          content={location.metaTitle}
        />

        <meta
          property="og:description"
          content={location.metaDescription}
        />

        <meta
          property="og:url"
          content={`https://www.maxxchallengersafety.com/locations/${location.slug}`}
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="bg-[#F8FAFC] text-[#0B1F3A]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              to="/"
              className="hover:text-[#0B1F3A]"
            >
              Home
            </Link>

            <span>/</span>

            <span>Locations</span>

            <span>/</span>

            <span className="text-[#0B1F3A] font-medium">
              {location.city}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white mt-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-7">
                <MapPin size={16} />
                Serving {location.city}, {location.state}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {location.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                {location.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918328310975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0B1F3A] px-7 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
                >
                  Enquire on WhatsApp
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0B1F3A] transition"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">
                Industrial PPE Solutions
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Workplace Safety Products in{" "}
                {location.city}
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Maxx Challenger Safety Products supplies industrial safety
                equipment and personal protective products for factories, construction companies, warehouses
                and infrastructure projects.
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Our product range is intended to support workplace protection
                requirements across different industries. Customers in{" "}
                {location.city} and nearby areas can contact us for product
                details, bulk requirements, dealer enquiries and quotations.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-7 font-bold text-[#0B1F3A] hover:text-yellow-600 transition"
              >
                Explore All Products
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-[30px] p-8 md:p-10 shadow-sm border border-slate-100">

              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Our Safety Product Categories
                  </h3>

                  <p className="text-slate-500 mt-1">
                    Industrial PPE and workplace safety equipment
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Safety Shoes",
                  "Safety Helmets",
                  "PVC Gumboots",
                  "Safety Gloves",
                  "Reflective Jackets",
                  "Safety Belts",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600 shrink-0"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Products */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">
                Product Range
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Industrial Safety Products Available in{" "}
                {location.city}
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Explore our range of personal protective equipment and
                industrial safety products for different workplace needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="group border border-slate-200 rounded-[25px] p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-12 h-12 bg-[#0B1F3A] text-white rounded-xl flex items-center justify-center">
                    <Factory size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {product.description}
                  </p>

                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 mt-6 font-semibold text-[#0B1F3A] hover:text-yellow-600 transition"
                  >
                    View Products
                    <ArrowRight size={17} />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Supporting Workplace Safety Requirements
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                We understand that different industries require different
                types of protective equipment. Our team helps businesses
                explore suitable product options based on their applications
                and requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
                >
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <p className="mt-3 text-slate-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Industries */}
        <section className="bg-[#0B1F3A] text-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-400">
                Industries We Serve
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                PPE Solutions for Different Work Environments
              </h2>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Our products can support safety requirements across a range
                of industrial and commercial work environments, depending on
                the application and required protection.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {location.industries.map((industry) => (
                <div
                  key={industry}
                  className="border border-white/15 bg-white/5 rounded-2xl p-6"
                >
                  <Factory
                    size={25}
                    className="text-yellow-400"
                  />

                  <h3 className="mt-5 font-semibold text-lg">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Areas */}
        <section className="bg-slate-100 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="flex items-start gap-4">
              <MapPin
                size={30}
                className="text-yellow-600 mt-1 shrink-0"
              />

              <div>
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">
                  Service Areas
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                  Areas Around {location.city}
                </h2>

                <p className="mt-5 text-slate-600 leading-relaxed max-w-3xl">
                  We welcome enquiries from businesses and customers in{" "}
                  {location.city} and nearby areas, subject to product
                  availability, order requirements and delivery arrangements.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {location.areas.map((area) => (
                <span
                  key={area}
                  className="bg-white border border-slate-200 px-5 py-3 rounded-full text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-slate-100 rounded-[25px] p-8 shadow-sm">
              <MapPin
                size={28}
                className="text-yellow-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Location-Based Enquiries
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Share your city, product requirement and quantity with our
                team.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-[25px] p-8 shadow-sm">
              <Truck
                size={28}
                className="text-yellow-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Bulk Requirements
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Enquire about bulk orders, dealer requirements and delivery
                possibilities.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-[25px] p-8 shadow-sm">
              <Phone
                size={28}
                className="text-yellow-600"
              />

              <h3 className="mt-5 text-xl font-bold">
                Talk to Our Team
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Contact us through WhatsApp or phone for product assistance
                and quotations.
              </p>

              <a
                href="https://wa.me/918328310975"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 font-bold text-[#0B1F3A] hover:text-yellow-600"
              >
                Start Enquiry
                <ArrowRight size={17} />
              </a>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.2em] font-bold text-yellow-600">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                Safety Product Enquiries in {location.city}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border border-slate-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between gap-5 text-left px-6 py-5 font-bold text-[#0B1F3A]"
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          title={`Looking for Safety Products in ${location.city}?`}
          description="Contact Maxx Challenger Safety Products for product details, quotations and business enquiries."
        />

      </main>
    </>
  );
}

export default LocationPage;