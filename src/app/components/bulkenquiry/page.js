import Head from "next/head";
import "./bulk-enquiry.css"; // Adjust path as needed
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function BulkEnquiry() {
  return (
    <>
      <Head>
        <title>Bulk Enquiry Form</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className="container-for-form">
        <h2>Bulk Enquiry</h2>

        <form action="/api/contact" method="POST">
          <div className="form-group">
            <input type="text" placeholder="Your Name *" name="name" required />
            <input
              type="email"
              placeholder="Email Address *"
              name="email"
              required
            />
            <input
              type="tel"
              placeholder="Mobile No. *"
              name="phone"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Address *"
              name="address"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <input type="text" placeholder="City *" name="city" required />
            <select name="state" required>
              <option value="">State *</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              {/* Add remaining states here... */}
            </select>
            <input
              type="text"
              placeholder="Pincode *"
              name="pincode"
              required
            />
          </div>

          <div className="form-group">
            <select name="category" required>
              <option value="">Category *</option>
              <option value="Medium Back Office Chair">
                Medium Back Office Chair
              </option>
              <option value="Visitor Chair">Visitor Chair</option>
              <option value="Bar Stool">Bar Stool</option>
              <option value="High Back Boss Chair">High Back Boss Chair</option>
              <option value="Folding Chair">Folding Chair</option>
              <option value="Mesh Chair">Mesh Chair</option>
              <option value="Gaming Chair">Gaming Chair</option>
              <option value="Accessories">Accessories</option>
            </select>
            <input
              type="number"
              placeholder="Quantity *"
              name="quantity"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message *"
              name="message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn-form">
            Send Query
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
