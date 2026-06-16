import helmet from "../assets/products/helmet.jpg";
import shoes from "../assets/products/shoes.jpg";
import gloves from "../assets/products/gloves.jpg";
import jacket from "../assets/products/jacket.jpg";
import gumboot from "../assets/products/gumboot.jpg";
import roadSafety from "../assets/products/road-safety.jpg";
import helmet1 from "../assets/helmets/helmet1.jpg";
import helmet2 from "../assets/helmets/helmet2.jpg";
import helmet3 from "../assets//helmets/helmet3.jpg";

const productCategories = {
 "safety-helmets": {
  title: "Safety Helmets",
  slug:"safety-helmets",
  description:
    "Premium industrial safety helmets for construction, factories and workplaces.",

  products: [
    {
      name: "Industrial Safety Helmet",
       slug: "industrial-safety-helmet",
      image: helmet1,
    },
    {
      name: "Construction Safety Helmet",
      slug: "construction-safety-helmet",
      image: helmet2,
    },
    {
      name: "HDPE Safety Helmet",
      slug: "heavy-duty-safety-helmet",
      image: helmet3,
    },
  ],
},
  "safety-shoes": {
    title: "Safety Shoes",
     slug: "safety-shoes",
    description:
      "Premium industrial safety shoes for maximum worker protection.",
    products: [
      {
        name: "Steel Toe Safety Shoes",
        slug: "safety-shoes",
        image: shoes,
      },
      {
        name: "Industrial Safety Shoes",
        slug: "industrial-safety-shoes",
        image: shoes,
      },
    ],
  },

  "safety-gloves": {
    title: "Safety Gloves",
     slug: "safety-gloves",
    description:
      "Industrial gloves for workplace safety and protection.",
    products: [
      {
        name: "Industrial Gloves",
        image: gloves,
      },
      {
        name: "Leather Safety Gloves",
        image: gloves,
      },
    ],
  },

  "reflective-jackets": {
    title: "Reflective Jackets",
    slug: "reflective-jackets",
    description:
      "High visibility safety jackets for industrial workers.",
    products: [
      {
        name: "Reflective Safety Jacket",
        image: jacket,
      },
    ],
  },

  gumboots: {
    title: "PVC Gumboots",
    description:
      "Durable industrial gumboots for tough environments.",
    products: [
      {
        name: "Industrial Gumboots",
        image: gumboot,
      },
    ],
  },

  "road-safety": {
    title: "Road Safety Products",
    description:
      "Road barriers, cones and traffic safety equipment.",
    products: [
      {
        name: "Road Safety Product",
        image: roadSafety,
      },
    ],
  },
};

export default productCategories;