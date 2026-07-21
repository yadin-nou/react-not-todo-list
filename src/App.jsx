import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Form />
        <DisplayList></DisplayList>
      </div>
    </div>
  );
}

export default App;
