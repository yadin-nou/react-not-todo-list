import React from "react";
import Button from "./Button";

const TableList = ({ id, taskList, switchList, deleteTask }) => {
  const handleSwitch = (id, type) => {
    switchList(id, type);
  };
  return (
    <>
      <table className="table table-striped table-hover border">
        <tbody id={id}>
          {id === "entryList" &&
            taskList
              .filter((item) => item.type === "entry")
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hour} hr</td>
                  <td className="text-end">
                    <Button
                      clColor="btn-danger"
                      label={<i className="fa-solid fa-trash"></i>}
                      deleteTask={() => deleteTask(item.id)}
                    />
                    <Button
                      clColor="btn-success"
                      label={<i className="fa-solid fa-arrow-right"></i>}
                      handleSwitch={() => handleSwitch(item.id, "entry")}
                    />
                  </td>
                </tr>
              ))}
          {id === "badList" &&
            taskList
              .filter((item) => item.type === "bad")
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hour} hr</td>
                  <td className="text-end">
                    <Button
                      clColor="btn-warning"
                      label={<i className="fa-solid fa-arrow-left"></i>}
                      handleSwitch={() => handleSwitch(item.id, "bad")}
                    />
                    <Button
                      clColor="btn-danger"
                      label={<i className="fa-solid fa-trash"></i>}
                      deleteTask={() => deleteTask(item.id)}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
