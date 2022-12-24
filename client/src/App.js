import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([]);
  const [number,setNumber]=useState(0)
useEffect(()=>{
axios.get("http://localhost:4000/home/").then((e)=>{
setTasks(e.data)
console.log(e.data);
}).catch((e)=>{
  console.log(e);
})
},[])
function click(){
  setNumber(number+1)
}
  return (
    <div className="App">
      <div className="components">
        <Navbar></Navbar>
        <InputField></InputField>
        <div className="tasks">
          <Tasks tasks={tasks}></Tasks>
{/* <h1>{number}</h1>
<button onClick={click} >ok</button> */}
        </div>
      </div>
    </div>

  );
}

export default App;
