import { Routes, Route } from "react-router-dom";
import IndustrialSafetyHyderabad from "../pages/IndustrialSafetyHyderabad";
import SeoLandingPage from "../pages/SeoLandingPage";
import OurFounder from "../pages/OurFounder";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import ProductCategory from "../pages/ProductCategory";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import ProductDetail from "../pages/ProductDetail";
import SafetyShoesManufacturersHyderabad from "../pages/SafetyShoesManufacturersHyderabad";
import SafetyShoesForConstructionWorkers from "../pages/SafetyShoesForConstructionWorkers";
import SafetyHelmetsForConstructionWorkers from "../pages/SafetyHelmetsForConstructionWorkers";
import ReflectiveJacketsForConstructionWorkers from "../pages/ReflectiveJacketsForConstructionWorkers";
import SafetyShoesForFactoryWorkers from "../pages/SafetyShoesForFactoryWorkers";
import SafetyShoesFactoryPage from "../pages/SafetyShoesFactoryPage";
import SafetyHelmetsForFactoryWorkers from "../pages/SafetyHelmetsForFactoryWorkers";
import PVCGumboots from "../pages/Pvcgumboots";
import GalleryPage from "../pages/GalleryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route
  path="/gallery"
  element={<GalleryPage />}
/>
<Route
  path="/our-founder"
  element={<OurFounder />}
/>

      <Route path="/contact" element={<Contact />} />

      <Route path="/pvc-gumboots" element={<PVCGumboots />} />
      <Route
  path="/products/:category"
  element={<ProductCategory />}
  
/>
<Route
  path="/product/:slug"
  element={<ProductDetail />}
/>
<Route
  path="/industrial-safety-products-hyderabad"
  element={<IndustrialSafetyHyderabad />}
/>
<Route
  path="/safety-shoes-manufacturers-hyderabad"
  element={<SafetyShoesManufacturersHyderabad />}
/>
<Route
 path="/safety-shoes-for-construction-workers"
 element={<SafetyShoesForConstructionWorkers />}
/>
<Route
 path="/safety-helmets-for-construction-workers"
 element={<SafetyHelmetsForConstructionWorkers />}
/>
<Route
  path="/reflective-jackets-for-construction-workers"
  element={<ReflectiveJacketsForConstructionWorkers />}
/>

<Route
  path="/safety-shoes-for-factory-workers"
  element={<SafetyShoesForFactoryWorkers />}
/>
<Route
  path="/safety-shoes-factory-page"
  element={<SafetyShoesFactoryPage />}
/>
<Route
  path="/safety-helmets-for-factory-workers"
  element={<SafetyHelmetsForFactoryWorkers />}
/>
<Route
  path="/:slug"
  element={<SeoLandingPage />}
/>
<Route path="/blog" element={<Blog />} />
<Route
  path="/blog/:slug"
  element={<BlogDetail />}
/>

     
    </Routes>
    
  );
}

export default AppRoutes;