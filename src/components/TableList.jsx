import React from "react";
import Button from "./Button";
import { useState } from "react";

const TableList = ({ id, taskList, switchList, deleteTask }) => {
  const [selDelete, setSelDelete] = useState([]);
  // const [badDelete, setbadDelete] = useState([]);
  // const [entryDelete, setEntryDelete] = useState([]);

  const entryList = taskList
    .filter((item) => item.type === "entry")
    .map((item) => item._id);
  const badList = taskList
    .filter((item) => item.type === "bad")
    .map((item) => item._id);

  const handleSwitch = (id, type) => {
    switchList(id, type);
  };

  const handleSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      if (value === "all-entryList") {
        setSelDelete(...selDelete, entryList);
        return;
      }
      if (value === "all-badList") {
        setSelDelete(...selDelete, badList);

        return;
      }

      //setSelDelete([...selDelete, value]);
      setSelDelete([...selDelete, value]);
    } else {
      if (value === "all-entryList") {
        setSelDelete(selDelete.filter((item) => !entryList.includes(item)));
        return;
      }
      if (value === "all-badList") {
        setSelDelete(selDelete.filter((item) => !badList.includes(item)));
        return;
      }
      setSelDelete(selDelete.filter((_id) => _id !== value));
    }
  };
  console.log(selDelete);
  //console.log("bad", badDelete);
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
            entryList.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item?._id}
                    checked={selDelete.includes(item?._id)}
                    id="entry"
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
            badList.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item?._id}
                    checked={selDelete.includes(item?._id)}
                    onChange={handleSelect}
                    id="bad"
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
