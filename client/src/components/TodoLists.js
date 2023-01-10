import React, { useState } from "react";
import "./TodoLists.css";
import { BsCheck2Square, BsTrash } from "react-icons/bs";
import axios from "axios";

function TodoLists(props) {
  function removeTodo(e) {
    console.log(e._id);
    axios
      .delete(`http://localhost:4000/home/${e._id}`)
      .then((x) => {
        // console.log(x.data);
        props.removeTodo(e.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const list = props.list.map((e, index) => {
    const tasklist = e.tasks.map((ee, index) => {
      function isTaskcompleted() {
        // console.log("clicked");
        axios.put(`http://localhost:4000/home/${e._id}/${ee._id}`, {
          status: !ee.iscomplete,
        })
      }
      return (
        <p key={index} className="task">
          <BsCheck2Square
            onClick={isTaskcompleted}
            className={ee.iscomplete ? "iscomplete" : "notcomplete"}
          ></BsCheck2Square>{" "}
          {ee.task}
        </p>
      );
    });
    return (
      <div key={index} className="todoLists">
        <p className="generated-date">{e.date}</p>
        <h2 className="title">
          {e.title}
          <span className="dustbin">
            <BsTrash
              onClick={() => {
                removeTodo(e);
              }}
            ></BsTrash>
          </span>
        </h2>
        <div>{tasklist}</div>
      </div>
    );
  });
  return <div>{list}</div>;
}

export default TodoLists;
