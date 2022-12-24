import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateTodo from "./components/CreateTodo";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";
function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/home/")
      .then((e) => {
        // console.log(e.data);
        setTodoList(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <div className="components">
        <Navbar></Navbar>
        <h4 className="greetings">
          Welcome, Mr. Parvesh Ahamed<span className="wave">👋</span>
        </h4>
        <div className="todoList">
          <div className="lists">
            <TodoLists list={todoList}></TodoLists>
          </div>
        </div>
        <div className="addTodoButton">
          <AddTodo></AddTodo>
        </div>
        <div className="todoButton">{/* <CreateTodo></CreateTodo> */}</div>
      </div>
    </div>
  );
}

export default App;
