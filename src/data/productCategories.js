import helmet from "../assets/products/helmet.jpg";
import shoes from "../assets/shoes/shoes.png";
import gloves from "../assets/products/gloves.jpg";
import jacket from "../assets/products/jacket.jpg";
import gumboot from "../assets/products/gumboot.jpg";
import roadSafety from "../assets/products/road-safety.jpg";
import helmet1 from "../assets/helmets/helmet1.png";
import helmet2 from "../assets/helmets/helmet2.png";
import helmet3 from "../assets//helmets/helmet3.jpg";

const productCategories = {
 "head-protection": {
title: "Head Protection",
slug: "head-protection",
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
 "foot-protection": {
   title: "Foot Protection",
slug: "foot-protection",
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

  "hand-protection": {
    title: "Hand Protection",
slug: "hand-protection",
    description:
      "Industrial gloves for workplace safety and protection.",
    products: [
   {
  name: "Industrial Gloves",
  slug: "industrial-gloves",
  image: gloves,
},
    {
  name: "Leather Safety Gloves",
  slug: "leather-safety-gloves",
  image: gloves,
}
    ],
  },

  "body-protection": {
    title: "Body Protection",
slug: "body-protection",
    description:
      "High visibility safety jackets for industrial workers.",
    products: [
      {
  name: "Reflective Safety Jacket",
  slug: "reflective-safety-jacket",
  image: jacket,
},
    ],
  },

  "fall-protection": {
    title: "Fall Protection",
    description:
      "Durable industrial gumboots for tough environments.",
    products: [
      {
  name: "Industrial Gumboots",
  slug: "industrial-gumboots",
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
  slug: "road-safety-product",
  image: roadSafety,
},
    ],
  },
  
};

export default productCategories;