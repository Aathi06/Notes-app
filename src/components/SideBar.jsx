import { Link } from "react-router";


export default function Sidebar(){
    return(
        <nav>
            <ul>
                <li><Link to={"/createnote"}>Home</Link></li>
                <li><Link to={"/todo"}></Link>ToDo</li>
            </ul>
        </nav>
    )
}