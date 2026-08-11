import React, { useState } from "react";
import TableList from "./TableList";
import Message from "./Message";

const DisplayList = ({ taskList, switchList, deleteTask }) => {
  //pass selDelete and setSelDelete to child components to control checkbox
  // bad list and entry list as one state
  // because selDelete will seperate own state when Tabelist is called
  const [selDelete, setSelDelete] = useState([]);
  // console.log("display", taskList);
  //const [totalHour, setTotalHour] = useState(0);

  //const getTotalHour = () => {
  // const totalHr = taskList.reduce((acc, item) => {
  //   return acc + item.hour;
  // }, 0);
  // setTotalHour(totalHr);

  //};

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(selDelete);
    //console.log(selDelete);
  };
  return (
    <>
      <div className="row mt-5">
        {/* <!-- md make it responsive --> */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          <TableList
            id="entryList"
            taskList={taskList}
            switchList={switchList}
            selDelete={selDelete}
            setSelDelete={setSelDelete}
          />
          <Message
            id="entryHour"
            text="The total hours allocated = "
            totalHour={taskList.reduce(
              (acc, item) => acc + Number(item.hour),
              0,
            )}
          />
        </div>

        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />
          <TableList
            id="badList"
            taskList={taskList}
            switchList={switchList}
            selDelete={selDelete}
            setSelDelete={setSelDelete}
          />
          <Message
            id="badHour"
            text="You could have saved = "
            totalHour={taskList
              .filter((task) => task.type === "bad")
              .reduce((acc, item) => acc + Number(item.hour), 0)}
          />
        </div>
      </div>
      <div className="d-grid col-12 mx-auto">
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          Delete {selDelete.length} task(s)
        </button>
      </div>
    </>
  );
};

export default DisplayList;
