import { Routes, Route } from "react-router-dom";
import IndustrialSafetyHyderabad from "../pages/IndustrialSafetyHyderabad";
import SeoLandingPage from "../pages/SeoLandingPage";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductCategory from "../pages/ProductCategory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route path="/contact" element={<Contact />} />
      <Route
  path="/products/:category"
  element={<ProductCategory />}
  
/>
<Route
  path="/industrial-safety-products-hyderabad"
  element={<IndustrialSafetyHyderabad />}
/>
<Route
  path="/:slug"
  element={<SeoLandingPage />}
/>
     
    </Routes>
  );
}

export default AppRoutes;