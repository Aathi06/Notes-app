import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import NoteCreation from "../pages/NoteCreation"

const routes=createBrowserRouter([
    {path:"/",element: <MainLayout/>},
    {path:"/createnote",element:<NoteCreation/>}
])
export default routes;