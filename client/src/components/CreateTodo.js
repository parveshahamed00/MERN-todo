import React,{useState} from 'react'
import "./CreateTodo.css"
function CreateTodo() {
    const [title,setTitle]=useState("")
    const [task, setTask] = useState("");
    const [taskList,setTaskList]=useState([])
    function tileInput(e){
setTitle(e.target.value)
    }
    function taskInput(e) {
setTask(e.target.value);
    }
    function addTask(){
        const taskObj={
            task:task,
            iscomplete:false
        }
        setTaskList([...taskList, taskObj]);
        setTask("")  
        console.log(taskList);
    }
    const tasklists=taskList.map((e,index)=>{
        return(
            <div key={index}>
                <h1 className={e.iscomplete?"complete":"notComplete"}>{e.task}</h1>
            </div>
        )
    })
  return (
    <div>
      <input type="text" placeholder="Title" onChange={tileInput}></input>
      <div className='addedtasks'>
{tasklists}
      </div>
      <div><input type="text" placeholder='task' onChange={taskInput} value={task}></input>
      <button onClick={addTask}>Add</button>
      </div>
      <div>
        <button>Add-Todo</button>
      </div>
    </div>
  );
}

export default CreateTodo