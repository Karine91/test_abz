import React from "react";

const Logo = () => (
  <a className="logo" href="/">
    <img
      className="logo__image"
      sizes="130px"
      srcSet="/images/logo.png 130w, /images/logo-hi-dpi.png 260w"
      alt="Denteez"
    />
  </a>
);

export default Logo;
