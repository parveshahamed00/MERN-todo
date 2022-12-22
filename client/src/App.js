import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
function App() {
  const [tasks, setTasks] = useState([]);
  const [number,setNumber]=useState(0)
useEffect(()=>{
axios.get("http://localhost:4000/home/").then((e)=>{
console.log(e.data);
}).catch((e)=>{
  console.log(e);
})
})// without second argument it will execute everytime tht component renders
function click(params) {
  setNumber(number+1);
}
  return (
    <div className="App">
      <div className="components">
        <Navbar></Navbar>
        <InputField></InputField>
      </div>
      <div>
        <h1>{number}</h1>
        <button onClick={click}>click</button>
      </div>
    </div>

  );
}

export default App;
