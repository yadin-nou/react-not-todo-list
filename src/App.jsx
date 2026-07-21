import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";

const App = () => {
  const addTask = (e) => {
    // Use formData constructure is easy than the other method if you have a large text filed

    const newForm = new FormData(e);
    // use .get method only get data from element name, not ID
    const task = newForm.get("task");
    //this + is covert string from form into number
    const hour = +newForm.get("hour");
    const obj = {
      task,
      hour,
      id: idGeneration(),
      type: "entry",
    };
    console.log(getTotalHour);
    if (getTotalHour() + hour > hourPerWeek) {
      alert("Sorry no more hour then 168 per week");
      return;
    }
    taskList.push(obj);

    //displayList();
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Form />
        <DisplayList></DisplayList>
      </div>
    </div>
  );
};

export default App;
