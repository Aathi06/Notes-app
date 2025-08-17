import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import NotePage from "../pages/NotePage";
import TodoPage from "../pages/TodoPage";
import NoteCreation from "../pages/NoteCreation";
import { NotesProvider } from "../context/NoteContext";


const routes=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children: [
            {
                path:"notes",
                element:<NotePage/>,
                children:[
                    {
                        path:"create",
                        element:<NoteCreation/>
                    },
                    
                ]
            },
            {
                path:"todo",
                element:<TodoPage/>
            },
            {
                path:"fav",
                element: <h1>Rn nothing</h1>
            }
        ]
    }
   
])
export default routes;