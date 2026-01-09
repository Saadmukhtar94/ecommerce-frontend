import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Page = async ({ params }) => {
  // Extract brand slug from URL
  const { brands } = await params;

  if (!brands) return <p>Brand not specified.</p>;

  const brandSlug = brands.toLowerCase();

  // Fetch products from Strapi
  const res = await fetch(
    `http://localhost:1337/api/products?populate=*&filters[brand][slug][$eq]=${brandSlug}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const phones = data.data || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {brands.charAt(0).toUpperCase() + brands.slice(1)} Phones
      </h2>

      {phones.length === 0 ? (
        <p className={styles.noPhones}>
          No phones found for <strong>{brands}</strong>.
        </p>
      ) : (
        <div className={styles.grid}>
          {phones.map((phone) => {
            const name = phone.Name || "No Name";
            const price = phone.Price !== undefined ? phone.Price : "N/A";
            const media = phone.Media?.[0]; // Strapi v4 Media array

            // Full URL for Next.js Image
            const imageUrl = media?.url
              ? `http://localhost:1337${media.url}`
              : "/placeholder.png";

            return (
              <div key={phone.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {/* <Image
                    src={imageUrl}
                    width={160}
                    height={160}
                    alt={name}
                    style={{ objectFit: "cover" }}
                  /> */}
                  <img
  src={imageUrl}
  width={160}
  height={160}
  alt={name}
  style={{ objectFit: "cover" }}
/>
                </div>

                <h3 className={styles.name}>{name}</h3>
                <p className={styles.price}>${price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Page;
