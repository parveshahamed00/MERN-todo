import React from "react";
import {BsXCircle } from "react-icons/bs";

function Tasks(props) {
  let tasks = props.tasks.map((task, index) => {
    let task_list = task.task.map((e,key) => {
      return (
        <div key={key} className="todo">
          
          <p>{e}</p>
          <BsXCircle></BsXCircle>
        </div>
      );
    });
    return (
      <div className="tasks" key={index}>
        <h3 className="task-title">{task.title}</h3>
        <div className="task-list">{task_list}</div>
      </div>
    );
  });

  return <div>{tasks}</div>;
}

export default Tasks;
