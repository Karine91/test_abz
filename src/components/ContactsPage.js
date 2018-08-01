import React from "react";
import Logo from "./Logo";
import ContactForm from "./ContactForm";

const ContactPage = () => (
  <div>
    <div className="large-hero">
      <div className="large-hero__content">
        <header className="section-header large-hero__header-wrapper">
          <Logo />
          <button className="button large-hero__button">Log In Now</button>
        </header>
        <div className="large-hero__text-box">
          <h1 className="large-hero__title">Home of Dentistry</h1>
          <p className="large-hero__text">
            Denteez was created by dentists for dentistry in order to make the
            life of everyone involved in dentistry easier.
          </p>
        </div>
      </div>
    </div>
    <ContactForm />
  </div>
);

export default ContactPage;
