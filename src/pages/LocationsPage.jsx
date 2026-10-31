import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";

const LocationsPage = () => {
  const telanganaLocations = locations.filter(
    (location) => location.state === "Telangana"
  );

  const andhraLocations = locations.filter(
    (location) => location.state === "Andhra Pradesh"
  );

  return (
    <>
      <Helmet>
        <title>
          Industrial Safety Products Suppliers in Telangana & Andhra Pradesh |
          Maxx Challenger
        </title>

        <meta
          name="description"
          content="Maxx Challenger Safety Products supplies industrial safety shoes, helmets, PVC gumboots, gloves, reflective jackets, safety belts and PPE products across Telangana and Andhra Pradesh."
        />

        <link
          rel="canonical"
          href="https://www.maxxchallengersafety.com/locations"
        />

        <meta
          property="og:title"
          content="Industrial Safety Products Suppliers in Telangana & Andhra Pradesh | Maxx Challenger"
        />

        <meta
          property="og:description"
          content="Explore locations served by Maxx Challenger Safety Products across Telangana and Andhra Pradesh."
        />

        <meta
          property="og:url"
          content="https://www.maxxchallengersafety.com/locations"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm mb-4 text-gray-300">
            Home / Locations
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Industrial Safety Products Suppliers in Telangana & Andhra Pradesh
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            Maxx Challenger Safety Products supplies industrial safety
            equipment and PPE products to businesses, contractors,
            construction companies, manufacturing units and industrial
            workplaces across Telangana and Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-5">
            Industrial Safety Products Across Telangana & Andhra Pradesh
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            We serve businesses and industrial customers with a wide range of
            workplace safety products including safety shoes, safety helmets,
            PVC gumboots, safety gloves, reflective jackets and safety belts.
            Explore our location pages below to find information about the
            areas and industries we serve.
          </p>
        </div>
      </section>

      {/* Telangana */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-3">
              Industrial Safety Products Suppliers in Telangana
            </h2>

            <p className="text-gray-600">
              Explore our industrial safety product service locations across
              Telangana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {telanganaLocations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#0B1F3A] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                  Industrial Safety Products in {location.city}
                </h3>

                <p className="text-sm text-gray-500 mt-3">
                  Safety Shoes • Helmets • Gloves • Gumboots • PPE
                </p>

                <span className="inline-block mt-4 text-sm font-semibold text-blue-600">
                  View Location →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Andhra Pradesh */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-3">
              Industrial Safety Products Suppliers in Andhra Pradesh
            </h2>

            <p className="text-gray-600">
              Explore our industrial safety product service locations across
              Andhra Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {andhraLocations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#0B1F3A] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#0B1F3A] group-hover:text-blue-600 transition-colors">
                  Industrial Safety Products in {location.city}
                </h3>

                <p className="text-sm text-gray-500 mt-3">
                  Safety Shoes • Helmets • Gloves • Gumboots • PPE
                </p>

                <span className="inline-block mt-4 text-sm font-semibold text-blue-600">
                  View Location →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Industrial Safety Products We Supply
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">Safety Shoes</h3>
              <p className="text-sm text-gray-500 mt-2">
                Industrial and workplace safety footwear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">Safety Helmets</h3>
              <p className="text-sm text-gray-500 mt-2">
                Head protection for industrial workplaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">PVC Gumboots</h3>
              <p className="text-sm text-gray-500 mt-2">
                Protective footwear for demanding work environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">Safety Gloves</h3>
              <p className="text-sm text-gray-500 mt-2">
                Hand protection for industrial applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">Reflective Jackets</h3>
              <p className="text-sm text-gray-500 mt-2">
                High-visibility workplace safety wear.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-semibold">Safety Belts</h3>
              <p className="text-sm text-gray-500 mt-2">
                Safety equipment for work-at-height applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Looking for Industrial Safety Products?
          </h2>

          <p className="text-gray-200 text-lg mb-8">
            Contact Maxx Challenger Safety Products for your industrial PPE
            and workplace safety requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#0B1F3A] px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Send Enquiry
            </Link>

            <a
              href="tel:+918328310975"
              className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsPage;