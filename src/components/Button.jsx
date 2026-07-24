import React from "react";

const Button = ({ clColor, label, fn }) => {
  console.log(fn);
  return (
    <>
      <button
        className={"btn " + clColor}
        // props.handleSwitch ? props.handleSwitch : props.deleteTask
        onClick={fn}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
