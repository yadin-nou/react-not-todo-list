import React from "react";

const Button = ({ clColor, label }) => {
  return (
    <>
      <button className={"btn " + clColor}>{label}</button>
    </>
  );
};

export default Button;
