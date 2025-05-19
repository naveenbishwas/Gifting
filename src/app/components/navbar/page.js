"use client";
import React, { useState } from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">KRYSS</div>
      </Link>
      <ul className="nav-links">
        {/* <li>
          <a href="#">Corporate gifting</a>
        </li> */}
        <li>
          <a href="/components/collections">Corporate procurement</a>
        </li>
        {/* <li
          onMouseEnter={() => handleMouseEnter("lookbook")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">The Lookbook ▾</a>
          {dropdown === "lookbook" && (
            <div className="dropdown">
              <a href="#">Collections</a>
              <a href="#">All Gifts</a>
              <a href="#">Celebration</a>
              <a href="#">Coffee & Tea</a>
              <a href="#">Food & Snacks</a>
              <a href="#">Fun & Entertainment</a>
              <a href="#">Holidays Through the Year</a>
              <a href="#">Office & Tech</a>
              <a href="#">Outdoors & Beach</a>
              <a href="#">Social Impact</a>
              <a href="#">Travel</a>
              <a href="#">Under $100</a>
              <a href="#">Wellness</a>
              <a href="#">Winter & Holiday</a>
            </div>
          )}
        </li> */}
        <li>
          <a href="#">See our work</a>
        </li>
        {/* <li
          onMouseEnter={() => handleMouseEnter("corporate")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Corporate Gifting ▾</a>
          {dropdown === "corporate" && (
            <div className="dropdown">
              <a href="#">All Corporate Gifting</a>
              <a href="#">Wellness Gifting</a>
              <a href="#">Self-Serve Gifting</a>
            </div>
          )}
        </li> */}
        <li>
          <a href="#">About us</a>
        </li>
        {/* <li
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Resources ▾</a>
          {dropdown === "resources" && (
            <div className="dropdown">
              <a href="#">Event Gifting Guide</a>
              <a href="#">Blog</a>
              <a href="#">Newsletter Sign-Up</a>
            </div>
          )}
        </li> */}
        <li>Contact us</li>
      </ul>
      <button className="contact-button">Contact</button>
    </nav>
  );
};

export default Navbar;
