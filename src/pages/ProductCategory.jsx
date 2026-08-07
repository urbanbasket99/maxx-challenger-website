import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import productCategories from "../data/productCategories";
import CTA from "../components/CTA";
/*mport DownloadCatalog from "../components/DownloadCatalog";*/


function ProductCategory() {
  const { category } = useParams();

  const data = productCategories[category];

  if (!data) {
    return (
      <div className="text-center py-40 text-4xl font-bold">
        Category Not Found
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
<Helmet>
  <title>
    {`${data.title} in Hyderabad | Maxx Challenger Safety Products`}
  </title>

  <meta
    name="description"
    content={data.description}
  />

  <meta
    name="keywords"
    content={`${data.title}, industrial safety products Hyderabad, PPE products Hyderabad`}
  />
</Helmet>

      <div className="bg-[#F8FAFC]">

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white py-24 text-center">

          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-5xl md:text-6xl font-bold">
              {data.title}
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              {data.description}
            </p>

          </div>

        </section>
        {/* ABOUT HEAD PROTECTION */}

{category === "head-protection" && (
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <span className="text-yellow-500 uppercase tracking-widest font-semibold">
      Built for the Hardest Days on the Job
    </span>

    <h2 className="text-5xl font-bold text-[#0B1F3A] mt-4 mb-8">
      Industrial Safety Helmets Engineered for Maximum Protection
    </h2>

    <p className="text-lg text-gray-700 leading-9 mb-6">
      When you're on-site, your helmet isn't just gear—it's your lifeline.
      Engineered to withstand high-impact environments, Maxx Challenger
      Safety Helmets combine heavy-duty industrial protection with an
      ergonomic design that remains comfortable throughout long working
      hours.
    </p>

    <p className="text-lg text-gray-700 leading-9">
      Whether you're working on high-rise construction projects,
      manufacturing facilities, warehouses or infrastructure sites,
      our IS 2925 certified safety helmets deliver dependable impact
      protection, superior comfort and long-lasting durability for
      demanding industrial environments.
    </p>

  </div>
</section>
)}
{/* FOOT PROTECTION INTRO */}

{category === "foot-protection" && (
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <span className="text-yellow-500 uppercase tracking-widest font-semibold">
      Ultimate Protection. Uncompromised Comfort.
    </span>

    <h2 className="text-5xl font-bold text-[#0B1F3A] mt-4 mb-8">
      Industrial Safety Shoes Built for Every Workplace
    </h2>

    <p className="text-lg text-gray-700 leading-9 mb-6">
      Engineered for demanding industrial environments, Maxx Challenger PVC
      Synthetic Safety Shoes deliver the perfect blend of rugged durability,
      advanced safety features and all-day comfort. Built with a premium
      synthetic upper and a high-grade PVC injection sole, these shoes provide
      reliable protection against workplace hazards while remaining lightweight
      and comfortable throughout long shifts.
    </p>

    <p className="text-lg text-gray-700 leading-9">
      Whether you're working in construction, manufacturing, warehousing,
      engineering, logistics or heavy industries, Maxx Challenger Safety Shoes
      help you move with confidence. Available in Steel Toe, Composite Toe,
      Anti-Static (ESD) and Oil-Resistant variants, every pair is designed to
      meet modern industrial safety requirements while delivering exceptional
      comfort and durability.
    </p>

  </div>
</section>
)}
{category === "pvc-gumboots" && (
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <span className="text-yellow-500 uppercase tracking-widest font-semibold">
      Step Into Ultimate Workplace Defense
    </span>

       <p className="text-lg text-gray-700 leading-9 mb-6">
      When you’re wading through mud, water, chemicals, or rough terrain, ordinary footwear doesn't cut it. The Maxx Challenger  PVC Gumboot is engineered for maximum fluid defiance and relentless durability. Molded as a single, seamless piece, it offers 100% waterproof protection to keep your feet dry, safe, and comfortable through the most demanding shifts.
    </p>

    <p className="text-lg text-gray-700 leading-9">
   From construction sites and agricultural fields to food processing units and chemical plants, these boots are built to outlast the elements.
    </p>

  </div>
</section>
)}
        {/* Products */}
        <section className="py-5">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {data.products.map((item, index) => (
                <div
  key={index}
  className="group bg-white rounded-[35px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500"
>

  {/* Product Image */}
  <div className="overflow-hidden">

    <img
      src={item.image}
       alt={`${item.name} | ${item.seoCategory} | Maxx Challenger Safety Products`}
      className="w-60 h-[320px] object-contain mx-auto group-hover:scale-110 transition duration-700"
    />

  </div>

  {/* Content */}
  <div className="p-8">

    

    <h3 className="text-2xl font-bold text-[#0B1F3A]">
      {item.name}
    </h3>

    <p className="text-gray-600 mt-4 leading-7">
      Premium quality {item.name.toLowerCase()} for
      industrial safety, construction, manufacturing,
      and workplace protection.
    </p>

    {/* Buttons */}
    <div className="flex gap-3 mt-6 flex-wrap relative z-50">
  <a
    href="https://wa.me/918328310975"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#00C853] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition"
  >
    WhatsApp
  </a>

<Link
  to={`/product/${item.slug}`}
  className="bg-red-500 text-white px-6 py-3 rounded-full"
>
  View Product
</Link>
{/*<DownloadCatalog
      file={item.catalog}
      title="Catalogue"
    />*/}
</div>

  </div>

</div>
              ))}

            </div>

          </div>

        </section>

        <CTA />

      </div>
    </>
  );
}

export default ProductCategory;