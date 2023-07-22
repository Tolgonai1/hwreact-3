import './App.css';
import {useState} from "react";

function App() {
    const [input,setInput] = useState("")
    const [tasks,setTask] = useState([])
    const addTodo= (todo) =>{
        const newTodo = {
            todo: todo
        };
        setTask([...tasks,newTodo]);
        setInput("")
    }
  return (
    <div className="App">
        <h1>Todo List</h1>
        <input className='todo-input' type="text" placeholder='Enter your task' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='todo-btn' onClick={()=>addTodo(input)}>Add task</button>
        <ol>
            {tasks.map((task,idx)=>(
                <li key={idx}>
                    {task.todo}
                </li>
            ))}
        </ol>
    </div>
  );
}

export default App;
