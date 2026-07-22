import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";

const App = () => {
  let hourPerWeek = 24 * 7;
  const [taskList, setTaskList] = useState([]);

  const addTask = (lists) => {
    const task = lists.task;
    const hour = lists.hour;
    const obj = {
      task,
      hour,
      id: idGeneration(),
      type: "entry",
    };
    // this doesn't work because the key hold the object not spread object
    //setTaskList({ ...taskList, obj });
    setTaskList([...taskList, obj]);
    /*OR When you pass a function,
     React guarantees prev is the latest state at the time the update actually runs
    setTaskList((prev) => [...prev, obj]);*/

    // if (getTotalHour() + hour > hourPerWeek) {
    //   alert("Sorry no more hour then 168 per week");
    //   return;
    // }

    //displayList();
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
        <DisplayList taskList={taskList} switchList={switchList}></DisplayList>
      </div>
    </div>
  );
};

export default App;
