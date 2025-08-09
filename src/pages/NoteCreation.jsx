import { useNavigate } from "react-router"
export default function NoteCreation(){

    const navigate=useNavigate();
    function handleClick(){navigate("/")}
    return(
        <div className="noteAdd-wrapper">
        <input type="text" className="note-add" placeholder="Note Here..." />
        <button className="add-btn" onClick={handleClick}>Create Note</button>
        <button className="cancel-add" onClick={handleClick}>X</button>
        </div>
    )
}