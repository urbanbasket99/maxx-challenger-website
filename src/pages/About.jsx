import { Helmet } from "react-helmet-async";
import StoreImage from "../assets/store.jpg";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
 
  return (
    
    <div className="bg-[#F8FAFC]">
           <Helmet>
  <title>
    About Us | Maxx Challenger Safety Products
  </title>

  <meta
    name="description"
    content="Learn about Maxx Challenger Safety Products, trusted industrial safety products supplier in Hyderabad since 2014."
  />
</Helmet>

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-24 text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Maxx Challenger Safety Products
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Trusted manufacturer and supplier of industrial
            safety products in Hyderabad since 2014.
          </p>

        </div>

      </section>

      {/* Company Overview */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={StoreImage}
              alt="Maxx Challenger Safety Products"
              className="rounded-[35px] shadow-2xl w-full h-[400px] md:h-[550px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Company Overview
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4 leading-tight">
              Your Trusted Industrial Safety Partner
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Established in 2014, Maxx Challenger Safety Products
              is a trusted manufacturer and supplier of premium
              industrial safety equipment in Hyderabad.
            </p>

            <p className="text-gray-600 mt-4 text-lg leading-8">
              We specialize in industrial safety helmets,
              gloves, reflective jackets, safety shoes,
              gumboots, road safety equipment and workplace
              protection solutions.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white rounded-2xl p-5 shadow-md">
                ✔ Since 2014
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                ✔ Trusted Supplier
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                ✔ Bulk Orders
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                ✔ Premium Products
              </div>

            </div>

          </motion.div>

        </div>

      </section>
     <section className="py-20 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="rounded-[32px] overflow-hidden">
      <div className="grid lg:grid-cols-2">

    {/* Left Side */}
    <div className="bg-[#0B1F3A] text-white p-8 flex flex-col justify-center">

      <p className="uppercase tracking-widest text-yellow-400 font-semibold">
        Founder & Managing Director
      </p>

      <h2 className="text-4xl font-bold mt-4 leading-tight">
        A Message From
        <br />
        Our Founder
      </h2>

      <p className="mt-8 text-gray-300 leading-8">
        "Safety is not just a product.
        It is a responsibility."

        <br /><br />

        With over 15 years in the PPE industry and a
        40-year family legacy in industrial equipment,
        Vikaas Agarrwal founded Maxx Challenger to
        deliver reliable safety solutions across India.
      </p>

      <Link
        to="/our-founder"
        className="mt-10 inline-flex w-fit bg-yellow-400 text-[#0B1F3A] px-8 py-4 rounded-full font-semibold hover:bg-white transition"
      >
        Read Full Story →
      </Link>

    </div>

    {/* Right Side */}

    <div className="p-12 flex items-center">

      <div className="grid grid-cols-2 gap-6 w-full">

        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-4xl font-bold text-[#0B1F3A]">15+</h3>
          <p className="mt-2 text-gray-600">Years in PPE Industry</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-4xl font-bold text-[#0B1F3A]">40+</h3>
          <p className="mt-2 text-gray-600">Years Family Legacy</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-4xl font-bold text-[#0B1F3A]">100+</h3>
          <p className="mt-2 text-gray-600">Safety Products</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-4xl font-bold text-[#0B1F3A]">PAN India</h3>
          <p className="mt-2 text-gray-600">Industrial Supply</p>
        </div>

      </div>

    </div>
</div>
</div>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-[#F8FAFC] rounded-[35px] p-10 shadow-md">
            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Mission
            </h3>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              To provide high-quality industrial safety
              products that protect workers and create
              safer workplaces across industries.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-[35px] p-10 shadow-md">
            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Our Vision
            </h3>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              To become one of India’s most trusted
              industrial safety equipment suppliers
              through quality, reliability and service.
            </p>
          </div>

        </div>

      </section>

      {/* Industries */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Industries We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
            Trusted Across Industries
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">

            {[
              "Construction",
              "Manufacturing",
              "Warehousing",
              "Logistics",
              "Infrastructure",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] shadow-md p-8 font-semibold text-[#0B1F3A]"
              >
                {industry}
              </div>
            ))}

          </div>

        </div>

      </section>

      <CTA />

    </div>
  );
}

export default About;