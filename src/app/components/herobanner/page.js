"use client"; // Ensure it runs only on the client side
import { useState, useEffect } from "react";
import "./herobanner.css"; // Import global CSS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";

const images = [
  "/new-banner4.png",
  "/new-banner2.png",
  "/new-banner1.png",
  "/new-banner3.png",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // const submitHanlder = (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_lc3zqsj";
  //   const templateId = "template_lgmyk3o";
  //   const publicKey = "vwQ1UwMU_xiay6xqT";
  //   const comfirmationTemplateId = "template_dtk82zi";

  //   const templateParams = {
  //     to_name: "Team",
  //     client_name: firstName,
  //     client_name: lastName,
  //     phone_no: phone,
  //     email_id: email,
  //     message_id: message,
  //   };

  //   const confirmationParams = {
  //     name: `${firstName} ${lastName}`,
  //     to_email: email,
  //     to_phone: email,
  //     to_message: message,
  //   };

  //   emailjs
  //     .send(serviceId, templateId, templateParams, publicKey)
  //     .then((response) => {
  //       console.log("Email sent successfully", response);

  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPhone("");
  //       setMessage("");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   emailjs
  //     .send(serviceId, comfirmationTemplateId, confirmationParams, publicKey)
  //     .then((response) => {
  //       console.log("Confirmation email sent sucessfully", response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const serviceId = "service_1dg1yw8";
    const templateId = "template_0tc8ixe";
    const confirmationTemplateId = "template_7hd724r";
    const publicKey = "ZsS85rnTf5NpgwIsN";

    const templateParams = {
      to_name: "Your Team",
      to_email: "Kryysglobal@gmail.com",
      client_firstname: firstName,
      client_lastname: lastName,
      phone_no: phone,
      email_id: email,
      message_body: message,
    };

    const confirmationParams = {
      to_name: "Your Team",
      to_email: "Kryysglobal@gmail.com",
      client_firstname: firstName,
      client_lastname: lastName,
      phone_no: phone,
      email_id: email,
      message_body: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Admin email sent", response);

        // 🔄 Attempt confirmation email, but don't block success flow
        emailjs
          .send(
            serviceId,
            confirmationTemplateId,
            confirmationParams,
            publicKey
          )
          .then((response) => {
            console.log("Confirmation email sent", response);
          })
          .catch((error) => {
            console.log("Confirmation email error", error);
          });

        // ✅ Show success regardless of second email
        resetFormFields();
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.log("Admin email error", error);
        alert("Oops! Something went wrong.");
      });
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setFade(true); // Start the fade out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // Fade in after image change
    }, 1000); // Match this time with your fade duration
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 1000);
  };

  return (
    <div
      className={`slider-container ${fade ? "fade" : ""}`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="text-section">
        <h4>CORPORATE PROCUREMENT</h4>
        <h2>
          We know gifting and merch isnt your full-time job, thats why its ours.
        </h2>
        <button className="cta-button">Sign up</button>
      </div>

      <div className="form-wrapper">
        <div className="form-container-black-background"></div>

        <div className="form-container">
          <p>
            Fill out the form, and our team will be in touch within{" "}
            <strong>1 business day</strong> (usually sooner!). Or{" "}
            <a href="#">book a call</a>.
          </p>
          <form
            className="gifting-form"
            onSubmit={submitHandler}
            autoComplete="off"
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="First name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Message*"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
            {formSubmitted && (
              <span className="success-message">
                <h3>Success</h3>
                <p>Thank You. The form has been submitted.</p>
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
}
