import React from "react";

const Message = ({ id, text, totalHour }) => {
  console.log(totalHour);
  return (
    <div className="alert alert-success">
      {text}
      <span id={id} className="text-primary">
        {totalHour}
      </span>
      &nbsp;hr
    </div>
  );
};

export default Message;
