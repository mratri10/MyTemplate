import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = (props) => (
  <div
    className={`${props.data.size} menu-item`}
    onClick={() => props.history.push(`./shop/${props.data.id}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.data.imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{props.data.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
