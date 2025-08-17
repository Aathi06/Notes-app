import { createContext , useContext, useState } from "react";

const NotesContext=createContext();

export function NotesProvider({children}){

    const [notes,setNotes]=useState([]);

    return(
        <NotesContext.Provider value={{notes,setNotes}}>
            {children}
        </NotesContext.Provider>
    )

}

export function useNotesContext(){
    return useContext(NotesContext);
}