import React from "react";

const ServicesListItem = props => (
  <li className="services__item">
    <a href="#" className="services__link">
      <div className="services__icon-wrapper">
        <img className="services__icon" src={props.icon} alt="" />
      </div>
      <div className="services__title">{props.title}</div>
    </a>
  </li>
);

export default ServicesListItem;
