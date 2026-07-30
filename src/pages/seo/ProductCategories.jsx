import ProductCategoryCard from "./ProductCategoryCard";

export default function ProductCategories({
    title,
    subtitle,
    products,
}) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#0B1F3A]">
                        {title}
                    </h2>

                    <p className="mt-5 text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
                    {products.map(product => (
                        <ProductCategoryCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}