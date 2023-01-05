import React from "react";
import "./TodoLists.css";
import { BsCheck2Square, BsTrash } from "react-icons/bs";
import axios from "axios";


function TodoLists(props) {
  function removeTodo(e){
    console.log(e._id);
    axios.delete(`http://localhost:4000/home/${e._id}`).then((x)=>{
      // console.log(x.data);
      props.removeTodo(e.title)
    }).catch((err)=>{
      console.log(err);
    })
  }
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
         <span className="dustbin"><BsTrash onClick={()=>{removeTodo(e);}}></BsTrash></span>
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
