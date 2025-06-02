import React from "react";
import "./footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">KRYSS</div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Menu</h4>
              <ul>
                <li>
                  <a href="/components/infastructure">Infrastructure</a>
                </li>
                <li>
                  <a href="/components/collections">Corporate Procurement</a>
                </li>
                <li>
                  <a href="#">See our work</a>
                </li>
                <li>
                  <a href="/components/about-us">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            {/* <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Small business vendors</a>
                </li>
                <li>
                  <a href="#">News and Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Right Section - Newsletter & Social Media */}
        <div className="footer-right">
          <h4>Join</h4>
          <p>
            Subscribe to our Newsletter for the latest corporate gifting trends,
            cool company swag ideas, and more!
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Enter email" />
            <button>Sign me up!</button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">
              <Image
                src="/pinterest-icon.svg"
                alt="img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </a>
            <a href="#">
              <Image
                src="/instagram-icon.svg"
                alt="img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </a>
            <a href="#">
              <Image
                src="/email-icon.svg"
                alt="img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </a>
            <a href="#">
              <Image
                src="/linkedin-icon.svg"
                alt="img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Copyright & Privacy */}
      <div className="footer-bottom">
        <p>© 2025 KRYSS. All rights reserved.</p>
        <a href="#">Our privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
