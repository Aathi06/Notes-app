import { useEffect } from "react";
import NoteCard from "../components/NoteCard"
import { useNotesContext } from "../context/NoteContext"

export default function NoteList(){

    const {notes}=useNotesContext();

    
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);

    return (
        <div className="notes-container">
            {
                notes.map((note,i)=>{
                    return(
                        <NoteCard key={i} note={note}/>
                    )
                })
            }
        </div>
    )
}