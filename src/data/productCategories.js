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
  description:
    "Premium industrial safety helmets for construction, factories and workplaces.",

  products: [
    {
      name: "Industrial Safety Helmet",
      image: helmet1,
    },
    {
      name: "Construction Safety Helmet",
      image: helmet2,
    },
    {
      name: "HDPE Safety Helmet",
      image: helmet3,
    },
  ],
},
  "safety-shoes": {
    title: "Safety Shoes",
    description:
      "Premium industrial safety shoes for maximum worker protection.",
    products: [
      {
        name: "Steel Toe Safety Shoes",
        image: shoes,
      },
      {
        name: "Industrial Safety Shoes",
        image: shoes,
      },
    ],
  },

  "safety-gloves": {
    title: "Safety Gloves",
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