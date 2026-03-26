export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marc Ciejay Macaraig",
    alternateName: "Ciejay",
    url: "https://shijay.dev",
    image: "https://shijay.dev/images/profile3.jpg",
    email: "macaraigmarcciejay@gmail.com",
    telephone: "+63-9XX-XXX-XXXX",
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Shijay",
    },
    sameAs: [
      "https://github.com/print-Shijay",
      "https://www.linkedin.com/in/marc-ciejay-macaraig-a3b738314/",
      "https://www.facebook.com/marcciejay.macaraig",
      "https://www.instagram.com/ciejayy_",
      "https://www.credly.com/users/lspu_spcc-marc-ciejay-macaraig/badges",
    ],
    location: {
      "@type": "Place",
      name: "San Pablo, Laguna, Philippines",
    },
    knowsAbout: [
      "Web Development",
      "Full-Stack Development",
      "Laravel",
      "React",
      "Next.js",
      "TypeScript",
      "Machine Learning",
      "Python",
      "Database Design",
      "DevOps",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
