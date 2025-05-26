"use client";
import Image from "next/image";
import styles from "./page.css";
import "./components/navbar/page";
import Navbar from "./components/navbar/page";
import TestimonialSlider from "./components/testimonials/page";
import ContactForm from "./components/contactform/page";
import { useState } from "react";
import Footer from "./components/footer/page";
import CorporateGiftingSlider from "./components/herobanner/page";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const brands = [
    { name: "Sendoso", src: "/sendoso.png" },
    { name: "Reachdesk", src: "/reachdesk.png" },
    { name: "Postal", src: "/postal.svg" },
    { name: "Giftagram", src: "/giftagram.png" },
    { name: "Alyce", src: "/alyce.png" },
    { name: "Corporate Gift", src: "/corporateGiftCom.png" },
  ];

  return (
    <div className="main-container">
      <Navbar />

      <CorporateGiftingSlider />

      <div className="b-w-w">
        <div className="b-w-w-df">
          <div className="brand-logos">
            <span>
              <Image
                src={"./indeedlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./Gong-Logo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./googlelogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./microsoftlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./espnlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./toastlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
          </div>
          <div className="brand-logos">
            <span>
              <Image
                src={"./indeedlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./Gong-Logo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./googlelogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./microsoftlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./espnlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <Image
                src={"./toastlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
                priority
              ></Image>
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="custom-section">
          <h2 className="desktop">
            You know your business. We know how to deliver.
            <br /> Together, we unstoppable!
          </h2>
          <h2 className="mobile">
            You know your business. We know how to deliver. Together, we
            unstoppable!
          </h2>
          <p>
            Our goal: to be your one-stop partner for corporate procurement,
            manufacturing, and <br />
            gifting—ensuring a seamless experience that wows clients, <br />{" "}
            colleagues, or employees!
          </p>
          <div className="custom-cards">
            <div className="card">
              <span className="checkmark">🛠️</span>
              <h3>Full Customization</h3>
              <p>
                Represents building, tailoring, or customizing something to your
                exact specs.
              </p>
            </div>
            <div className="card">
              <div className="icon">🎨</div>
              <h3>Brand Integration</h3>
              <p>
                Suggests creativity, design, and visually integrating brand
                elements.
              </p>
            </div>
            <div className="card">
              <div className="icon">💻</div>
              <h3>Seamless Technology</h3>
              <p>
                Conveys modern tech solutions—portals, automated processes, and
                streamlined systems.
              </p>
            </div>
            <div className="card">
              <div className="star">🤝 </div>
              <h3>Dedicated Support</h3>
              <p>
                Symbolizes close collaboration, personalized attention, and
                partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-steps">
        <p className="section-subtitle">SERIOUSLY SIMPLE PROCESS</p>
        <h2 className="section-title">
          Simplify Corporate Procurement with Curated Gift, That Elevate Brand
          Value, Delight Clients.
        </h2>

        <div className="steps-container">
          <div className="step">
            <Image
              className="step-image"
              src="/discuss.png"
              alt="Send us your wishlist"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Send Us Your Requirements</h3>
            <p>
              You share your numbers and all the important details—whether it’s
              corporate gifting, <strong>procurement</strong> needs, or
              manufacturing solutions. We then draft a custom proposal that
              meets your goals, budget, and timeline.
            </p>
          </div>

          <div className="step">
            <Image
              className="step-image"
              src="/hand.png"
              alt="Review your proposal"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Review Your Proposal</h3>
            <p>
              You get to explore handpicked recommendations with product
              insights, pricing <strong>breakdowns</strong> and scheduling
              options. Pick your favorites, request changes, or{" "}
              <strong>finalize exactly</strong>
              what you need—every step is tailored to you.
            </p>
          </div>

          <div className="step">
            <Image
              className="step-image"
              src="/parcel.png"
              alt="Relax and let the gifting begin"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Relax and Let Us Deliver</h3>
            <p>
              Cross it off your to-do list and let us handle the rest. Once you
              approve, we manage production, <strong>packaging,</strong> and
              logistics, <strong>ensuring </strong>a seamless experience so you
              can focus on what truly matters.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h1 className="desktop">
            Dream Big <br /> Think Bigger
            <button className="cta-button">LET TALK</button> <br /> & Make It
            Happen!
          </h1>
          <h1 className="mobile">
            Dream Big Think Bigger
            <button className="cta-button">LET TALK</button> <br /> & Make It
            Happen!
          </h1>
        </div>
      </section>

      <section className="apart">
        <div className="apart-heading">
          <p>KRYSS difference</p>
          <h1>Here’s what sets us apart:</h1>
        </div>

        <div className="image-text-section">
          <div className="image-container">
            <Image
              className="main-image"
              src="/team1.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Simplify Your Sourcing, Amplify Your Success</h2>
            <p>
              We get it—you’ve got a million items on your to-do list. Let us
              take “procurement headaches” off that list. From vetting suppliers
              to ensuring on-time deliveries, our expert team handles the entire
              supply chain so you can focus on what you do best.
            </p>
            <p>
              And yes, we’ll keep you totally up to speed—think regular updates
              (and maybe a few fun photos) along the way!
            </p>
          </div>
        </div>

        <div className="image-text-section rotate">
          <div className="image-container">
            <Image
              className="main-image"
              src="/s.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Your All-in-One Manufacturing Partner</h2>
            <p>
              Need high-grade steel? Corrugated boxes? A partner who can align
              production with your corporate needs? That’s where we come in.
            </p>
            <p>
              We oversee everything from raw materials to quality checks, so you
              can rest easy knowing your project is in capable hands. Oh, and
              we’ll snap a few behind-the-scenes pics to keep you in the
              loop—because we believe in transparency every step of the way.
            </p>
          </div>
        </div>

        <div className="image-text-section">
          <div className="image-container">
            <Image
              className="main-image"
              src="/gift1.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Holiday Cheer, Handled</h2>
            <p>
              The festive season is hectic enough—let us make corporate gifting
              effortless. From carefully curated gift selections to on-time
              deliveries,
            </p>
            <p>
              we handle every detail so you can focus on celebrating. Expect an
              unforgettable unboxing experience that spreads joy long after the
              holidays are over!
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-heading">
          <TestimonialSlider />
        </div>
      </section>

      <section className="contact-form-copy">
        <ContactForm />
      </section>

      <section className="gift-section">
        {/* Brand Logo Slider */}
        <div className="brand-slider">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.name}
              width={120}
              height={50}
              className="brand-logo"
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="gift-content">
          {/* Left Content */}
          <div className="gift-text">
            <p className="subheading">2024 Corporate Gifts</p>
            <h2>Check Out What Its Like To Work With Us!</h2>
            <button className="cta-button">Learn More!</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
