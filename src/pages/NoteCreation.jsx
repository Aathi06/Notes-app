import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import "./page.css"
import { useNotesContext } from "../context/NoteContext";

export default function NoteCreation(props){

    const [note,setNote]=useState("");
    const [title,setTitle]=useState("");
    const {setNotes}=useNotesContext();
    const navigate=useNavigate();
        
    function toNotelist(){
        navigate("..");
    }

    function formValidate(e){
        e.preventDefault();

        if(!note.trim() || !title.trim()) return

        const newNote={id:nanoid(),noteContent:note,noteTitle:title,isFav:false}
        setNotes(prev=>{
            return(
                [
                    ...prev,
                    newNote
                ]
            )
        })
        toNotelist();
    }

    return(
        <form onSubmit={formValidate} className="note-form bg-gray-300 h-[100%] rounded-xl shadow-lg">
        <button className="cancel-add" type="button" onClick={toNotelist} >X</button>
        <input type="text" value={title} className="note-title" onChange={(e)=>setTitle(e.target.value)} placeholder="Title..."/>
        <textarea name="note-content" id="note-content" placeholder="Note...." onChange={(e)=>setNote(e.target.value)} ></textarea>
        <button className="add-btn">+</button>
        </form>
    )
}