import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCategoryCard({ category }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300"
    >
      <Link to={category.link}>
        <div className="overflow-hidden">
          <img
    src={product.images[0]}
    alt={product.name}
/>

<h3>{product.name}</h3>

<p>{product.shortDescription}</p>

<Link
    to={`/products/${product.category}/${product.slug}`}
>
    View Product →
</Link>
        </div>
      </Link>
    </motion.article>
  );
}