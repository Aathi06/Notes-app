import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./page.css"
import { useNotesContext } from "../context/NoteContext";

export default function NoteViewAndEdit(){

    const navigate=useNavigate();
    const {id}=useParams();
    
    const {notes}=useNotesContext();
    const [currentNote]=notes.filter((note)=> note.id==id)

    const [note,setNote]=useState(currentNote.noteContent);
    const [title,setTitle]=useState(currentNote.noteTitle);

    const {setNotes}=useNotesContext();
        
    function toNotelist(){

        const updatedNotes=notes.map((e)=>{
            if(e.id == id){
                return (
                    {
                        ...e,
                        noteTitle:title,
                        noteContent:note
                    }
                )
            }
            else return e
        })
        setNotes(updatedNotes)
        navigate("..");
    }

    return(
        <form className="note-form bg-gray-300 h-[100%] rounded-xl shadow-lg">
        <button className="cancel-add" type="button" onClick={toNotelist} >X</button>
        <input type="text" value={title} className="note-title" onChange={(e)=>setTitle(e.target.value)} placeholder="Title..."/>
        <textarea name="note-content" value={note} id="note-content" placeholder="Note...." onChange={(e)=>setNote(e.target.value)} ></textarea>
        </form>
    )
}