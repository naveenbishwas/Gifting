"use client";
import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    giftsNeeded: "",
    budget: "",
    dateNeeded: "",
    howHeard: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName)
      newErrors.firstName = "Please complete this required field.";
    if (!formData.lastName)
      newErrors.lastName = "Please complete this required field.";
    if (!formData.email)
      newErrors.email = "Please complete this required field.";
    if (!formData.phone)
      newErrors.phone = "Please complete this required field.";
    if (!formData.giftsNeeded)
      newErrors.giftsNeeded = "Please complete this required field.";
    if (!formData.budget)
      newErrors.budget = "Please complete this required field.";
    if (!formData.dateNeeded)
      newErrors.dateNeeded = "Please complete this required field.";
    if (!formData.message)
      newErrors.message = "Please complete this required field.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        giftsNeeded: "",
        budget: "",
        dateNeeded: "",
        howHeard: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h1>Ready to bring your custom gifts to life?</h1>
      <p className="form-header">
        Fill out the form below and we’ll be in touch within 1 business day
        (usually sooner!). Minimum $5,000 gifting budget.
      </p>
      <p className="form-subtext">
        If you just can’t wait, <a href="#">book a call</a> or call us at
        571-490-7071
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error-input" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="input-container">
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error-input" : ""}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number*"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="giftsNeeded"
            placeholder="Number of gifts needed*"
            value={formData.giftsNeeded}
            onChange={handleChange}
            className={errors.giftsNeeded ? "error-input" : ""}
          />
          <input
            type="text"
            name="budget"
            placeholder="Total Gifting Budget*"
            value={formData.budget}
            onChange={handleChange}
            className={errors.budget ? "error-input" : ""}
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            name="dateNeeded"
            placeholder="Gifts needed by date*"
            value={formData.dateNeeded}
            onChange={handleChange}
            className={errors.dateNeeded ? "error-input" : ""}
          />
          <input
            type="text"
            name="howHeard"
            placeholder="How did you hear about us?"
            value={formData.howHeard}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
