import { NavLink } from "react-router"
import "./comps.css"

export default function NavBar(){
    return(
        <nav className="nav-bar">
          <ul>
            <li><NavLink to={"/notes"} className={({isActive})=> isActive? "active-link" : ""}>
            Notes</NavLink></li>
            <li><NavLink to={"/todo"} className={({isActive})=> isActive? "active-link" : ""}>
            To-Do</NavLink></li>
            <li><NavLink to={"/fav"} className={({isActive})=> isActive? "active-link" : ""}>
            Favourite</NavLink></li>
          </ul>
        </nav>
    )
}