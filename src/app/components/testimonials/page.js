"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonials.css";

const testimonials = [
  {
    text: "Teak & Twine made the entire process of putting together client and employee gifts easy and fun. Each of the final products they have delivered for me have completely wowed us!",
    logo: "/revalize-logo.png",
    name: "Carley",
    position: "Product Marketing Manager at Revalize",
  },
  {
    text: "Teak & Twine made our client gift giving an effortless and seamless process. The gifts they offer are unique, creative, and carefully considered!",
    logo: "/slib-logo.png",
    name: "Amy",
    position: "Senior Living Investment Brokerage",
  },
  {
    text: "It was a delight to work with Teak & Twine for a second year in a row. We were experiencing a little swag fatigue, but they provided great ideas and helped to curate another thoughtful gift for our employees.",
    logo: "/evernote-logo.png",
    name: "Sara",
    position: "Evernote",
  },
  {
    text: "I'm always amazed by the beautiful, customized holiday boxes Teak & Twine designs for our customers. They offer the most amazing white glove service and effortless purchasing process!",
    logo: "/zendesk-logo.png",
    name: "Liza",
    position: "Zendesk",
  },
  {
    text: "Before discovering Teak & Twine, I would spend hours researching online to find the perfect gift. Teak & Twine simplified and streamlined this process.",
    logo: "/toast-logo.png",
    name: "Vicky",
    position: "Executive Assistant at Toast Inc.",
  },
  {
    text: "It's wonderful to have a company that we can rely on for beautiful gift options, great service, excellent product quality, and fast turnaround times!",
    logo: "/veritas-logo.png",
    name: "Andrew",
    position: "Executive Director at Veritas",
  },
];

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="testimonial-section">
      <p className="section-subtitle">
        You don’t have to take our word for it…
      </p>
      <h2 className="section-title">Hear From Our Happy Customers!</h2>

      {/* Custom Navigation Buttons */}
      <div className="testimonial-navigation">
        <button
          className="prev-button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          className="next-button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <img
              src={testimonial.logo}
              alt={testimonial.name}
              className="testimonial-logo"
            />
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-position">{testimonial.position}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
