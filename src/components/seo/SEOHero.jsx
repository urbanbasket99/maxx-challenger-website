import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Factory, Truck } from "lucide-react";


export default function SEOHero({
  title,
  description,
  breadcrumb,
  primaryButton = "Request Quote",
  secondaryButton = "View Catalogue",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#123A69] to-[#0B1F3A] text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Breadcrumb */}

        <div className="flex items-center text-sm text-gray-300 mb-8">

          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <ChevronRight size={16} className="mx-2" />

          <span>{breadcrumb}</span>

        </div>

        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <span className="inline-block bg-yellow-400 text-[#0B1F3A] font-semibold px-4 py-2 rounded-full text-sm mb-6">
              Trusted PPE Manufacturer in India
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-9">
              {description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#0B1F3A] px-8 py-4 rounded-xl font-bold transition"
              >
                {primaryButton}
              </Link>

              <Link
                to="/catalogue"
                className="border border-white hover:bg-white hover:text-[#0B1F3A] px-8 py-4 rounded-xl font-semibold transition"
              >
                {secondaryButton}
              </Link>

            </div>

          </div>

          {/* Trust Cards */}

          <div className="grid gap-5">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4">

              <ShieldCheck className="text-yellow-400" size={42} />

              <div>

                <h3 className="text-xl font-bold">
                  Premium Protection
                </h3>

                <p className="text-gray-300 mt-2">
                  Industrial-grade PPE designed for superior worker safety,
                  durability and comfort.
                </p>

              </div>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4">

              <Factory className="text-yellow-400" size={42} />

              <div>

                <h3 className="text-xl font-bold">
                  Manufacturing Excellence
                </h3>

                <p className="text-gray-300 mt-2">
                  Reliable products backed by strict quality control and
                  industry-focused manufacturing practices.
                </p>

              </div>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4">

              <Truck className="text-yellow-400" size={42} />

              <div>

                <h3 className="text-xl font-bold">
                  Pan India Supply
                </h3>

                <p className="text-gray-300 mt-2">
                  Supplying industrial safety products to businesses across
                  Hyderabad, Telangana and throughout India.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}