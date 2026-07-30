import pageData from "../../data/pages/safetyShoesManufacturersHyderabad";

import SEOHero from "../../components/seo/SEOHero";
import StatsSection from "../../components/seo/StatsSection";
import WhyMaxxChallenger from "../../components/seo/WhyMaxxChallenger";
import FeaturedProducts from "../../components/seo/FeaturedProducts";
import ProductFeatures from "../../components/seo/ProductFeatures";
import IndustriesSection from "../../components/seo/IndustriesSection";
import ManufacturingProcess from "../../components/seo/ManufacturingProcess";
import Certifications from "../../components/seo/Certifications";
import ProductApplications from "../../components/seo/ProductApplications";
import FAQSection from "../../components/seo/FAQSection";
import RelatedProducts from "../../components/seo/RelatedProducts";
import CTASection from "../../components/seo/CTASection";

export default function SafetyShoesManufacturersHyderabad() {
  return (
    <>
      <SEOHero {...pageData.hero} />

      <StatsSection />

      <WhyMaxxChallenger />

      <FeaturedProducts
        title="Featured Safety Shoes"
        products={pageData.featuredProducts}
      />

      <ProductFeatures />

      <IndustriesSection />

      <ManufacturingProcess />

      <Certifications />

      <ProductApplications />

      <FAQSection faqs={pageData.faqs} />

      <RelatedProducts />

      <CTASection />
    </>
  );
}
export const introduction = {
  badge: "Trusted Industrial Safety Manufacturer",

  title: "Leading Safety Shoes Manufacturer in Hyderabad",

  image: "/images/seo/safety-shoes-introduction.webp",

  imageAlt: "Industrial Safety Shoes Manufacturer in Hyderabad",

  description: `Maxx Challenger Safety Products Pvt. Ltd. is a trusted manufacturer and supplier of premium industrial safety shoes in Hyderabad. We provide high-quality safety footwear for construction, engineering, manufacturing, logistics, warehousing, pharmaceuticals, mining, and heavy industries.

Our safety shoes are manufactured using premium leather, durable dual-density PU soles, and high-strength steel toe caps to provide maximum protection against workplace hazards such as impact, compression, slips, oil exposure, and electrical risks.

With a strong commitment to quality, innovation, and customer satisfaction, Maxx Challenger supplies reliable safety footwear across Hyderabad, Telangana, and all major cities in India. Whether you require bulk corporate orders, dealer partnerships, or industrial procurement, we deliver products that combine safety, comfort, durability, and value.`,

  highlights: [
    "Premium Industrial Safety Footwear",
    "Manufacturer Direct Pricing",
    "Bulk Orders Across India",
    "Fast Dispatch & Delivery",
    "Quality Tested Products",
    "Trusted by Multiple Industries",
  ],
};