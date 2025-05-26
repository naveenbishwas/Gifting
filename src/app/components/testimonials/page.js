"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonials.css";
import Image from "next/image";

const testimonials = [
  {
    text: "KRYYS helped us meet strict timelines, stayed within budget, and provided exceptional service throughout. A procurement partner we trust.",
    logo: "/boy.png",
    name: "Andrew",
    position: "Executive Director at Veritas",
  },
  {
    text: "KRYYS transformed our corporate procurement workflow. From sourcing to delivery, every step was seamless and professional. Our stakeholders were impressed with the results.",
    logo: "/girl.png",
    name: "Carley",
    position: "Procurement Manager at Revalize",
  },
  {
    text: "Their curated corporate gifts checked every box — compliance, creativity, and speed. KRYYS is now our go-to for enterprise gifting solutions.",
    logo: "/girl.png",
    name: "Amy",
    position: "Operations Lead at SLIB",
  },
  {
    text: "We needed a vendor who understood procurement protocols and brand alignment. KRYYS nailed both and made it easy to scale our gifting program.",
    logo: "/girl.png",
    name: "Sara",
    position: "Procurement Coordinator at Evernote",
  },
  {
    text: "KRYYS delivered an outstanding procurement experience with fast approvals, great vendor support, and on-brand gifting solutions that wowed our clients.",
    logo: "/boy.png",
    name: "Liza",
    position: "Procurement Officer at Zendesk",
  },
  {
    text: "With KRYYS, our corporate gifting process is now faster, more efficient, and perfectly aligned with our procurement standards. Total time-saver.",
    logo: "/boy.png",
    name: "Vicky",
    position: "Executive Assistant at Toast Inc.",
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
            <p className="testimonial-text">{testimonial.text}</p>
            <Image
              src={testimonial.logo}
              alt={testimonial.name}
              className="testimonial-logo"
              width={0}
              height={0}
              unoptimized
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
