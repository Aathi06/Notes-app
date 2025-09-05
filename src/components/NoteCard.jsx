import { Trash,Star } from "lucide-react"
import { deleteById,favById } from "../utils/helper"
import { useNotesContext } from "../context/NoteContext"
import { useNavigate } from "react-router";

export default function NoteCard({note}){
    
    const navigate=useNavigate();
    const {setNotes}=useNotesContext();

    return(
        <div className="note-card" id={note.id} onClick={()=>navigate(`edit-view/${note.id}`)}>
            <h2>{note.noteTitle}</h2>
            <hr />
            <p>{note.noteContent}</p>
            <div className="icon-container">
                <Star size={18} stroke="black" fill={note.isFav? "blue" : "none"} className="fav-icon" onClick={(e)=>{
                    e.stopPropagation();
                    setNotes(favById(note.id,"notes"))
                }}/>
                <Trash size={18} color="blue" className="del-icon" onClick={(e)=>{
                    e.stopPropagation()
                    setNotes(deleteById(note.id,"notes"))
                }}/>
            </div>
        </div>
    )
}