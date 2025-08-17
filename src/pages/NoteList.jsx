import NoteCard from "../components/NoteCard"
import { useNotesContext } from "../context/NoteContext"

export default function NoteList(){

    const {notes}=useNotesContext();

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