import { useNavigate } from "react-router"

export default function MainLayout(){
    const navigate=useNavigate();
    function addNote(){
        navigate("/createnote")
    }

    return(
        <div>
            <h1>This is the Main Layout</h1>
            <button onClick={addNote}>Add Note</button>
        </div>
    )
}