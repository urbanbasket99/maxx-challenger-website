function ProcessSteps({ steps }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white border rounded-2xl p-8"
        >
          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
            {index + 1}
          </div>

          <h3 className="font-bold text-xl text-[#123A68] mb-4">
            {step.title}
          </h3>

          <p className="text-gray-600">
            {step.description}
          </p>
        </div>
      ))}

    </div>
  );
}

export default ProcessSteps;