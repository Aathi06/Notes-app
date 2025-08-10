import NoteCard from "../components/NoteCard"

export default function NoteList({notes}){
    return (
        <div className="notes-container">
            {
                notes.map((note)=>{
                   return <NoteCard noteData={note}/>
                })
            }
        </div>
    )
}