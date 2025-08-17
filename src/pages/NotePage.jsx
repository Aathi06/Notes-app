import { useDebugValue, useState } from "react";
import NoteList from "./NoteList";
import { useNavigate, useOutlet } from "react-router";

export default function NotePage(){

    const outlet=useOutlet();

    const [notes,setNotes]=useState([])
    const navigate=useNavigate();
    
    function toNoteCreation(){
        navigate("create")
    }

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
        <div className="note-page flex-col mx-1 ">
        <button className="add-note hover:bg-blue-200 bg-blue-300 font-bold  rounded-lg w-16 h-8 w-[100%]" onClick={toNoteCreation}>+</button>
        <NoteList/>
        {
            outlet && (
                <div className="note-create-wrapper">
                        {outlet}
                </div>
            )
        }
        </div>
    )

}