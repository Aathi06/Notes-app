import { createContext , useContext, useState } from "react";

const NotesContext=createContext();

export function NotesProvider({children}){

    const [notes,setNotes]=useState(()=>{
        const notes=localStorage.getItem("notes");
        return notes? JSON.parse(notes) :[];
    });

    return(
        <NotesContext.Provider value={{notes,setNotes}}>
            {children}
        </NotesContext.Provider>
    )

}

export function useNotesContext(){
    return useContext(NotesContext);
}