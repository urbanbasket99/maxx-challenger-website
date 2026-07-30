export default function ProductSpecifications({
  specifications,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Specifications
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {Object.entries(specifications).map(
          ([key, value]) => (
            <div
              key={key}
              className="flex justify-between border-b pb-3"
            >
              <span className="font-semibold">
                {key}
              </span>

              <span>{value}</span>
            </div>
          )
        )}

      </div>

    </div>
  );
}