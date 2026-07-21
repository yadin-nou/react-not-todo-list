import React from "react";
import TableList from "./TableList";

const DisplayList = () => {
  return (
    <>
      <div className="row mt-5">
        {/* <!-- md make it responsive --> */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          <TableList id="entryList" />
          <div className="alert alert-success">
            The total hours allocated =
            <span id="entryHour" className="text-primary">
              {" "}
              0{" "}
            </span>{" "}
            hr
          </div>
        </div>

        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />
          <TableList id="badList" />
          <div className="alert alert-success">
            You could have saved =
            <span id="badHour" className="text-primary">
              0
            </span>{" "}
            hr
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayList;
