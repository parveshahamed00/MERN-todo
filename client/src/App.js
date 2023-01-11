import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoLists from "./components/TodoLists";
import CreateTodo from "./components/CreateTodo";
import { BsArrowDownUp } from "react-icons/bs";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [popup, setPopup] = useState(false);
  let [toggleTaskcomplete,setToggleTaskcomplete]=useState(0)
  useEffect(() => {
    axios
      .get("http://localhost:4000/home/")
      .then((e) => {
        console.log(e.data);
        setTodoList(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggleTaskcomplete]);
  function toggleTaskComplete(){
setToggleTaskcomplete(toggleTaskcomplete+1);
setTodoList([...todoList])
  }
  function closePopup() {
    setPopup(false);
  }
  function newTodo(newtodo) {
    setTodoList([...todoList, newtodo]);
  }
  function openPopup() {
    setPopup(true);
  }
  function removeTodo(title) {
    let list = todoList.filter((e) => e.title !== title);
    setTodoList(list);
  }
  function sorttodo() {
    setTodoList([...todoList].reverse());
  }
  return (
    <div className="App">
      <Navbar></Navbar>

      {popup ? (
        <div className="pop-up">
          <CreateTodo closePopup={closePopup} newTodo={newTodo}></CreateTodo>
        </div>
      ) : (
        <div className="components">
          <h4 className="greetings">
            Welcome, Parvesh Ahamed<span className="wave">👋</span>
          </h4>
          <div className="todoList">
            <div className="sort-icon">
              <BsArrowDownUp onClick={sorttodo}></BsArrowDownUp>
            </div>
            <div className="lists">
              <TodoLists
                list={todoList}
                removeTodo={removeTodo}
                toggletaskcomplete={toggleTaskComplete}
              ></TodoLists>
            </div>
          </div>
          <div className="open-popup-div">
            <button className="add-todo" onClick={openPopup}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
