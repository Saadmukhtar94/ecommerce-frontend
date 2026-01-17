import React from 'react'
import styles from "@/app/Components/Components.module.css"
import Link from 'next/link'
export default function () {
  return (
    <div>
        <section id="footer">
  <footer className="py-5 container-fluid bg-black text-light">
    <div className="row">
      <div className="col-md-4 offset-md-1 mb-3">
        <form>
          <h3>About Hotel</h3>
          <p>
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat.
          </p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2 fs-1">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45626.72445286722!2d55.28440343949397!3d25.269098052136556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2s!4v1768682197933!5m2!1sen!2s"  
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </form>
      </div>
      <div className="col-md-3  mb-3">
        <h3>Explore</h3>
        <ul className="list-unstyled  footer-ul fw-bold">
          <li>
            <Link className="text-decoration-none text-light" href="index.html">Home</Link>
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">Rooms &amp; Suites</Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">Restaurant</Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">Spa &amp; Wellness</Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">About Hotel</Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">Contact </Link> 
          </li>
        </ul>
      </div>
      <div className="col-md-4  mb-3">
        <h3>Contact</h3>
        <ul className="list-unstyled  footer-ul">
          <li>
            <p className="w-50 mt-2">
              1616 Broadway NY, New York 10001 United States of America
            </p>
          </li>
          <li>
            <Link className="text-decoration-none text-light fs-3 mt-3 p" href="#">
              <i className="fa-solid fa-phone-volume mx-" /> 855 100 4444
            </Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light fw-light fs-4" href="#" >
              info@hoteladmin
            </Link> 
          </li>
          <li>
            <Link className="text-decoration-none text-light" href="#">
              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <i className="fa-brands fa-facebook-f fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-twitter fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-behance fs-5" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin fs-5" />
                </li>
              </ul>
            </Link> 
          </li>
        </ul>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-center  mt-4 border-top">
      <p className="fw-bold">© 2024 Travelli @ All Rights Reserved.</p>
    </div>
  </footer>
</section>

    </div>
  )
}
