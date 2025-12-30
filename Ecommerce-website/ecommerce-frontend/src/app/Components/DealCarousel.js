"use client"
import React from 'react'
import Image from 'next/image'

const Carousel = ({ images }) => {
  const shortcuts = [
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png',
      title:"iphone",
                  price:"55"

    },
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png',
            title:"iphone",
            price:"55"

    },
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png',
            title:"iphone",
            price:"55"

    }
  ]

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner row">
          
          {/* {shortcuts.map((img, index) => (
            <div 
              key={index}  
              className={`carousel-item ${index === 0 ? "active" : ""}`}  
              data-bs-interval="2000"
            >
              <Image 
                src={img.src}  
                width={100}
                height={400}
                className="d-block w-100"
                alt={img.alt}  
              />
            </div>
          ))} */}
          {shortcuts.map((img,index) =>(
              <div 
               key={index}  
              className={`carousel-item card col-md-2 border-0 w-25 ${index === 0 ? "active" : ""}`}  
              data-bs-interval="1000"
              >
  <Image 
  src={img.src} 
  className="card-img-top" 
  width={200}
                height={300}
  alt="..."/>
  <div className="card-body">
    <h6 className="card-text">{img.title}</h6>
    <span className='fs-6'>Price : {img.price}</span>
  </div>
</div>
          ))}
          {/* <div className="card col-md-2" >
  <img src="/fiverr-image1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>Price : 55$</h3>
  </div>
</div> */}

        </div>
      </div>
    </div>
  )
}

export default Carousel
