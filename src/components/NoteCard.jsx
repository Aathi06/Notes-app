export default function NoteCard({note}){
    return(
        <div className="note-card">
            <h2>{note.noteTitle}</h2>
            <hr />
            <p>{note.noteContent}</p>
        </div>
    )
}