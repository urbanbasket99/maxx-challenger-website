import { Helmet } from "react-helmet-async";
import founder from "../assets/founder/vikaas-agarwal.jpg";
import CTA from "../components/CTA";

function OurFounder() {
  return (
    <div className="bg-[#F8FAFC]">

      <Helmet>
        <title>
          Our Founder | Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content="Meet Vikaas Agarrwal, Founder & Managing Director of Maxx Challenger Safety Products, with over 15 years of experience in the PPE industry."
        />
      </Helmet>

      {/* Hero */}

      <section className="bg-white pt-10 pb-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Meet Our Founder
          </h1>

          <p className="mt-6 text-xl text-300">
            A Vision Built on Experience, Responsibility and Workplace Safety
          </p>

        </div>

      </section>

      {/* Founder */}

      {/* Founder */}

<section className="pt-20 pb-12 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* Founder Image */}

      <div>

         <div className="w-full max-w-[400px] rounded-[30px] shadow-2xl object-cover">

  <img
    src={founder}
    alt="Vikaas Agarrwal"
    className="w-full max-w-[400px] rounded-[30px] shadow-2xl object-cover"
  />

</div>

      </div>

      {/* Founder Content */}

      <div>

        <span className="uppercase tracking-[3px] text-yellow-500 font-bold">
          Founder & Managing Director
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] mt-4">
          Vikaas Agarrwal
        </h1>

        <p className="mt-10 text-lg leading-9 text-gray-700">

          <strong>Namaste,</strong>

          <br /><br />

          I am <strong>Vikaas Agarrwal</strong>, with over
          <strong> 15 years of experience in the PPE industry.</strong>
          Safety is not just a product for me —
          <strong> it's a responsibility.</strong>

          <br /><br />

          My journey began with my family's business in
          <strong> Welding Equipment in Hyderabad</strong>,
          which we have been running for over
          <strong> 40 years.</strong>

          I carried that legacy forward for
          <strong> 5 years</strong> and then started
          <strong> MAXX CHALLENGER</strong> with my own vision:

        </p>

        <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-[#0B1F3A] leading-tight">

            "To make high-quality safety products
            accessible to every worker in India."

          </h2>

        </div>

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-700">

          <p>

            India is growing at an unprecedented pace.
            With massive infrastructure projects,
            manufacturing growth and a skilled manpower
            of over <strong>500 million</strong>,
            the demand for reliable safety gear has never
            been higher.

            At the same time, India faces challenges of
            pollution and hazardous working conditions.

          </p>

          <p>

            I believe the next decade belongs to
            <strong> "Safety First."</strong>

            From construction sites and factories
            to oil & gas, power plants and warehouses,
            <strong> every worker deserves to go home safe.</strong>

            That's why I started
            <strong> MAXX CHALLENGER.</strong>

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Future */}

<section className="bg-white py-16">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-[#0B1F3A]">

      The Future of PPE in India

    </h2>

    <div className="mt-14 space-y-10 text-lg leading-9 text-gray-700">

      <p>

        India is today one of the fastest-developing nations
        in the world.

        With initiatives like
        <strong> Make in India</strong>,
        <strong> Smart Cities</strong> and massive
        infrastructure development,
        the demand for Personal Protective Equipment (PPE)
        will only continue to grow.

      </p>

      <p>

        Add to that the rising awareness about
        occupational health,
        stricter safety laws and the urgent need to
        combat workplace hazards and pollution —
        <strong>
          {" "}safety is no longer optional,
          it's essential.
        </strong>

      </p>

      <div className="bg-[#F8FAFC] rounded-3xl p-10 border">

        <p className="text-2xl font-semibold text-[#0B1F3A] leading-relaxed">

          At <strong>MAXX CHALLENGER</strong>,
          we don't just sell safety products.

        </p>

        <p className="text-3xl font-bold text-yellow-500 mt-6">

          We build a culture of safety.

        </p>

        <p className="mt-8 text-lg text-gray-700 leading-9">

          Every helmet, safety shoe, glove,
          reflective jacket, gumboot and industrial
          safety solution we deliver is designed with
          one purpose—

          <strong>

            {" "}to help protect people and create
            safer workplaces across India.

          </strong>

        </p>

        <p className="mt-8 text-lg text-gray-700 leading-9">

          Together with our customers, partners and
          employees, we are committed to supporting
          industries with dependable PPE solutions that
          meet the evolving needs of a growing nation.

        </p>

      </div>

    </div>

  </div>

</section>

{/* Closing Quote */}

<section className="bg-[#0B1F3A] text-white py-20">

  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-5xl font-bold leading-tight">

      Let's Build a Safer India, Together.

    </h2>

    <p className="mt-8 text-2xl text-yellow-400 font-semibold">

      MAXX CHALLENGER SAFETY PRODUCTS – Hyderabad

    </p>

    <p className="mt-4 text-xl text-gray-300">

      Protecting People. Powering Progress.

    </p>

  </div>

</section>
      {/* Quote */}

      <section className="bg-[#0B1F3A] text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">

            "Every Worker Deserves To Return Home Safely."

          </h2>

          <p className="mt-8 text-xl text-yellow-400 font-semibold">

            — Vikaas Agarrwal

          </p>

          <p className="text-gray-300">

            Founder & Managing Director

          </p>

        </div>

      </section>

      <CTA />

    </div>
  );
}

export default OurFounder;