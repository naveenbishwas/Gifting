"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./infastructure.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Infastructure = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const textRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarVisible((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarVisible(false);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="infastructure-container">
      <div className="banner">
        <div className="back-image" id="homepage">
          <div className="background-img">
            <Image
              src={"/Picture7.png"}
              alt="Picture of the background"
              width={0}
              height={0}
              unoptimized
              priority
            />
          </div>
          <div className="background-color"></div>
        </div>
        <header>
          <Navbar />
          <div className="header-text">
            <h1 ref={textRef}>KRYYS GLOBAL</h1>
            <p>
              We are pioneers in the steel and metal industry, committed to
              delivering top-quality products and unmatched service. With years
              of expertise and a reputation for excellence, we are your trusted
              partner for all <span id="orange">steel</span> and{" "}
              <span id="orange">metals</span> needs
            </p>
          </div>
        </header>
      </div>

      <div className="vision-mission">
        <h1>Vision & Mission</h1>
        <div className="vision-mission-df">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be the industry leader in providing innovative,
              durable, and cost-effective pre-engineered building solutions that
              meet the evolving needs of our clients. We strive to deliver
              high-quality structures that combine efficiency, sustainability,
              and design flexibility, ensuring that every project is completed
              on time and within budget. By leveraging cutting-edge technology,
              sustainable practices, and a customer-focused approach, we aim to
              reshape the construction landscape and become the preferred
              partner for businesses and industries worldwide, contributing to
              the growth and success of our communities.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Kryys Global will consistently be the preferred partner of steel
              building users, their consultants and contractors. We give value
              for money by prompt delivery of high quality buildings, supported
              by accurate engineering designs through our investments in people,
              technology and manufacturing capacity. Profitable growth and our
              passion for innovation let us continue to offer rewarding careers
              to our employees and continuously provide excellent service to our
              customers.
            </p>
          </div>
        </div>
      </div>

      <div className="product-we-offer">
        <h1>Product We Offer</h1>
        <div className="product-offer-grid">
          <div className="products">
            <span>
              <Image
                src={"/frames-one.jpg"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Standard Frame Types</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/fed1.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>PEB Frames</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/puf.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Insulation</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/cranes-one.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Cranes</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/factory-two.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Mezzanine</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/girt.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Purlin & Girt</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/roof-img-one.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Roofing & Cladding</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/technical-one.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Technical Details</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/time-one.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Trims & Flashing</h3>
            </span>
          </div>
          <div className="products">
            <span>
              <Image
                src={"/ven1.png"}
                width={450}
                height={250}
                alt="Images"
                unoptimized
                priority
              ></Image>
            </span>
            <span>
              <h3>Ventilation</h3>
            </span>
          </div>
        </div>
      </div>

      <div className="section-three">
        <hr className="section-three-line" />

        <div className="section-three-df">
          <div className="section-three-top">
            <h1>Our Clients</h1>
          </div>
          <div className="section-three-bottom">
            <div className="section-three-bottom-logo-one">
              <div className="">
                <Image
                  src={"/Picture1.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/Picture2.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture3.png"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture4.png"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
            </div>
            <div className="section-three-bottom-logo-two">
              <div className="">
                <Image
                  src={"/Picture1.png"}
                  width={0}
                  height={0}
                  alt="alfanar"
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                ></Image>
              </div>
              <div className="">
                <Image
                  src="/Picture2.png"
                  alt="ardan"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture3.png"
                  alt="danish"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              <div className="">
                <Image
                  src="/Picture4.png"
                  alt="ets"
                  width={0}
                  height={0}
                  unoptimized
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="section-three-line" />
      </div>

      <div className="section-four">
        <div className="section-four-df">
          <div className="section-four-header">
            <h1>
              WE THRIVE ON <span id="imposs">IMPOSSIBLE</span>
            </h1>
          </div>

          <div className="section-four-grid">
            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/yash.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Purple Drops - PEB Structure with Mezzanine Floor and Goods
                    Lift
                  </h1>
                  <p>
                    We proudly designed, manufactured, and installed a robust
                    Pre-Engineered Building (PEB) structure for Purple Drops, a
                    leading water bottle processing company. This project
                    featured a customized mezzanine floor, offering additional
                    workspace and storage, along with a seamlessly integrated
                    goods lift for efficient material handling.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>01</h1>
              </div>
            </div>

            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/purple.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Yash Packaging and Paras Enterprises - PEB Structure with
                    Mezzanine Floor and Complete Civil Work
                  </h1>
                  <p>
                    We had the privilege of designing, manufacturing, and
                    installing a state-of-the-art Pre-Engineered Building (PEB)
                    for Yash Packaging and Paras Enterprises, a prominent name
                    in the packaging material industry. This comprehensive
                    project included a customized mezzanine floor, along with
                    all necessary civil work, including staff rooms, washrooms,
                    and essential facilities.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>02</h1>
              </div>
            </div>

            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/nine.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Nine Corporation - PEB Structure with Mezzanine Floor and
                    Ventilation Systems
                  </h1>
                  <p>
                    We successfully designed, manufactured, and installed a
                    durable Pre-Engineered Building (PEB) for Nine Corporation
                    near Mundra, Gujarat. Specializing in tyre recycling and
                    storage, the facility required customized solutions to meet
                    its operational needs.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>03</h1>
              </div>
            </div>

            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/akshar.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Akshar Industries - Heavy PEB Structure for Steel Trading
                    Operations
                  </h1>
                  <p>
                    We proudly designed, manufactured, and installed a robust
                    Heavy Structure for Akshar Industries in Gandhidham,
                    Gujarat. Specializing in the trading of steel components,
                    plates, angles, and more, the company needed a reliable and
                    spacious structure to support its operations.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>04</h1>
              </div>
            </div>

            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/agri.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Akshar Agri Processing Pvt. Ltd. - Conventional Structure
                    for Agri Product Processing
                  </h1>
                  <p>
                    We successfully designed, manufactured, and installed a
                    conventional steel structure for Akshar Agri Processing Pvt.
                    Ltd. near Mundra, Gujarat. As a company engaged in the
                    processing of agricultural products, they required a robust
                    and spacious facility to streamline their operations.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>05</h1>
              </div>
            </div>

            <div className="section-four-box-one">
              <div className="section-four-box-one-left">
                <div className="section-four-box-one-left-image">
                  <video autoPlay muted loop playsInline>
                    <source src="/agro.mp4" type="video/mp4"></source>
                  </video>
                </div>
                <div className="section-four-box-one-left-text">
                  <h1>
                    Ashok Agro Commodity - PEB Warehouse for Rental Purpose
                  </h1>
                  <p>
                    We had the opportunity to design, manufacture, and install a
                    high-quality Pre-Engineered Building (PEB) for Ashok Agro
                    Commodity near Mundra, Gujarat. As a versatile business
                    entity, they required a durable and spacious warehouse to
                    offer on rent.
                  </p>
                </div>
              </div>
              <div className="section-four-box-one-right">
                <h1>06</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="factory-unit">
        <div className="factory-unit-heading">
          <h1>Factory Unit</h1>
          <p>
            Our factory unit is built on precision, efficiency, and innovation,
            ensuring top-quality production at every stage. With a commitment to
            sustainability, we integrate advanced manufacturing techniques to
            optimize performance while reducing environmental impact. Every
            product reflects our dedication to craftsmanship, reliability, and
            industry-leading standards. By continuously evolving, we power
            industries with excellence, meeting the demands of a dynamic and
            competitive market
          </p>
        </div>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {/* <div className="keen-slider__slide number-slide1">
              <div className="unit-right-part">
                <Image
                  src="./Untitled-design.png"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div> */}
            <div className="keen-slider__slide number-slide2">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image10.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image11.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide4">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image12.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide5">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image13.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide6">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image14.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
            <div className="keen-slider__slide number-slide7">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image15.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>

            <div className="keen-slider__slide number-slide9">
              <div className="unit-right-part">
                <Image
                  src="/Factory-image17.jpeg"
                  alt="unit image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Infastructure;
