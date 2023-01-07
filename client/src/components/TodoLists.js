import React,{useState} from "react";
import "./TodoLists.css";
import { BsCheck2Square, BsTrash } from "react-icons/bs";
import axios from "axios";


function TodoLists(props) {
  const[isTaskCompleted,setisTaskCompleted]=useState(true)
  function removeTodo(e){
    console.log(e._id);
    axios.delete(`http://localhost:4000/home/${e._id}`).then((x)=>{
      // console.log(x.data);
      props.removeTodo(e.title)
    }).catch((err)=>{
      console.log(err);
    })
  }
  function isTaskcompleted(){
    console.log("clicked");
  }
  const list = props.list.map((e, index) => {
    const tasklist = e.tasks.map((e, index) => {
      return (
        <p key={index} className="task">
          <BsCheck2Square
            onClick={isTaskCompleted}
            className={isTaskCompleted ? "iscomplete" : "notcomplete"}
          ></BsCheck2Square>{" "}
          {e.task}
        </p>
      );
    });
    return (
      <div key={index} className="todoLists">
        <p className="generated-date">{e.date}</p>
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
