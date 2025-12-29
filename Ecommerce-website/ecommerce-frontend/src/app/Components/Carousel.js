"use client"
import React from 'react'
import Image from 'next/image'

const Carousel = ({ images }) => {
  const shortcuts = [
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png'
    },
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png',
    },
    {
      src: '/fiverr-image1.png',
      alt: 'carousel.png'
    }
  ]

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner">
          
          {shortcuts.map((img, index) => (
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
          ))}

        </div>
      </div>
    </div>
  )
}

export default Carousel
