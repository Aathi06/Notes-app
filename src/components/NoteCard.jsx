import { Trash } from "lucide-react"
import { deleteById } from "../utils/helper"
import { useNotesContext } from "../context/NoteContext"
import { useNavigate } from "react-router";

export default function NoteCard({note}){
    
    const navigate=useNavigate();
    const {setNotes}=useNotesContext();

    function handleClick(e,id){
        
        if(e.target.classList.contains("del-icon")){
            const updatesNotes=deleteById(id,"notes");
            setNotes(updatesNotes);
        }
        else{
            navigate(`edit-view/${id}`)
        }
    }

    return(
        <div className="note-card" id={note.id} onClick={(e)=>handleClick(e,note.id)}>
            <h2>{note.noteTitle}</h2>
            <hr />
            <p>{note.noteContent}</p>
            <div className="icon-container">
                <Trash size={18} color="blue" className="del-icon"/>
            </div>
        </div>
    )
}