import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { motion } from "framer-motion";

function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .send(
      "service_d839bos",
      "template_le7oeyb",
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      },
      "78NBT_tB_M13D-WjO"
    )
    .then(() => {
      alert("Inquiry sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setLoading(false);
    })
    .catch((error) => {
      console.log(error);

      alert("Something went wrong!");

      setLoading(false);
    });
};
  return (
    <div className="bg-[#F8FAFC]">
        <Helmet>
  <title>
    Contact Us | Maxx Challenger Safety Products
  </title>

  <meta
    name="description"
    content="Contact Maxx Challenger Safety Products in Hyderabad for industrial safety equipment, bulk orders and business inquiries."
  />
</Helmet>

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-24 text-center">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Get in touch with Maxx Challenger Safety Products
            for premium industrial safety equipment and bulk inquiries.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Contact Information
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
              Let’s Connect
            </h2>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              Reach out to us for industrial safety products,
              bulk orders, and business inquiries.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mt-10">

              <div className="bg-white rounded-[25px] p-6 shadow-md flex gap-5">
                <MapPin className="text-yellow-500" size={30} />

                <div>
                  <h3 className="font-bold text-xl text-[#0B1F3A]">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    PLOT NO 1021, Rami Reddy Nagar,
                    Jeedimetla, Hyderabad,
                    Telangana - 500055
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-md flex gap-5">
                <Phone className="text-yellow-500" size={30} />

                <div>
                  <h3 className="font-bold text-xl text-[#0B1F3A]">
                    Phone
                  </h3>

                  <a
                    href="tel:+918328310975"
                    className="text-gray-600 mt-2 block hover:text-yellow-500"
                  >
                    +91 8328310975
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-md flex gap-5">
                <Mail className="text-yellow-500" size={30} />

                <div>
                  <h3 className="font-bold text-xl text-[#0B1F3A]">
                    Email
                  </h3>

                  <a
                    href="mailto:maxxchallengersafety@gmail.com"
                    className="text-gray-600 mt-2 block break-all hover:text-yellow-500"
                  >
                    maxxchallengersafety@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-md flex gap-5">
                <Clock className="text-yellow-500" size={30} />

                <div>
                  <h3 className="font-bold text-xl text-[#0B1F3A]">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday – Sunday
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[35px] shadow-xl p-8"
          >

            <h3 className="text-3xl font-bold text-[#0B1F3A]">
              Send Inquiry
            </h3>

            <p className="text-gray-500 mt-3">
              Fill out the form and our team will contact you.
            </p>

           <form
  onSubmit={handleSubmit}
  className="space-y-5 mt-8"
>

              <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
/>

              <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
/>

             <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
/>

              <textarea
  rows="5"
  name="message"
  placeholder="Your Requirement"
  value={formData.message}
  onChange={handleChange}
  required
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
></textarea>

              <button
  type="submit"
  disabled={loading}
  className="w-full bg-yellow-400 py-4 rounded-2xl font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
>
  {loading ? "Sending..." : "Send Inquiry"}
</button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* Google Map */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto rounded-[35px] overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Jeedimetla,+Hyderabad,+Telangana+500055&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;