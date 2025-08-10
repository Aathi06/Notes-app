import { useState } from "react";

export default function NoteCreation(props){

    const [note,setNote]=useState("");
    const [title,setTitle]=useState("");
        
    function formValidate(e){
        e.preventDefault();
        const newNote={noteContent:note,noteTitle:title}
        props.onAddNote(newNote)
        props.onClose()
    }

    return(
        <div className="noteAdd-wrapper">
        <form onSubmit={formValidate}>
        <input type="text" value={title} className="note-title" onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
        <input type="text" value={note} className="note-add" placeholder="Note Here..." onChange={(e)=>setNote(e.target.value)} required/>
        <button className="add-btn">Create Note</button>
        <button className="cancel-add" type="button" >X</button>
        </form>
        <h1>Note:{note}</h1>
        <h1>Title:{title}</h1>
        </div>
    )
}