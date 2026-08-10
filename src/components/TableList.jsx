import React from "react";
import Button from "./Button";
import { useState } from "react";

const TableList = ({ id, taskList, switchList, deleteTask }) => {
  const [selDelete, setSelDelete] = useState([]);

  const handleSwitch = (id, type) => {
    switchList(id, type);
  };

  const handleSelect = (e) => {
    const { checked, value } = e.target;
    //console.log(checked, value);
    if (checked) {
      if (value === "all-entryList") {
        //console.log(value, id);
        const allID = taskList
          .filter((item) => item.type === "entry")
          .map((item) => item._id);
        // setSelDelete([...selDelete, ...allID]);
        setSelDelete(allID);
        // console.log(allID, "---");
        return;
      }
      setSelDelete([...selDelete, value]);
    } else {
      if (value === "all-entryList") {
        //console.log(value, id);
        const entryID = taskList
          .filter((item) => item.type === "entry")
          .map((item) => item._id);
        //console.log(entry, " IDentry");
        setSelDelete(selDelete.filter((item) => !entryID.includes(item)));
        return;
      }
      setSelDelete(selDelete.filter((_id) => _id !== value));
    }
  };
  console.log(selDelete);
  return (
    <>
      <input
        className="form-check-input"
        id={"all-" + id}
        type="checkbox"
        value={"all-" + id}
        onChange={handleSelect}
      />{" "}
      <label htmlFor={"all-" + id}>Select All</label>
      <table className="table table-striped table-hover border">
        <tbody id={id}>
          {id === "entryList" &&
            taskList
              .filter((item) => item.type === "entry")
              .map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item?._id}
                      onChange={handleSelect}
                    />{" "}
                    {item.task}
                  </td>
                  <td>{item.hour} hr</td>
                  <td className="text-end">
                    <Button
                      clColor="btn-danger"
                      label={<i className="fa-solid fa-trash"></i>}
                      fn={() => deleteTask(item?._id)}
                    />
                    <Button
                      clColor="btn-success"
                      label={<i className="fa-solid fa-arrow-right"></i>}
                      fn={() => handleSwitch(item?._id, "bad")}
                    />
                  </td>
                </tr>
              ))}
          {id === "badList" &&
            taskList
              .filter((item) => item.type === "bad")
              .map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item?._id}
                      onChange={handleSelect}
                    />{" "}
                    {item.task}
                  </td>
                  <td>{item.hour} hr</td>
                  <td className="text-end">
                    <Button
                      clColor="btn-warning"
                      label={<i className="fa-solid fa-arrow-left"></i>}
                      fn={() => handleSwitch(item._id, "entry")}
                    />
                    <Button
                      clColor="btn-danger"
                      label={<i className="fa-solid fa-trash"></i>}
                      fn={() => deleteTask(item._id)}
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
