import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Editorial Header */}
        <div className="editorial-header animate-on-scroll" data-animation="animate-up">
          <span className="chapter-number">04 //</span>
          <h2 className="chapter-title">Get In Touch</h2>
        </div>

        <div className="editorial-contact-grid">

          {/* Left Side: Information */}
          <div className="contact-left animate-on-scroll" data-animation="animate-left" data-delay="0.1">
            <h3 className="contact-headline">Let's talk about everything!</h3>
            <p className="contact-subhead">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="contact-info-list">
              <div className="info-row">
                <FiMail className="info-icon" />
                <div className="info-details">
                  <span className="info-label">Email</span>
                  <a href="mailto:anujchand608@gmail.com" className="info-value">anujchand608@gmail.com</a>
                </div>
              </div>

              <div className="info-row">
                <FiMapPin className="info-icon" />
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">Remote / Anywhere</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Elegant Floating-Line Form */}
          <div className="contact-right animate-on-scroll" data-animation="animate-right" data-delay="0.2">
            <form className="editorial-form" action="https://formspree.io/f/mgordgdq" method="POST">

              <div className="form-row-split">
                <div className="editorial-input-group">
                  <input type="text" id="name" name="name" required placeholder=" " />
                  <label htmlFor="name">Your Name</label>
                  <span className="focus-border"></span>
                </div>

                <div className="editorial-input-group">
                  <input type="email" id="email" name="email" required placeholder=" " />
                  <label htmlFor="email">Your Email</label>
                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="editorial-input-group">
                <input type="text" id="subject" name="subject" required placeholder=" " />
                <label htmlFor="subject">Subject</label>
                <span className="focus-border"></span>
              </div>

              <div className="editorial-input-group">
                <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
                <label htmlFor="message">Your Message</label>
                <span className="focus-border"></span>
              </div>

              <button type="submit" className="btn-editorial-submit">
                Send Message <span className="arrow">→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
