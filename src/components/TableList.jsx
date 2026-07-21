import React from "react";

const TableList = ({ id }) => {
  return (
    <>
      <table className="table table-striped table-hover border">
        <tbody id={id}></tbody>
      </table>
    </>
  );
};

export default TableList;
