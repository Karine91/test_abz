import React from "react";

const Advertisement = props => (
  <div className="advertisement">
    <h2 className="block-title">Advertisement</h2>
    <img className="advertisement__image" src={props.image} alt="" />
    <div className="advertisement__sign">Ads By Denteez.com</div>
  </div>
);

export default Advertisement;
