import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black w-100 py-2">
      <div className="d-flex justify-content-evenly align-items-center">
        {/* Logo */}
        <div>
          <Image src="/firebaselogo.png" width="40" height="40" alt="logo" />
        </div>

        {/* Navigation */}
        <div className="d-flex gap-4 align-items-center">
          <Link href="/" className="text-light fw-bold text-decoration-none">
            Home
          </Link>
          <Link href="/" className="text-light fw-bold text-decoration-none">
            Iphone
          </Link>
          <Link href="/" className="text-light fw-bold text-decoration-none">
            Samsung
          </Link>
          <Link href="/" className="text-light fw-bold text-decoration-none">
            Ipad
          </Link>
          <Link href="/" className="text-light fw-bold text-decoration-none">
            Smart Phones
          </Link>
          <Link href="/Contact" className="text-light fw-bold text-decoration-none">
            Contact Us
          </Link>

         
        </div>

        {/* Search + Cart */}
        <div className="d-flex gap-3 align-items-center">
          <input
            className="form-control h-50 py-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i className="fa-solid fa-cart-shopping fs-5 text-light"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
