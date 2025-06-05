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
                Smart Watches / Fitness Bands
              </option>
              <option value="Visitor Chair">Luxury Pen Sets</option>
              <option value="Bar Stool">Branded Travel Kits</option>
              <option value="High Back Boss Chair">
                Metal Table Clocks or Crystal Showpieces
              </option>
              <option value="Folding Chair">
                Customized Aromatherapycor Wellness Boxes
              </option>
              <option value="Mesh Chair">
                Premium Corporate Jackets / Blazers
              </option>
              <option value="Gaming Chair">
                Branded Gift Vouchers or Subscription Boxes
              </option>
              <option value="Accessories">T-Shirt</option>
              <option value="Accessories">Luxury Pen Sets</option>
              <option value="Accessories">Notebooks & Diaries</option>
              <option value="Accessories">
                Eco-friendly Jute Bags or Cotton Totes
              </option>
              <option value="Accessories">Steel Water Bottles</option>
              <option value="Accessories">Sippers or Coffee Mugs</option>
              <option value="Accessories">
                Basic Laptop Sleeves or File Folders
              </option>
              <option value="Accessories">Keychains</option>
              <option value="Accessories">
                Cap/Hat with Embroidery or Print
              </option>
              <option value="Accessories">
                High-end Bluetooth Speakers or Earbuds
              </option>
              <option value="Accessories">
                Premium Leather Diaries & Organizers
              </option>
              <option value="Accessories">Customized Gift Hampers</option>
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
