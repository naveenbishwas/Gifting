"use client";
import Image from "next/image";
import styles from "./page.css";
import "./components/navbar/page";
import Navbar from "./components/navbar/page";
import TestimonialSlider from "./components/testimonials/page";
import ContactForm from "./components/contactform/page";
import { useState } from "react";
import Footer from "./components/footer/page";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "How can I learn more about what it's like working with Teak & Twine?",
      answer:
        "You can book a call with our team to discuss all the details of our gifting process.",
    },
    {
      question: "Can you add our company logo to the gifts?",
      answer:
        "Yes! We offer branded packaging, custom inserts, and more to reflect your company branding.",
    },
    {
      question:
        "Do we have to provide proofs for branded packaging or inserts?",
      answer:
        "Yes, we will send you proofs for approval before printing to ensure everything looks perfect.",
    },
    {
      question: "What if we don’t have our recipients’ addresses?",
      answer:
        "No worries! We have a seamless address collection process to gather recipient details.",
    },
    {
      question: "Can our recipients choose their own gift?",
      answer:
        "Absolutely! We offer recipient-choice gifting solutions for a personalized experience.",
    },
    {
      question:
        "How can I learn more about what it's like working with Teak & Twine?",
      answer:
        "You can book a call with our team to discuss all the details of our gifting process.",
    },
    {
      question: "What if we don’t have our recipients’ addresses?",
      answer:
        "No worries! We have a seamless address collection process to gather recipient details.",
    },
  ];

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
      <section className="corporate-container">
        <div className="text-section">
          <h4>CORPORATE GIFTING</h4>
          <h2>
            We know gifting and merch isn’t your full-time job, that’s why it’s
            ours.
          </h2>
          <button className="cta-button">Start Gifting!</button>
        </div>

        <div className="form-wrapper">
          {/* Black background behind form */}
          <div className="form-container-black-background"></div>

          {/* Main form */}
          <div className="form-container">
            <p>
              Fill out the form if you’re looking for <strong>50+ gifts</strong>
              , and our team will be in touch within{" "}
              <strong>1 business day</strong> (usually sooner!). Or{" "}
              <a href="#">book a call</a>.
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
                <input
                  type="text"
                  placeholder="Total Gifting Budget*"
                  required
                />
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
      </section>

      <div className="b-w-w">
        <div className="b-w-w-df">
          <div className="brand-logos">
            <span>
              <Image
                src={"/indeedlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/Gong-Logo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/googlelogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/microsoftlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/espnlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/toastlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
          </div>
          <div className="brand-logos">
            <span>
              <Image
                src={"/indeedlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/Gong-Logo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/googlelogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/microsoftlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/espnlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
            <span>
              <Image
                src={"/toastlogo.webp"}
                alt="brand-img"
                width={0}
                height={0}
                unoptimized
              ></Image>
            </span>
          </div>
        </div>
      </div>

      {/* <section className="what-we-do">
        <span>
          <h1>
            You know your brand. We know gifting.
            <br />
            Together we're unstoppable!
          </h1>
          <p>
            Our goal: A totally seamless gifting experience that wows your
            clients, colleagues, or employees!
          </p>
        </span>
      </section> */}

      <section className="stats-section">
        <div className="container">
          <div className="tit-sub">
            <h2 className="title">
              Why Choose NestBes for Real Estate Partner
            </h2>
            <p className="subtitle">
              At RealStruct, we understand that choosing a real estate partner
              is a significant decision. Here why we stand out from the rest.
            </p>
          </div>
          <div className="stats-container">
            <div className="stat">
              <div className="number">07 +</div>
              <p className="description">Full Customization ✔️</p>
            </div>
            <div className="stat">
              <div className="number">20 +</div>
              <p className="description">Branded Packaging 🎨</p>
            </div>
            <div className="stat">
              <div className="number">600 +</div>
              <p className="description">Tech Solutions 💻</p>
            </div>
            <div className="stat">
              <div className="number">96 +</div>
              <p className="description">1 on 1 Support ⭐</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="features-testimonials">
        <div className="features-container">
          <div className="features-card">
            <div className="feature">
              <span className="feature-icon"></span>
              <h3>Full Customization</h3>
              <p>
                No feeling locked-in by a catalog! We’ll create completely
                custom gifts to fit your exact needs!
              </p>
            </div>
            <div className="feature">
              <span className="feature-icon"></span>
              <h3>Branded Packaging</h3>
              <p>
                We go beyond “insert logo here” packaging. Our in-house designer
                is at the ready!
              </p>
            </div>
            <div className="feature">
              <span className="feature-icon"></span>
              <h3>Tech Solutions</h3>
              <p>
                Custom portals? Branded storefronts? Recipient choice? Yes, yes,
                and absolutely!
              </p>
            </div>
            <div className="feature">
              <span className="feature-icon"></span>
              <h3>1 on 1 Support</h3>
              <p>
                Work 1:1 with a dedicated Account Manager from start to finish.
                60% of our clients have worked with us for years.
              </p>
            </div>
          </div>
          <div className="features-black-background"></div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial">
            <span className="quote-symbol">“</span>
            <p>
              <i>
                Teak and Twine made the gift giving for our company so easy!
                They had multiple examples to show me which helped in narrowing
                our price point and choosing what items we wanted in our box. My
                account manager (Christina) was very helpful and timely in her
                responses. The design team took elements from our website and
                really made our branding look and feel like us. We will
                definitely use Teak and Twine again in the future!
              </i>
            </p>
            <span className="testimonial-author">SARAH @ WHITMAN PARTNERS</span>
          </div>
        </div>
      </section> */}

      <section className="process-steps">
        <p className="section-subtitle">SERIOUSLY SIMPLE PROCESS</p>
        <h2 className="section-title">
          Gifts ready for clients or employees in just a few short weeks
        </h2>

        <div className="steps-container">
          <div className="step">
            <Image
              className="step-image"
              src="/wishlist.jpg"
              alt="Send us your wishlist"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Send us your wishlist</h3>
            <p>
              You send us the numbers and <strong>ALL</strong> the details. We
              work our gifting magic to create a{" "}
              <strong>custom proposal</strong> that includes several thoughtful
              curations and all the decision-making info you (and your boss)
              need!
            </p>
          </div>

          <div className="step">
            <Image
              className="step-image"
              src="/proposal.jpg"
              alt="Review your proposal"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Review your proposal</h3>
            <p>
              You get ready to pick favorites as you dive into each of the{" "}
              <strong>
                handpicked gifts with product insights and pricing
              </strong>
              , packaging suite info, and timeline breakdowns. We promise that
              choosing one when you want them all is the hardest part of the
              whole process.
            </p>
          </div>

          <div className="step">
            <Image
              className="step-image"
              src="/relax.jpg"
              alt="Relax and let the gifting begin"
              width={200}
              height={200}
              unoptimized
            />
            <h3>Relax and let the gifting begin</h3>
            <p>
              You cross gifting off your to-do list and get ready to receive{" "}
              <strong>all</strong> the credit. We’ll take your approved curation
              and make it come to life – quickly and carefully. All the
              sourcing, production, fulfillment, and shipment is in our hands
              until the gift reaches yours.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="cta-banner">
        <div className="cta-banner-left">
          <h1>Ready to get started?</h1>
          <p>
            We’ve helped thousands of companies bring their brands to life with
            corporate gifting – and we can’t wait to work with you!
          </p>
        </div>
        <div className="cta-banner-right">
          <button>Book a Call Now</button>
        </div>
      </section> */}

      <section className="cta-section">
        <div className="cta-container">
          <h1>
            Dream Big <br /> Think Bigger
            <button className="cta-button">LET TALK</button> <br /> & Make It
            Happen!
          </h1>
        </div>
      </section>

      <section className="apart">
        <div className="apart-heading">
          <p>The Teak & Twine difference</p>
          <h1>Here’s what sets us apart:</h1>
        </div>

        <div className="image-text-section">
          {/* Image Container with Badge */}
          <div className="image-container">
            <Image
              className="main-image"
              src="/working-girl.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="badge">
              <p>
                We’re obsessed with making your gifts come to life – down to
                every last detail!
              </p>
            </div>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Fast, friendly, and freaking AMAZING!</h2>
            <p>
              You have approximately one million other things to do, so go ahead
              and cross “follow up with Teak & Twine” off your to-do list.
            </p>
            <p>
              We keep you totally up to date with the status of your project.
              And don’t be surprised if we send over a few selfies with your
              products along the way – we just can’t help it!
            </p>
          </div>
        </div>

        <div className="image-text-section rotate">
          {/* Image Container with Badge */}
          <div className="image-container">
            <Image
              className="main-image"
              src="/working-girl.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Fast, friendly, and freaking AMAZING!</h2>
            <p>
              You have approximately one million other things to do, so go ahead
              and cross “follow up with Teak & Twine” off your to-do list.
            </p>
            <p>
              We keep you totally up to date with the status of your project.
              And don’t be surprised if we send over a few selfies with your
              products along the way – we just can’t help it!
            </p>
          </div>
        </div>

        <div className="image-text-section">
          {/* Image Container with Badge */}
          <div className="image-container">
            <Image
              className="main-image"
              src="/working-girl.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Fast, friendly, and freaking AMAZING!</h2>
            <p>
              You have approximately one million other things to do, so go ahead
              and cross “follow up with Teak & Twine” off your to-do list.
            </p>
            <p>
              We keep you totally up to date with the status of your project.
              And don’t be surprised if we send over a few selfies with your
              products along the way – we just can’t help it!
            </p>
          </div>
        </div>

        <div className="image-text-section rotate">
          {/* Image Container with Badge */}
          <div className="image-container">
            <Image
              className="main-image"
              src="/working-girl.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Fast, friendly, and freaking AMAZING!</h2>
            <p>
              You have approximately one million other things to do, so go ahead
              and cross “follow up with Teak & Twine” off your to-do list.
            </p>
            <p>
              We keep you totally up to date with the status of your project.
              And don’t be surprised if we send over a few selfies with your
              products along the way – we just can’t help it!
            </p>
          </div>
        </div>

        <div className="image-text-section">
          {/* Image Container with Badge */}
          <div className="image-container">
            <Image
              className="main-image"
              src="/working-girl.jpg"
              alt="Gifting Process"
              width={0}
              height={0}
              unoptimized
            ></Image>
            <div className="image-black-shadow"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h2>Fast, friendly, and freaking AMAZING!</h2>
            <p>
              You have approximately one million other things to do, so go ahead
              and cross “follow up with Teak & Twine” off your to-do list.
            </p>
            <p>
              We keep you totally up to date with the status of your project.
              And don’t be surprised if we send over a few selfies with your
              products along the way – we just can’t help it!
            </p>

            <button id="started">Get Started !</button>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-heading">
          <TestimonialSlider />
        </div>
      </section>

      <section className="contact-form">
        <ContactForm />
      </section>

      <div className="faq-section">
        <h2>Corporate Gifting FAQs</h2>
        <div className="faq-arrow">↓</div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

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
