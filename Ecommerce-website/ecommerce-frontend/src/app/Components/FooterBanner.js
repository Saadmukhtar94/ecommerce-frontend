"use client"; 
import { useEffect, useState } from "react";

const FooterBanner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/footer-banners?populate=footerBanner",
          { cache: "no-store" } // always fetch fresh data
        );

        const data = await res.json();

        if (data.data && data.data.length > 0) {
          const item = data.data[0];
          const STRAPI_URL = "http://localhost:1337";
          const imageUrl = item.footerBanner?.formats?.medium?.url
            ? `${STRAPI_URL}${item.footerBanner.formats.medium.url}`
            : item.footerBanner?.url
            ? `${STRAPI_URL}${item.footerBanner.url}`
            : null;

          setBanner({
            url: imageUrl,
            alt: item.footerBanner?.alternativeText || "Footer Banner",
            width: item.footerBanner?.width || 1000,
            height: item.footerBanner?.height || 667,
          });
        }
      } catch (err) {
        console.error("Error fetching footer banner:", err);
      }
    };

    fetchBanner();
  }, []);

  if (!banner) return null; // or a loader/spinner

  return (
    <div className="footer-banner">
      
      <img
  src={banner.url}
  alt={banner.alt}
  style={{ width: "100%", height: "150px" }}
  
/>

    </div>
  );
};

export default FooterBanner;
