import Head from "next/head";
import Link from "next/link";
import "./[slug].css";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import { pdpData } from "@/libs/pdpData";

export default async function ProductPage({ params }) {
  const { slug } = params;

  const product = pdpData.find((p) => p.url === slug);

  if (!product) {
    // You can render a 404 page or throw an error
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Product not found</h1>
        <p>We couldn’t find the product you’re looking for.</p>
        <Link href="/">Go back home</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Navbar />
      <div className="pdp-container">
        <div className="left-section">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="product-image"
            width={400}
            height={400}
            unoptimized
          />
        </div>
        <div className="right-section">
          <h1 className="title">{product.title}</h1>
          <div className="price-wrapper">
            <span className="price">₹{product.price}</span>
            <span className="original-price">₹{product.originalPrice}</span>
          </div>
          <p className="description">{product.description}</p>

          <Link href="/components/bulkenquiry">
            <button className="button">Bulk Enquiry</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
