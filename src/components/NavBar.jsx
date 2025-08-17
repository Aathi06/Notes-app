import { Link } from "react-router"
import "./comps.css"

export default function NavBar(){
    return(
        <nav className="nav-bar">
          <ul>
            <li><Link to={"/notes"}>Notes</Link></li>
            <li><Link to={"/todo"}>To-Do</Link></li>
            <li><Link to={"/fav"}>Favourite</Link></li>
          </ul>
        </nav>
    )
}