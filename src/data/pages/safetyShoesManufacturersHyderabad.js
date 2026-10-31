import featuredProducts from "../featuredProducts";
import safetyShoeFAQs from "../faqs/safetyShoesFaq";
import IntroductionSection from "../../components/seo/IntroductionSection";


const pageData = {
  hero: {
    title: "Safety Shoes Manufacturers in Hyderabad",
    subtitle:
    
  "Maxx Challenger manufactures and supplies industrial safety shoes in Hyderabad for construction, manufacturing, engineering, logistics, warehousing, and other demanding workplaces.",
    image: "/images/seo/safety-shoes-hero.webp",
    primaryButton: "Request Quote",
    secondaryButton: "Download Catalogue",
    introduction: {
  title: "Leading Safety Shoes Manufacturer in Hyderabad",

  image: "/images/seo/introduction.webp",

  description: `Maxx Challenger Safety Products is a trusted manufacturer and supplier of premium industrial safety shoes in Hyderabad, delivering reliable foot protection solutions for construction, engineering, manufacturing, logistics, warehousing, mining, and other industrial sectors. Our safety footwear is manufactured using high-quality leather, durable dual-density PU soles, and robust steel toe caps to provide excellent protection, comfort, and durability in demanding work environments.

Our wide range of industrial safety shoes is designed to help protect workers from workplace hazards such as impact, compression, slips, oil exposure, and electrical risks while ensuring all-day comfort. Whether you need safety footwear for factories, construction sites, warehouses, or infrastructure projects, Maxx Challenger offers dependable products backed by quality manufacturing, competitive pricing, and timely delivery across Hyderabad, Telangana, and India.`,
},
  },

  stats: {
    experience: "15+",
    products: "100+",
    customers: "1000+",
    delivery: "Pan India",
  },

  featuredProducts,

  faqs: safetyShoeFAQs,
};

export default pageData;

export const faqSection = {
  title: "Frequently Asked Questions",

  subtitle:
    "Find answers to common questions about our industrial safety shoes, manufacturing capabilities, and bulk supply.",

  faqs: [
    {
      question:
        "What industries use Maxx Challenger safety shoes?",

      answer:
        "Our safety shoes are widely used in construction, manufacturing, logistics, engineering, warehousing, mining, pharmaceuticals, and heavy industries.",
    },

    {
      question:
        "Do you manufacture safety shoes in Hyderabad?",

      answer:
        "Yes. Maxx Challenger manufactures industrial safety shoes and supplies customers across Hyderabad and India.",
    },
    {
  question: "Where can I buy industrial safety shoes in Hyderabad?",
  answer:
    "Maxx Challenger supplies industrial safety shoes in Hyderabad for businesses, contractors, dealers, distributors, and industrial organizations. Contact our team for product details and quotations."
},
{
  question: "Do you supply safety shoes to companies and industrial projects?",
  answer:
    "Yes. Maxx Challenger supplies safety footwear for corporate customers, industrial organizations, contractors, dealers, distributors, and bulk procurement requirements."
},

    {
      question:
        "Do you accept bulk orders?",

      answer:
        "Yes. We supply corporate customers, dealers, distributors, government organizations, and industrial projects with bulk quantities.",
    },

    {
      question:
        "Are your safety shoes comfortable for long working hours?",

      answer:
        "Yes. Our footwear is designed with ergonomic construction, breathable lining, and shock-absorbing soles for all-day comfort.",
    },

    {
      question:
        "Do your shoes have steel toe protection?",

      answer:
        "Selected models include steel toe protection designed to help reduce impact and compression injuries. Refer to the specifications of each model for details.",
    },

    {
      question:
        "Can I request a quotation?",

      answer:
        "Yes. Contact our sales team by phone, WhatsApp, or the enquiry form to receive a customized quotation.",
    },
  ],
};
export const ctaSection = {
  title: "Looking for Industrial Safety Shoes in Hyderabad?",

  description:
  "Contact Maxx Challenger for industrial safety shoes and bulk footwear requirements. We supply businesses, contractors, dealers, distributors, and industrial organizations across Hyderabad and India.",

  phone1: "8328310975",

  phone2: "9121190033",

  email: "sales@maxxchallengersafety.com",

  catalogueUrl: "/catalogue.pdf",
};