import NoteList from "./NoteList";
import { useNavigate, useOutlet } from "react-router";
import { CirclePlus } from "lucide-react";

export default function NotePage(){

    const outlet=useOutlet();

    const navigate=useNavigate();
    
    function toNoteCreation(){
        navigate("create")
    }

    return(
        <div className="note-page mx-1 ">
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