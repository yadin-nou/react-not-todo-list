import React from "react";

const Message = ({ id, text }) => {
  return (
    <div className="alert alert-success">
      {text}
      <span id={id} className="text-primary">
        0
      </span>
      &nbsp;hr
    </div>
  );
};

export default Message;
