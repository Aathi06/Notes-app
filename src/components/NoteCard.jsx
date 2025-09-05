import { Trash,Star } from "lucide-react"
import { deleteById,favById } from "../utils/helper"
import { useNotesContext } from "../context/NoteContext"
import { useNavigate } from "react-router";

export default function NoteCard({note}){
    
    const navigate=useNavigate();
    const {setNotes}=useNotesContext();

    return(
        <div className="note-card bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition p-2" id={note.id} onClick={()=>navigate(`edit-view/${note.id}`)}>
            <h2 className="text-lg font-semibold mb-2">{note.noteTitle}</h2>
            <p className="text-gray-700 text-sm mb-3 ">{note.noteContent}</p>
            <div className="icon-container flex justify-end gap-3">
                <Star size={18} stroke="black" fill={note.isFav? "blue" : "none"} className="fav-icon cursor-pointer" onClick={(e)=>{
                    e.stopPropagation();
                    setNotes(favById(note.id,"notes"))
                }}/>
                <Trash size={18} color="blue" className="del-icon cursor-pointer" onClick={(e)=>{
                    e.stopPropagation()
                    setNotes(deleteById(note.id,"notes"))
                }}/>
            </div>
        </div>
    )
}