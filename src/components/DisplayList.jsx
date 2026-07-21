import React from "react";
import TableList from "./TableList";
import Message from "./Message";

const DisplayList = () => {
  return (
    <>
      <div className="row mt-5">
        {/* <!-- md make it responsive --> */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          <TableList id="entryList" />
          <Message id="entryHour" text="The total hours allocated =" />
        </div>

        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />
          <TableList id="badList" />
          <Message id="badHour" text="You could have saved =" />
        </div>
      </div>
    </>
  );
};

export default DisplayList;
