"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import "./collection.css";
import Image from "next/image";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { pdpData } from "@/libs/pdpData";
import Link from "next/link";

export default function Collection() {
  return (
    <div>
      <Head>
        <title>Product Collection</title>
        <meta name="description" content="Browse our collection of products" />
        <link rel="stylesheet" href="/styles/collection.css" />
      </Head>

      <Navbar />
      <div className="collection-container">
        <h1 className="collection-title">Product Collection</h1>

        <div className="product-grid">
          {pdpData.map((product) => (
            <Link href={`/products/${product.url}`} className="product-box">
              <div key={product.id}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="product-image-collection"
                  unoptimized
                  width={0}
                  height={0}
                />
                <div className="product-content">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
