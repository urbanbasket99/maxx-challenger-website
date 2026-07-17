import { Helmet } from "react-helmet-async";
import Gallery from "../components/Gallery";

function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Industrial Safety Product Gallery | Maxx Challenger</title>

        <meta
          name="description"
          content="Explore our gallery of industrial safety shoes, helmets, PVC gumboots, reflective jackets, gloves and PPE products."
        />
      </Helmet>

      <Gallery />
    </>
  );
}

export default GalleryPage;
