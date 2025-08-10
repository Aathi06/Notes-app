
import GreetingBar from "../components/GreetingTab";
import SearchBar from "../components/SearchBar";

import NotePage from "../pages/NotePage";

export default function MainLayout(){
    return(
        <div>
            <GreetingBar/>
            <SearchBar/>
            <h1>This is the Main Layout</h1>
            <NotePage/>
        </div>
    )
}