import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

export default function CTASection({
  title,
  description,
  phone1,
  phone2,
  email,
  catalogueUrl,
}) {
  const whatsappNumber = phone1.replace(/\D/g, "");

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B1F3A]" />

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-[#0B1F3A]">
            Request a Free Quote
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white lg:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href={`tel:${phone1}`}
              className="flex items-center rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-[#0B1F3A] transition hover:scale-105"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>

            <a
              href={`https://wa.me/91${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B1F3A]"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B1F3A]"
            >
              <Mail size={20} className="mr-2" />
              Email Us
            </a>

            <a
              href={catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B1F3A]"
            >
              <Download size={20} className="mr-2" />
              Catalogue
            </a>

          </div>

          {/* Contact Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-yellow-400">
                Call Us
              </h3>

              <p className="mt-4 text-white">
                {phone1}
              </p>

              <p className="text-white">
                {phone2}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-yellow-400">
                Email
              </h3>

              <p className="mt-4 text-white break-all">
                {email}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-yellow-400">
                Why Choose Us?
              </h3>

              <ul className="mt-4 space-y-2 text-left text-white">
                <li>✔ Manufacturer Direct Pricing</li>
                <li>✔ Bulk Orders Welcome</li>
                <li>✔ Pan India Delivery</li>
                <li>✔ Fast Response</li>
              </ul>
            </div>

          </div>

          <a
            href="/contact"
            className="mt-12 inline-flex items-center font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            Request a Custom Quote
            <ArrowRight size={18} className="ml-2" />
          </a>

        </motion.div>

      </div>
    </section>
  );
}