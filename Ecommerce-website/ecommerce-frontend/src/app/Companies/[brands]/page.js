import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../Components/Header";

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
  <>
  <Header/>
   <div className={styles.container}>
      <h2 className={styles.title}>
        {brands.charAt(0).toUpperCase() + brands.slice(1)} Phones
      </h2>

      {phones.length === 0 ? (
        <p className={styles.noPhones}>
          No phones found for <strong>{brands}</strong>.
        </p>
      ) : (
        <div className={styles.flex}>
          {phones.map((phone) => {
            const name = phone.Name || "No Name";
            const price = phone.Price !== undefined ? phone.Price : "N/A";
            const media = phone.Media?.[0]; // Strapi v4 Media array

            // Full URL for Next.js Image
            const imageUrl = media?.url
              ? `http://localhost:1337${media.url}`
              : "/placeholder.png";

            return (

        <div class="card border-0 w-25 "
         key={phone.id}
         >
 <div>
                 
                  <img
  src={imageUrl}
  width={300}
  height={200}
  alt={name}
/>
                </div>  
                 <div class="card-body d-flex justify-content-between">
    <h5 class="card-title "><a href="#" className="text-decoration-none text-success">
        {name}
        </a></h5>
    <p class="card-text"><i class="fa-regular fa-bookmark"></i></p>
  </div>
  <hr/>
  <div class="card-body">
  
   <ul class="list-unstyled d-flex justify-content-between ">
    <li><h4> aed
        {price}
        </h4></li>
    <li>  <button class="btn btn-success">Buy Now</button></li>

   </ul>
  </div>
</div>
            );
          })}
        </div>
      )}
    </div>
  </>
   
  );
};

export default Page;
