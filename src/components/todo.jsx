import {X} from "lucide-react"
import { deleteById } from "../utils/helper"

export default function TodoCard({tasks,toggle,setTodos}){

    function handleDelete(id){
        const todos=deleteById(id,"todos"); 
        setTodos(todos)
    }

    return(
        <div className="todo-card">
        <input type="checkbox" id={tasks.id} checked={tasks.completed} onChange={()=>toggle(tasks.id)}  />
        <label htmlFor={tasks.id}
            style={{textDecoration: tasks.completed? "line-through": "" }}>
            {tasks.taskText}
        </label>
        <X size={15} stroke="black" className="del-icon" onClick={()=>handleDelete(tasks.id)}/>
        </div>
    )
}