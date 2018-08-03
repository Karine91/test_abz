import React from "react";

const Footer = props => (
  <footer className={`footer ${props.className}`}>
    <div className={props.classNameWrapper}>
      <div className="footer__copyright">Denteez Copyright 2015</div>
      <div className="footer__nav">{props.children}</div>
    </div>
  </footer>
);

export default Footer;
