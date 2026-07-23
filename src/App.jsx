import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";

const App = () => {
  const hourPerWeek = 24 * 7;
  const [taskList, setTaskList] = useState([]);

  const addTask = (lists) => {
    const task = lists.task;
    // +lists.hour convert hour to number the same as Number(lists.hour);
    const hour = +lists.hour;
    const obj = {
      task,
      hour,
      id: idGeneration(),
      type: "entry",
    };
    // this doesn't work because the key hold the object not spread object
    //setTaskList({ ...taskList, obj });
    const tHr = taskList.reduce((acc, item) => acc + Number(item.hour), 0);

    if (tHr + hour > hourPerWeek) {
      console.log(tHr + hour);
      alert("Sorry no hour more then 168 per week");
      return;
    }
    setTaskList([...taskList, obj]);
    /*OR When you pass a function,
     React guarantees prev is the latest state at the time the update actually runs
    setTaskList((prev) => [...prev, obj]);*/
  };
  const deleteTask = (id) => {
    const result = window.confirm("Are you sure you want to delete this task?");
    if (result) {
      setTaskList(taskList.filter((item) => item.id !== id));
    }
    // console.log(id);
  };

  const switchList = (id, type) => {
    if (type === "entry") {
      //   update type in taskList by unqiue id
      setTaskList(
        taskList.map((item) =>
          item.id === id ? { ...item, type: "bad" } : item,
        ),
      );
      // console.log("entry", id, type);
    }
    if (type === "bad") {
      setTaskList(
        taskList.map((item) =>
          item.id === id ? { ...item, type: "entry" } : item,
        ),
      );
      // console.log("bad", id, type);
    }
  };
  // console.log(taskList);
  const idGeneration = (length = 6) => {
    const str =
      "pxzksjkjfoiajhklajoinakljhhanskjeiABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let id = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      id += str[randomIndex];
    }
    return id;
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Form addTask={addTask} />
        <DisplayList
          taskList={taskList}
          switchList={switchList}
          deleteTask={deleteTask}
        ></DisplayList>
      </div>
    </div>
  );
};

export default App;
