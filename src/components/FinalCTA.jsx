function FinalCTA({
  title,
  description
}) {
  return (
    <section className="bg-[#0B1F3A] text-white py-24">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          {title}
        </h2>

        <p className="text-xl mb-10">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            Request Quote
          </a>

          <a
            href="https://wa.me/8328310975"
            className="border border-white px-8 py-4 rounded-xl font-bold"
          >
            WhatsApp Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;