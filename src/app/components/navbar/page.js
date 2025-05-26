"use client";
import React, { useState } from "react";
import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // const handleMouseEnter = (menu) => {
  //   setDropdown(menu);
  // };

  // const handleMouseLeave = () => {
  //   setDropdown(null);
  // };

  const cancelHandler = () => {
    setMenuOpen(false);
  };

  const hamHandler = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <input type="checkbox" id="ham" hidden />
      <label htmlFor="ham" className="menu-icon">
        <div className="menu-toggle">
          {menuOpen ? (
            <svg
              onClick={cancelHandler}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          ) : (
            <svg
              onClick={hamHandler}
              id="ham-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </div>
      </label>

      <nav className="navbar">
        <Link href="/" className="logo">
          KRYYS
        </Link>

        <ul className="nav-links">
          <li>
            <a href="/components/infastructure">Infastructure</a>
          </li>
          <li>
            <a href="/components/collections">Corporate Procurement</a>
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
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <button className="contact-button">Contact</button>
      </nav>
    </>
  );
};

export default Navbar;
