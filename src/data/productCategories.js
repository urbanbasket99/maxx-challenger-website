import helmet from "../assets/products/helmet.jpg";
import shoes from "../assets/shoes/shoes.png";
import gloves from "../assets/products/gloves.jpg";
import jacket from "../assets/products/jacket.jpg";
import gumboot from "../assets/products/gumboot.jpg";
import roadSafety from "../assets/products/road-safety.jpg";
import helmet1 from "../assets/helmets/helmet1.png";
import helmet2 from "../assets/helmets/helmet2.png";
import helmet3 from "../assets//helmets/helmet3.png";
import gumboot1 from "../assets/gumboots/gumboot1.jpg";
import gumboot2 from "../assets/gumboots/gumboot2.jpg";
import plus5 from "../assets/shoes/plus5.png";
import classic3 from "../assets/shoes/classic3.png";
import eliteplus2 from "../assets/shoes/eliteplus2.png";
import dbcgb1 from "../assets/gumboots/dbcgb1.png";
import pvcg1 from "../assets/gumboots/pvcg1.png";

const productCategories = {
 "head-protection": {
title: "Head Protection",
slug: "head-protection",
  description:
    "Premium industrial safety helmets for construction, factories and workplaces.",

  products: [
    {
      name: "Ventilation Ratchet Safety Helmet",
       slug: "industrial-safety-helmet",
      image: helmet1,
    },
    {
      name: "Executive Ratchet Safety Helmet",
      slug: "construction-safety-helmet",
      image: helmet2,
    },
    {
      name: "Nape Type Safety Helmet",
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
    name: "Elite Plus Safety Shoes",
    slug: "elite-plus-safety-shoes",
    image: eliteplus2,
  },
  {
    name: "Plus Safety Shoes",
    slug: "plus-safety-shoes",
    image: plus5,
  },
  {
    name: "Classic Safety Shoes",
    slug: "classic-safety-shoes",
    image: classic3,
  },
]
      
           
  },

   "pvc-gumboots": {
    title: "Foot Protection",
 
slug: "pvc-gumboots",
    description:
      "Premium industrial gum boots for maximum worker protection.",
    products: [
      {
        slug: "pvc-gumboots-double-colour",
        name: "PVC Gumboots - Double Colour",
        image: dbcgb1,
      },
   {
        slug: "pvc-gumboots",
        name: "PVC Gumboots",
        image: pvcg1,
      },
      ],
      
           
  },
  

 /* "hand-protection": {
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
  */
};

export default productCategories;