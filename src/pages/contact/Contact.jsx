import React, { useState } from "react";
import {
  RiBook2Line,
  RiMap2Line,
  RiSendPlaneLine,
  RiUser3Line,
  RiMailLine,
} from "react-icons/ri";
import emailjs from "@emailjs/browser";
import "../../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");

  const serviceID = "service_6o28bhs";
  const templateID = "template_e505hpk";
  const publicKey = "T7n9wVgGKYZjAWg3D";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackMessage("");
    setFeedbackColor("");

    if (!validate()) {
      setFeedbackMessage("Please fill in all required fields correctly.");
      setFeedbackColor("red");
      return;
    }

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setFeedbackMessage("Message sent successfully!");
          setFeedbackColor("green");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setFeedbackMessage("Failed to send message. Please try again.");
          setFeedbackColor("red");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section-title mt-5">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        {/* Left contact info */}
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Address</h3>
              <div className="contact-data">New Lalazar,Rawalpindi,Pakistan</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <div className="contact-data">Available Right Now</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <div className="contact-data">abdulmoaeda@gmail.com</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+92 313-2630893 </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="contact-form grid" noValidate>
          <div className="contact-form grid">
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-label">
                Your Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`contact-form-input ${
                  errors.name ? "input-error" : ""
                }`}
              />
              {errors.name && (
                <small style={{ color: "red" }}>{errors.name}</small>
              )}
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`contact-form-input ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <small style={{ color: "red" }}>{errors.email}</small>
              )}
            </div>

            <div className="contact-form-div">
              <label htmlFor="subject" className="contact-form-label">
                Your Subject <b>*</b>
              </label>
              <input
                type="text"
                name="subject"
                id="subject" placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`contact-form-input ${
                  errors.subject ? "input-error" : ""
                }`}
              />
              {errors.subject && (
                <small style={{ color: "red" }}>{errors.subject}</small>
              )}
            </div>

            <div className="contact-form-div">
              <label htmlFor="message" className="contact-form-label">
                Your Message <b>*</b>
              </label>
              <textarea
                name="message"
                id="message" placeholder="Enter Your Feedback here"
                value={formData.message}
                onChange={handleChange}
                className={`contact-form-input contact-form-area ${
                  errors.message ? "input-error" : ""
                }`}
              />
              {errors.message && (
                <small style={{ color: "red" }}>{errors.message}</small>
              )}
            </div>

            <div className="contact-contact">
              <button type="submit" className="button">
                Send Message
                <span className="button-icon">
                  <RiSendPlaneLine />
                </span>
              </button>
            </div>

            {feedbackMessage && (
              <p style={{ color: feedbackColor, marginTop: "1rem" }}>
                {feedbackMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
