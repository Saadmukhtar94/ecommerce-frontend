import React from 'react'
// import styles from "Components.css";
const Banner = () => {
  return (
    <div className=' row justify-content-evenly mt-3 h-100 text-secondary'>
        <div className='col-md-3 border border-black border-opacity-25 d-flex gap-3 justify-content-center'><i className="pt-3 fa-solid fa-truck-fast  fs-1"></i>
        <div>
           <h3 className='fw-bold'>Free Delivery</h3> 
           <p>Fast & Free shipping across Uae</p>
            </div></div>

            <div className='col-md-3 border border-black border-opacity-25 d-flex gap-3 justify-content-center'><i className="fa-solid fa-right-left fs-1 pt-3"></i>
            <div>
           <h3 className='fw-bold'>Return Policy</h3> 
           <p>Fast & Free shipping across Uae</p>
            </div></div>

<div className='col-md-3 border border-black border-opacity-25 d-flex gap-3 justify-content-center'><i className="fa-solid fa-right-left fs-1 pt-3"></i>
            <div>
           <h3 className='fw-bold'>Return Policy</h3> 
           <p>Fast & Free shipping across Uae</p>
            </div></div>
                </div>
  )
}

export default Banner