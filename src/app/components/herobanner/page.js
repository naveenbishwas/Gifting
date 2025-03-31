"use client"; // Ensure it runs only on the client side
import { useState, useEffect } from "react";
import "./herobanner.css"; // Import global CSS

const images = [
  "/gifting.png",
  "/gifting-3.png",
  "/gifting-2.png",
  "/gifting-1.png",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="text-section">
        <h4>CORPORATE GIFTING</h4>
        <h2>
          We know gifting and merch isn’t your full-time job, that’s why it’s
          ours.
        </h2>
        <button className="cta-button">Start Gifting!</button>
      </div>

      <div className="form-wrapper">
        <div className="form-container-black-background"></div>

        <div className="form-container">
          <p>
            Fill out the form if you’re looking for <strong>50+ gifts</strong>,
            and our team will be in touch within <strong>1 business day</strong>{" "}
            (usually sooner!). Or <a href="#">book a call</a>.
          </p>
          <form className="gifting-form">
            <div className="form-group">
              <input type="text" placeholder="First name*" required />
              <input type="text" placeholder="Last name*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="Phone number*" required />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Number of gifts needed*"
                required
              />
              <input type="text" placeholder="Total Gifting Budget*" required />
            </div>
            <div className="form-group">
              <input
                id="date"
                type="date"
                placeholder="Gifts needed by date*"
                required
              />
              <input
                type="text"
                placeholder="How did you hear about us?*"
                required
              />
            </div>
            <textarea placeholder="Message*" rows="4"></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
}
