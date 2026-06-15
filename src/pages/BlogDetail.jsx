import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import blogPosts from "../data/blogPosts";
import CTA from "../components/CTA";

function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return (
      <div className="text-center py-40 text-4xl font-bold">
        Blog Not Found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {post.title} |
          Maxx Challenger Safety Products
        </title>

        <meta
          name="description"
          content={post.description}
        />
      </Helmet>

      <div className="bg-[#F8FAFC]">

        {/* Hero */}
        <section className="bg-[#0B1F3A] text-white py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <span className="bg-yellow-400 text-[#0B1F3A] px-5 py-2 rounded-full font-semibold">
              {post.category}
            </span>

            <h1 className="text-5xl font-bold mt-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              {post.description}
            </p>

          </div>

        </section>

        {/* Blog Content */}
        <section className="py-24">

          <div className="max-w-4xl mx-auto px-6">

            <img
              src={post.image}
              alt={post.title}
              className="rounded-[35px] shadow-xl w-full h-[450px] object-cover"
            />

            <div className="bg-white rounded-[35px] shadow-md p-10 mt-10">

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Workplace Safety Matters
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-8 whitespace-pre-line mt-6">
  {post.content}
</div>

              {/* Internal Links */}
              <h2 className="text-3xl font-bold text-[#0B1F3A] mt-14">
                Explore Safety Products
              </h2>

              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  to="/products/safety-shoes"
                  className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
                >
                  Safety Shoes
                </Link>

                <Link
                  to="/products/safety-helmets"
                  className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-[#0B1F3A] transition"
                >
                  Safety Helmets
                </Link>

              </div>

            </div>

          </div>

        </section>
        <div className="space-y-5 mt-8">

  <div className=" bg-[#F8FAFC] rounded-2xl p-6">
    <h3 className="font-bold text-xl">
      Which safety shoes are best for factories?
    </h3>

    <p className="text-gray-600 mt-3">
      Steel toe and PU sole safety shoes are
      commonly recommended for factory workers.
    </p>
  </div>

  <div className=" bg-[#F8FAFC] rounded-2xl p-6">
    <h3 className="font-bold text-xl">
      Why are industrial safety shoes important?
    </h3>

    <p className="text-gray-600 mt-3">
      Safety shoes help protect workers from
      injuries, heavy objects, slips and
      workplace hazards.
    </p>
  </div>
  <div className="space-y-5 mt-8">

  <div className="bg-[#F8FAFC] rounded-2xl p-6">
    <h3 className="font-bold text-xl">
      Why are safety helmets important?
    </h3>

    <p className="text-gray-600 mt-3">
      Safety helmets help protect workers
      from falling objects, impacts and
      workplace head injuries.
    </p>
  </div>

  <div className="bg-[#F8FAFC] rounded-2xl p-6">
    <h3 className="font-bold text-xl">
      Which helmet is best for construction workers?
    </h3>

    <p className="text-gray-600 mt-3">
      HDPE safety helmets and industrial
      construction helmets are widely used
      for worker protection.
    </p>
  </div>

</div>

</div>

        <CTA />

      </div>
    </>
  );
}

export default BlogDetail;