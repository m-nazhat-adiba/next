import React from "react";

const label = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default label;
