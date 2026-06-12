function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            Maxx Challenger
          </h2>

          <p className="text-gray-300 mt-4 leading-7">
            Premium industrial safety products supplier
            in Hyderabad since 2014.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Products
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Safety Helmets</li>
            <li>Safety Shoes</li>
            <li>Gloves</li>
            <li>Reflective Jackets</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            Hyderabad, Telangana
          </p>

          <p className="text-gray-300 mt-3">
            +91 8328310975
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Maxx Challenger Safety Products
      </div>

    </footer>
  );
}

export default Footer;