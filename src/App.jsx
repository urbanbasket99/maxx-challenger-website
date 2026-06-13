import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <a
  href="https://wa.me/918328310975"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300"
>
  💬
</a>
      <Footer />
    </div>
  );
}

export default App;