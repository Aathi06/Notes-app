

export default function TodoCard({tasks,toggle}){
    return(
        <div className="todo-card">
        <input type="checkbox" id={tasks.id} checked={tasks.completed} onChange={()=>toggle(tasks.id)}  />
        <label htmlFor={tasks.id}
            style={{textDecoration: tasks.completed? "line-through": "" }}>
            {tasks.taskText}
        </label>
        </div>
    )
}