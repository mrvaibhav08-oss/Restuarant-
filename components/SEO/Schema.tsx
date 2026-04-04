export default function Schema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Royal Midnight",
    "image": "https://www.yourdomain.com/images/hero-bg.jpg",
    "description": "Premium fine dining restaurant in Nagpur featuring authentic Saoji, global cuisine, and top veg treats.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, VIP Road, Near Sitabuldi Fort",
      "addressLocality": "Nagpur",
      "addressRegion": "MH",
      "postalCode": "440001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "url": "https://www.yourdomain.com",
    "telephone": "+919876543210",
    "servesCuisine": ["Indian", "Saoji", "Continental", "Asian"],
    "priceRange": "₹₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:30"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
                      }
