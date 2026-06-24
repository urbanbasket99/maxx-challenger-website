function ProductCards({ products }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition"
        >
          <h3 className="font-bold text-xl text-[#123A68] mb-4">
            {item.name}
          </h3>

          <p className="text-gray-600 mb-2">
            <strong>Best For:</strong> {item.bestFor}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Certification:</strong> {item.certification}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>MOQ:</strong> {item.moq}
          </p>

          <a
            href="/contact"
            className="inline-block mt-4 text-orange-500 font-semibold"
          >
            Get Quote →
          </a>
        </div>
      ))}

    </div>
  );
}

export default ProductCards;