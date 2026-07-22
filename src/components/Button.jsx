import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={"btn " + props.clColor} onClick={props.handleSwitch}>
        {props.label}
      </button>
    </>
  );
};

export default Button;
