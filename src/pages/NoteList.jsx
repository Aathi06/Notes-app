import { useEffect } from "react";
import NoteCard from "../components/NoteCard"
import { useNotesContext } from "../context/NoteContext"

export default function NoteList(){

    const {notes}=useNotesContext();

    
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);

    const sortedNotes=[...notes].sort((a,b)=>{
        if(a.isFav === b.isFav) return 0

        return a.isFav ? -1 : 1
    })

    return (
        <div className="notes-container">
            {
                sortedNotes.map((note)=>{
                    return(
                        <NoteCard key={note.id} note={note}/>
                    )
                })
            }
        </div>
    )
}