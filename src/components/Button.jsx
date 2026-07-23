import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={"btn " + props.clColor}
        onClick={props.handleSwitch ? props.handleSwitch : props.deleteTask}
      >
        {props.label}
      </button>
    </>
  );
};

export default Button;
