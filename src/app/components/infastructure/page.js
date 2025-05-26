"use client";

import React from "react";
import "./infastructure.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

const Page = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible((prev) => !prev); // Toggle visibility
  };

  const closeNavbar = () => {
    setNavbarVisible(false); // Close when clicking cancel
  };

  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.to("#frame", {
  //       x: -455,
  //       duration: 1,
  //       ease: "power1",
  //       scrollTrigger: {
  //         trigger: "#frame",
  //         start: "top 80%",
  //         end: "top 50%",
  //         scrub: false,
  //       },
  //     });

  //     gsap.to(".topic-headng p", {
  //       x: 75,
  //       duration: 1,
  //       ease: "power1",
  //       scrollTrigger: {
  //         trigger: "#frame",
  //         start: "top 90%",
  //         end: "top 50%",
  //         scrub: false,
  //       },
  //     });
  //     if (window.innerWidth <= 768) {
  //       gsap.to("#frame", {
  //         x: -105,
  //         duration: 1,
  //         ease: "power1",
  //         scrollTrigger: {
  //           trigger: "#frame",
  //           start: "top 80%",
  //           end: "top 50%",
  //           scrub: false,
  //         },
  //       });
  //       gsap.to(".topic-headng p", {
  //         x: 36,
  //         duration: 1,
  //         ease: "power1",
  //         scrollTrigger: {
  //           trigger: "#frame",
  //           start: "top 90%",
  //           end: "top 50%",
  //           scrub: false,
  //         },
  //       });
  //     }
  //   }, []);

  const openImagePopup = (src) => {
    setSelectedImage(src);
    setTimeout(() => setIsVisible(true), 0);
  };

  const closeImagePopup = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="main-container">
      <Navbar />
      <section className="topic-headng">
        <div className="blue-border">
          <h1 id="frame">PEB Frames </h1>
          <p>
            A PEB (Pre-Engineered Building) frame in valves typically refers to
            a structural framework designed to house and support industrial
            valve systems within a larger infrastructure. These frames are
            custom-engineered to meet specific requirements, providing a stable
            and durable environment for valve operation.
          </p>

          <p>
            PEB frames are commonly used in industries like oil and gas, water
            treatment, and manufacturing, where valves play a critical role in
            controlling the flow of fluids or gases. The modular nature of PEB
            frames allows for easy installation, expansion, and maintenance.
            They are constructed using materials such as steel or aluminum to
            ensure resistance to environmental factors and operational stress,
            ensuring longevity and reliable performance in demanding conditions.
          </p>
        </div>
      </section>

      <section className="topic-images">
        <div className="row-one">
          <div className="row-left">
            <h2>1. CLEAR SPAN (CS):</h2>
            <p>
              This type of frame is the most preferred and widely used
              worldwide. It offers clear access to loading and stacking function
              on within the shed. As the pillars or columns are coming at both
              ends, it gives a very spacious and airy look to the entire re
              shed. We can design these sheds for a width of up to 150 meters.
              However, the water discharge from these types of frames is on both
              sides of the shed as this is a TWO SLOPE frame.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed1.png");
              }}
            >
              <span>
                <h3>CLEAR SPAN (CS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed1.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-two rotate">
          <div className="row-left">
            <h2>2. MULTI SPAN (MS)</h2>
            <p>
              This type of frame is most suitable for clients who want a wide
              shed but do not necessarily want it to be clear span because it
              gives us the economy of Two Sloped Structure and the columns in
              between distributes the load and thus reduces the weight of the
              structure. It is the most economical form of frame for large span
              buildings. The water discharge is however done from the two side
              of the slope.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed2.png");
              }}
            >
              <span>
                <h3>MULTI SPAN (MS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed2.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-three">
          <div className="row-left">
            <h2>3.SINGLE SLOPE (SS)</h2>
            <p>
              This type of frames are the preferred choice when clients wants or
              has restriction on to drain water of both sides of the shed. It is
              also chosen by clients in case their existing ng sheds require an
              expansion in width but is not designed to support the load of a
              lean to shed. In case these sheds are very wide then is becomes
              economical to make the same in Multi span.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed3.png");
              }}
            >
              <span>
                <h3>SINGLE SLOPE (SS)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed3.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-four rotate">
          <div className="row-left">
            <h2>4. MULTI GABLE (MG)</h2>
            <p>
              This type of frame is the used in case of wide shed but are more
              economical than the Multi Span frame type. It is lighter because
              the trusses are smaller hence economical but it comes with a rider
              that it may has a water discharge in the center of the shed which
              would require an internal drainage line, which is not preferred in
              most of the industries where water ingress during unplanned excess
              rains lead to losses.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed5.png");
              }}
            >
              <span>
                <h3>MULTI GABLE (MG)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed5.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>

        <div className="row-five">
          <div className="row-left">
            <h2>5. LEAN TO (LT)</h2>
            <p>
              This type of frame is the most preferred type, for sheds requiring
              an expansion along the width. It requires the original shed to be
              designed such that it is able to take the load of the expanded
              shed along with the new shed. Lean to sheds are designed to match
              the roof slope of the existing shed such that the water is
              discharged out of the shed.
            </p>
          </div>
          <div className="row-right">
            <div
              className="img-box"
              onClick={() => {
                openImagePopup("/fed5.png");
              }}
            >
              <span>
                <h3>LEAN TO (LT)</h3>
              </span>
              <span>
                <Image
                  id="frame-img-one"
                  className="frame-imgs"
                  src="/fed5.png"
                  alt=""
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </span>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className={`image-popup ${isVisible ? "visible" : ""}`}
          onClick={closeImagePopup}
        >
          <div className="popup-content">
            <Image
              src={selectedImage}
              alt=""
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Page;
