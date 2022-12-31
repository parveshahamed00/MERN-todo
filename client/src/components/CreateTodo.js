import React, { useState } from "react";
import { BsFillCheckCircleFill, BsXSquare } from "react-icons/bs";
import axios from "axios";

import "./CreateTodo.css";
function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function tileInput(e) {
    setTitle(e.target.value);
  }
  function taskInput(e) {
    setTask(e.target.value);
  }
  function addTask() {
    if(task!==""){
    const taskObj = {
      task: task.trim(),
      iscomplete: false,
    };
    setTaskList([...taskList, taskObj]);
    setTask("");
    console.log(taskList);
    }

  }
  const tasklists = taskList.map((e, index) => {
    return (
      <div key={index}>
        <h1 className="addedtask">
          
          <span>
            <BsFillCheckCircleFill></BsFillCheckCircleFill>
          </span>{" "}
          {e.task}
        </h1>
      </div>
    );
  });
  function addTodo(){
    // console.log("clicked");
    axios.post("http://localhost:4000/home/",{
      title:title,
      tasks:taskList
    }).then((e)=>{
      console.log(e.data);
    }).catch((e)=>{
      console.log(e);
    })
  }
  return (
    <div className="popup">
      <div className="close-icon" onClick={props.closePopup}>
        <BsXSquare></BsXSquare>
      </div>
      <div>
        <input
          type="text"
          placeholder="Title ..."
          onChange={tileInput}
          className="title-input"
        ></input>
        <div className="addedtasks">{tasklists}</div>
        <div className="added-task-section">
          <input
            type="text"
            placeholder="task "
            onChange={taskInput}
            value={task}
            className="task-input"
          ></input>
          <button onClick={addTask} className="add-task-button">
            Add
          </button>
        </div>
        <div>
          <button className="add-todo-btn" onClick={addTodo}>Add-Todo</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
