import React from "react";
import Button from "./Button";

const TableList = ({ id, taskList }) => {
  console.log("table", taskList);
  return (
    <>
      <table className="table table-striped table-hover border">
        <tbody id={id}>
          {id === "entryList" &&
            taskList.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.task}</td>
                <td>{item.hour} hr</td>
                <td class="text-end">
                  <Button
                    clColor="btn-danger"
                    label={<i className="fa-solid fa-trash"></i>}
                  />
                  <Button
                    clColor="btn-success"
                    label={<i className="fa-solid fa-arrow-right"></i>}
                  />
                  {/* <button
                    class="btn btn-success"
                    onclick="switchList('${item.id}','bad')"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button> */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
