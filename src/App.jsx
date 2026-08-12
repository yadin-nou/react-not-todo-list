import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import {
  addTasks,
  deleteTaskAPI,
  getTaskLists,
  switchTask,
} from "./helpers/axiosHelper";
import { useEffect } from "react";
import { useRef } from "react";

const App = () => {
  const hourPerWeek = 24 * 7;
  const [taskList, setTaskList] = useState([]);
  const [res, setRes] = useState({});
  const addTask = async (lists) => {
    const task = lists.task;
    // +lists.hour convert hour to number the same as Number(lists.hour);
    const hour = +lists.hour;
    const obj = {
      task,
      hour,
    };
    // this doesn't work because the key hold the object not spread object
    const tHr = taskList.reduce((acc, item) => acc + Number(item.hour), 0);

    if (tHr + hour > hourPerWeek) {
      alert("Sorry no hour more then 168 per week");
      return;
    }
    /*When you pass a function,
     React guarantees prev is the latest state at the time the update actually runs
    setTaskList((prev) => [...prev, obj]);*/

    //add to Database
    const respons = await addTasks(obj);
    respons?.status && setRes(respons);
    //if (respons.status === "sucess") fetchData();
    respons?.status && fetchData();
  };

  const deleteTask = async (data) => {
    // if (data.length > 0) {
    //   const result = confirm("Are you sure you want to delete this task?");
    //   if (result) {
    // setTaskList(taskList.filter((item) => item.id !== id));
    const del = await deleteTaskAPI(data);
    del?.status && fetchData();
    //console.log(del);
    //  }
    // }
  };
  const switchList = async (id, type) => {
    const swTask = await switchTask(id, type);
    setRes(swTask);
    // console.log(swTask, "switch");
    swTask?.status === "sucess" && fetchData();
  };
  // console.log(taskList);
  // const idGeneration = (length = 6) => {
  //   const str =
  //     "pxzksjkjfoiajhklajoinakljhhanskjeiABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  //   let id = "";
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * str.length);
  //     id += str[randomIndex];
  //   }
  //   return id;
  // };
  const fetchData = async () => {
    const getTaskList = await getTaskLists();
    getTaskList?.status === "sucess" && setTaskList(getTaskList.task);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <Form addTask={addTask} res={res} />
        <DisplayList
          taskList={taskList}
          switchList={switchList}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
