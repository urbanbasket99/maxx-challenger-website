import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function Blog() {
  return (
    <>
      <Helmet>
        <title>
          Industrial Safety Blog |
          Maxx Challenger Safety Products
        </title>
      </Helmet>

      <section className="bg-[#F8FAFC] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Knowledge Center
            </span>

            <h1 className="text-5xl font-bold text-[#0B1F3A] mt-4">
              Industrial Safety Blog
            </h1>

            <p className="text-gray-600 mt-5 text-lg">
              Latest industrial safety tips,
              PPE guides and workplace safety articles.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-8">

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>

                <Link to={`/blog/${post.slug}`}>
  <h2 className="text-2xl font-bold text-[#0B1F3A] mt-5 hover:text-yellow-500 transition duration-300 cursor-pointer">
    {post.title}
  </h2>
</Link>

                  <p className="text-gray-600 mt-4 leading-7">
                    {post.description}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-6 text-[#0B1F3A] font-semibold hover:text-yellow-500"
                  >
                    Read More →
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Blog;