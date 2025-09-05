import GreetingBar from "../components/GreetingTab";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function MainLayout(){
    return(
        <div className=" main-layout">
            <GreetingBar/>
            <NavBar/>
            <div className="section-container">
                <Outlet/>
            </div>
        </div>
    )
}