import { useState,useEffect } from "react";
import NoteCard from "../components/NoteCard"
import { useNotesContext } from "../context/NoteContext"

export default function NoteList(){

    const {notes}=useNotesContext();
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);

    const filteredNotes=notes.filter((note)=>{
        return(
            note.noteTitle.toLowerCase().includes(searchQuery.toLowerCase())||
            note.noteContent.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })

    const filteredSortedNotes=[...filteredNotes].sort((a,b)=>{
        if(a.isFav === b.isFav) return 0

        return a.isFav ? -1 : 1
    })

    if(notes.length === 0){
        return <p className="text-gray-500 text-center mt-10">No notes yet. Create one!</p>
    }

    return (
        <div className="notes-container">
            <div className="p-4">
            <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {
                    filteredSortedNotes.map((note)=>{
                        return(
                            <NoteCard key={note.id} note={note}/>
                        )
                    })
                }
            </div>
            {filteredSortedNotes.length === 0 && (
            <p className="text-gray-500 text-center mt-10">No notes found.</p>
            )}
        </div>
    )
}