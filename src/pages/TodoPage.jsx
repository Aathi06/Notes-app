import { useEffect, useState } from "react"
import TodoCard from "../components/todo";
import { nanoid } from "nanoid";

export default function TodoPage(){

    const [todos,setTodos]=useState(()=>{
        const todo=localStorage.getItem("todos");
        return todo? JSON.parse(todo) :[];
    });
    const [task,setTask]=useState("");
    
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    function addTask(e){
        e.preventDefault();

        if(!task.trim()) return

        const newTask={
            id:nanoid(),
            taskText:task,
            completed:false,
        }
        setTask("")
        setTodos(prev=>{
            return (
                [
                    ...prev,
                    newTask
                ]
            )
        })
    }

    function toggleTask(id){

        setTodos(prev=>{
            return(
                prev.map(e=> e.id===id? {...e,completed:!e.completed} : e)
            )
        })

    }

    return(
        <div className="todo-container">
            <form onSubmit={addTask}>
                <input placeholder="Add Task" type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />
                <button>+</button>
            </form>
            {
                todos.map((e)=><TodoCard key={e.id} tasks={e} setTodos={setTodos} toggle={toggleTask}/>)
            }
        </div>
    )
}