import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSign, inverted, ...props }) => (
  <button
    className={`${
      inverted ? "inverted" : isGoogleSign ? "google-sign-in" : ""
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
