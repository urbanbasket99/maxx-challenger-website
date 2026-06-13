import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductCategories from "../components/ProductCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import StatsSection from "../components/StatsSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Industrial Safety Products in Hyderabad |
          Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content="Maxx Challenger Safety Products is a trusted supplier of industrial safety products in Hyderabad including helmets, gloves, safety shoes, jackets, gumboots and road safety equipment."
        />

        <meta
          name="keywords"
          content="industrial safety products Hyderabad, safety helmets Hyderabad, safety shoes Hyderabad, PPE products Hyderabad"
        />
      </Helmet>

      <Hero />
      <AboutSection />
      <ProductCategories />
      <StatsSection />
      
      <WhyChooseUs />
      <CTA />
    </>
  );
}

export default Home;