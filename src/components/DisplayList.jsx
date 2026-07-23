import React from "react";
import TableList from "./TableList";
import Message from "./Message";

const DisplayList = ({ taskList, switchList, deleteTask }) => {
  // console.log("display", taskList);
  //const [totalHour, setTotalHour] = useState(0);

  //const getTotalHour = () => {
  // const totalHr = taskList.reduce((acc, item) => {
  //   return acc + item.hour;
  // }, 0);
  // setTotalHour(totalHr);

  //};

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
            deleteTask={deleteTask}
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
            deleteTask={deleteTask}
          />
          <Message id="badHour" text="You could have saved = " />
        </div>
      </div>
    </>
  );
};

export default DisplayList;
