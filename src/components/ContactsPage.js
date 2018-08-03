import React from "react";
import { connect } from "react-redux";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import SectionAbout from "./SectionAbout";
import MessageModal from "./MessageModal";
import Footer from "./Footer";
import { setModalState } from "../actions/modalState";

const ContactPage = props => (
  <div>
    <section className="large-hero">
      <div className="large-hero__content">
        <header className="page-header large-hero__header-wrapper">
          <Logo />
          <button className="button large-hero__button">Log In Now</button>
        </header>
        <div className="section">
          <div className="large-hero__text-box">
            <h1 className="heading-large">Home of Dentistry</h1>
            <p className="large-hero__text">
              Denteez was created by dentists for dentistry in order to make the
              life of everyone involved in dentistry easier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-form">
      <div className="section">
        <ContactForm />
      </div>
    </section>
    <SectionAbout />

    <Footer
      className="footer--bordered"
      classNameWrapper="section footer__flex-wrapper"
    >
      <a href="#" className="footer__link">
        Support
      </a>
      <a href="#" className="footer__link">
        Privacy Policy
      </a>
      <a href="#" className="footer__link">
        Terms of use
      </a>
    </Footer>

    <MessageModal
      modalIsOpen={props.modalState.isOpen}
      handleCloseModal={() => {
        props.dispatch(setModalState({ isOpen: false }));
      }}
      title={props.modalState.title}
      message={props.modalState.message}
    />
  </div>
);

const mapStateToProps = ({ modalState }) => ({
  modalState
});

export default connect(mapStateToProps)(ContactPage);
