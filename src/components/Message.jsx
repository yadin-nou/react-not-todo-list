import React from "react";

const Message = ({ id, text }) => {
  return (
    <div className="alert alert-success">
      The total hours allocated ={text}
      <span id={id} className="text-primary">
        0
      </span>
      hr
    </div>
  );
};

export default Message;
