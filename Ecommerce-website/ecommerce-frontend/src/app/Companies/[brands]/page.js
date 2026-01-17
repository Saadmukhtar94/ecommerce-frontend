import React from "react";
// import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../Components/Header";
import CompaniesBanner from "@/app/Components/CompaniesBanner";
import Footer from "@/app/Components/Footer";

// import { useState } from "react";
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
      <CompaniesBanner/>

   <div className={styles.container}>
      <h2 className={styles.title}>
        {brands.charAt(0).toUpperCase() + brands.slice(1)} Phones
      </h2>

      {phones.length === 0 ? (
        <p className={styles.noPhones}>
          No phones found for <strong>{brands}</strong>.
        </p>
      ) : (
        <div className="row">
          {phones.map((phone) => {
            const name = phone.Name || "No Name";
            const price = phone.Price !== undefined ? phone.Price : "N/A";
            const media = phone.Media?.[0]; // Strapi v4 Media array

            // Full URL for Next.js Image
            const imageUrl = media?.url
              ? `http://localhost:1337${media.url}`
              : "/placeholder.png";

            return (
<div className="col-md-4"
key={phone.id}
>
        <div className="card border-0 mb-6  mt-3"
        //  key={phone.id}
         >
 <div>
                 
                  <img
  src={imageUrl}
  width={330}
  height={250}
  alt={name}
/>
                </div>  
                 <div className="card-body d-flex justify-content-between">
    <h5 className="card-title "><a href="#" className="text-decoration-none text-dark">
        {name}
        </a></h5>
    <p className="card-text"><i className="fa-regular fa-bookmark"></i></p>
  </div>
  <hr/>
  <div className="card-body">
  
   <ul className="list-unstyled d-flex justify-content-between ">
    <li><h4> <span className="fs-6 px-1">aed</span>
        {price}
        </h4></li>
    <li>  <button className="btn btn-dark">Buy Now</button></li>

   </ul>
  </div>
</div>
</div>

            );
          })}

        </div>
      )}

    </div>
                          <Footer/>

  </>
   
  );
};

export default Page;
