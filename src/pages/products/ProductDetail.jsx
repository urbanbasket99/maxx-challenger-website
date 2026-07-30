import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import {
  getProductBySlug,
  getRelatedProducts,
} from "../../utils/productHelper";

import ProductGallery from "../../components/products/ProductGallery";
import ProductSpecifications from "../../components/products/ProductSpecifications";
import RelatedProducts from "../../components/products/RelatedProducts";

export default function ProductDetail() {

  const { category, slug } = useParams();

  const product = getProductBySlug(category, slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = getRelatedProducts(
    category,
    slug
  );

  return (
    <>

      <ProductGallery product={product} />

      <div className="max-w-7xl mx-auto py-16 px-6">

        <h1 className="text-4xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-gray-600 mb-8">
          {product.description}
        </p>

        <ProductSpecifications
          specifications={product.specifications}
        />

        <RelatedProducts
          products={relatedProducts}
        />

      </div>

    </>
  );
}