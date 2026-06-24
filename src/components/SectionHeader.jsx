function SectionHeader({
  eyebrow,
  title,
  description
}) {
  return (
    <div className="mb-12">

      <p className="uppercase tracking-[3px] text-orange-500 font-semibold mb-3">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold text-[#123A68] leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-xl text-gray-500 mt-5 max-w-4xl">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeader;