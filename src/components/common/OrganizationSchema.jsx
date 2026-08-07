import { Helmet } from "react-helmet-async";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maxx Challenger Safety Products Pvt. Ltd.",
    url: "https://www.maxxchallengersafety.com",
    logo: "https://www.maxxchallengersafety.com/assets/logo.png",
    image: "https://www.maxxchallengersafety.com/og-image.jpg",
    description:
      "Manufacturer and supplier of industrial safety products including safety helmets, safety shoes, PVC gumboots, reflective jackets, safety gloves and PPE products across India.",

    telephone: "+91-8328310975",

    email: "info@maxxchallengersafety.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "PLOT NO 1021 & 1022, Rami Reddy Nagar, Jeedimetla",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500055",
      addressCountry: "IN"
    },

    sameAs: [
      "https://www.facebook.com/bigelephantsafety",
      "https://www.linkedin.com/company/maxx-challenger-safety-products",
      "https://www.instagram.com/maxxchallengersafety"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}