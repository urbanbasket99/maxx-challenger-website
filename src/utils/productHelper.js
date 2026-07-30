import products from "../data/products";

export const getProductBySlug = (category, slug) => {
  return products.find(
    (product) =>
      product.category === category &&
      product.slug === slug
  );
};

export const getProductsByCategory = (category) => {
  return products.filter(
    (product) => product.category === category
  );
};

export const getRelatedProducts = (
  category,
  currentSlug,
  limit = 4
) => {
  return products
    .filter(
      (product) =>
        product.category === category &&
        product.slug !== currentSlug
    )
    .slice(0, limit);
};