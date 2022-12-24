import React, { useState } from "react";
import "./TodoLists.css";
import {  BsCheck2Square } from "react-icons/bs";

function TodoLists(props) {
  
  const list = props.list.map((e, index) => {
    const tasklist = e.tasks.map((e, index) => {
      return (
        <p key={index} className="task">
          <BsCheck2Square
            className={e.iscomplete ? "iscomplete" : "notcomplete"}
          ></BsCheck2Square>{" "}
          {e.task}
        </p>
      );
    });
    return (
      <div key={index} className="todoLists">
        <h2 className="title">
          {e.title}
         
        </h2>
        <div >
          {tasklist}
        </div>
      </div>
    );
  });
  return <div>{list}</div>;
}

export default TodoLists;
