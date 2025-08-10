import { useState } from "react";
import NoteCreation from "./NoteCreation";
import NoteList from "./NoteList"

export default function NotePage(){

    const [notes,setNotes]=useState([])
    const [showModal,setModal]=useState(false);
    
    function addNote(newNote){
        setNotes(prev=>{
            return (
                [
                    ...prev,
                    newNote,
                ]
            )
        })
    }

    return(
        <div>
        <h1>THis is the note section</h1>
        {showModal && <NoteCreation onAddNote={addNote} onClose={()=>setModal(false)}/>}
        <NoteList notes={notes}/>
        <button className="add-note" onClick={()=>setModal(true)}>Add</button>
        </div>
    )

}