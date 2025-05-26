import Head from "next/head";
import "./about-us.css";
import Image from "next/image";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Navbar />

      <div className="about-page">
        {/* Top Banner Image */}
        <div className="banner">
          <Image
            src={"../about-us.png"}
            alt="About us"
            width={0}
            height={0}
            unoptimized
            priority
          ></Image>
        </div>

        {/* Section with Image Left, Content Right */}
        <div className="section section-left-img">
          <div className="image">
            <Image
              src={"../aboutimg-1.png"}
              alt="Our Mission"
              width={0}
              height={0}
              unoptimized
              priority
            ></Image>
          </div>
          <div className="text">
            <h2>About us</h2>
            <p>
              KRYYS GLOBAL HOLDINGS is a dynamic and comprehensive corporate
              procurement company, incorporated to simplify and streamline the
              sourcing needs of modern businesses. We specialize in end-to-end
              procurement solutions—ranging from raw materials to customized
              gifting items—serving businesses across sectors with reliability,
              efficiency, and cost-effectiveness.
            </p>
            <br />
            <p>
              Our commitment is to deliver quality products, timely service, and
              a seamless procurement experience. Whether it’s industrial inputs,
              branded corporate merchandise, or promotional giveaways, we ensure
              every procurement aligns with your brand standards and budget.
            </p>
          </div>
        </div>

        {/* Section with Image Right, Content Left */}
        <div className="section section-right-img" id="flex">
          <div className="text">
            <h2>Why Choose Us</h2>
            <ul>
              <li>
                Wide Product Range: One-stop solution for all corporate needs
              </li>
              <li>
                Custom Solutions: Products tailored to meet your branding goals
              </li>
              <li>
                Reliable Sourcing: Network of trusted manufacturers and vendors
              </li>
              <li>
                On-Time Delivery: Efficient logistics and timely fulfillment
              </li>
              <li>
                Quality Assurance: Every product is checked for standards and
                consistency
              </li>
            </ul>
          </div>
          <div className="image">
            <Image
              src={"../aboutimg-2.png"}
              alt="Our Mission"
              width={0}
              height={0}
              unoptimized
              priority
            ></Image>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
