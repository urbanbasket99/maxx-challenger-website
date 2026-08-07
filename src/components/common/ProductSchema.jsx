import { Helmet } from "react-helmet-async";

export default function ProductSchema({ product, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    image: product.images?.length
      ? product.images.map(
          (img) => `https://www.maxxchallengersafety.com${img}`
        )
      : [`https://www.maxxchallengersafety.com${product.image}`],

    description:
      product.description ||
      `${product.name} manufactured by Maxx Challenger Safety Products.`,

    sku: slug,

    brand: {
      "@type": "Brand",
      name: "Maxx Challenger Safety Products",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Maxx Challenger Safety Products Pvt. Ltd.",
    },

    category: product.category,

    url: `https://www.maxxchallengersafety.com/product/${slug}`,

    offers: {
      "@type": "Offer",
      url: `https://www.maxxchallengersafety.com/product/${slug}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}