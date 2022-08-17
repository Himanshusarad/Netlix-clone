import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
// import Nav from "../Nav";
import { useState } from "react";
import '../Nav.css';
import './Tab.css';
function Tabs() {

    const [tab, setTab] = useState(true);
    // console.log("it works fine");
    const handleSearchClick = () => {
        // console.log("i got clicked");
        return (setTab(!tab));
    }
    // console.log(tab);
    // const {search} = window.location;
    // const query = new URLSearchParams(search).get('se');
    // console.log(query);





    return (
        <div className="tabs_div">
            {/* <input type="text" placeholder="Search.." name="se" className={`nav_search ${!tab && "searchtab_search"}`} onClick={() => handleSearchClick()}></input> */}
            <button className={`search_btn ${!tab && "searchbtn_display"}`} onClick={() => handleSearchClick()}>Search</button>
            {tab ? <Tab1 /> : <Tab2 />}
        </div>
    )
}

export default Tabs;