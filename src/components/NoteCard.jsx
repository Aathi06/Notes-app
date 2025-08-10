export default function NoteCard({noteData}){
    return(
        <div className="note-card">
            <h3>{noteData.noteTitle}</h3>
            <p>{noteData.noteContent}</p>
        </div>
    )
}