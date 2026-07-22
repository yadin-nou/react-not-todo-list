import Button from "./Button";
import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    //get name and its value from text box
    const { name, value } = e.target;
    //[name] because we want value of name is task or hour, not name itselt.
    //value is still value not change
    setTask({ ...task, [name]: value });
  };

  const handleAddList = (e) => {
    e.preventDefault();
    addTask(task);
    // console.log(task);
  };
  return (
    <>
      <h1 className="text-center">Not To Do List</h1>
      {/* <!-- Form -->
        <!-- class p-5 is for padding all follow up breakpoint -->
        <!-- class rounded sharp the cornor of border -->
        <!-- shadow is for making shadow --> */}
      <form
        action=""
        className="border p-5 rounded shadow mt-5"
        onSubmit={handleAddList}
      >
        {/* <!-- g-2 is a gab bewteen column when this become responsive --> */}
        <div className="row g-2">
          {/* <!-- add md between col and 7 is to make it repsonesive to the breakpoint in the list --> */}
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="task"
              aria-label="task"
              name="task"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="40"
              aria-label="hour"
              name="hour"
              min="1"
              required
              onChange={handleChange}
            />
          </div>
          {/* <!-- d-grid mean: to tell the parent that is will expand to fill the rest blank space --> */}
          <div className="col-md-3 d-grid">
            {/* <!-- //use type='button' make the form not refresh --> */}
            <Button clColor="btn-primary" label="Add New Task" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
