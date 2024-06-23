import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/navbarSlice";
import { AUTO_COMPLETE_YOUTUBE_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { addSearchSuggestion } from "../utils/searchSuggestionSlice";

const Header = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [querySuggestion, setQuerySuggestion] = useState([]);
   const [showSuggestion, setShowSuggestion] = useState(false);
   console.log(searchQuery);
   const dispatch = useDispatch();
   const searchCache = useSelector(store => store.search);

   useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setShowSuggestion(searchCache[searchQuery]);
        } else {
            autoSuggestionApiCall()
        }
    } , 200);

    return () => {
        clearTimeout(timer);
    }
   }, [searchQuery]);

   const autoSuggestionApiCall = async () => {
    const data = await fetch(AUTO_COMPLETE_YOUTUBE_API+searchQuery);
    const json = await data.json();
    setQuerySuggestion(json[1]);
    console.log(json[1]);
    // update cache
    dispatch(addSearchSuggestion(
        {[searchQuery]: json[1]}
    ))
   }

    function navbarHandler() {
        dispatch(toggleSidebar());
    }
    return(
            <div className="bg-slate-100 flex justify-between items-center border border-green-300 px-4 w-full fixed top-0 left-0 z-50">
                <div className="w-40 h-12 flex justify-between items-center ">
                    <img onClick={navbarHandler} className="w-10 h-10 cursor-pointer hover:bg-gray-200 rounded-full" alt="hamburger" src="../src/images/hamburger.webp" />
                    <img className="w-28 h-20 cursor-pointer" alt="logo" src="../src/images/YouTube-Logo.png" />
                </div>
                <div className="w-9/12 flex flex-col justify-center items-center">
                    <div className="w-full h-12 flex justify-center items-center">
                        <input className="w-6/12 h-full border rounded-l-3xl outline-none p-3" type="text" placeholder="Search videos"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                        />
                        <button className="w-16 h-full border rounded-r-3xl bg-slate-100">🔍 </button>
                    </div>  
                    {showSuggestion && (<div className="fixed top-14 border bg-white w-4/12 -ml-28 rounded-xl">
                        <ul className="">
                            {querySuggestion.map((query, index) => <li key={index} className="p-2 mb-2 h-1006 bg-white flex items-center gap-3 hover:bg-gray-100 cursor-default"><span>🔎</span>{query}</li>)}
                        </ul>
                    </div>)  }          
                </div>
                <div className="w-1/12 right flex justify-center items-center">
                    <img className="w-16 border rounded-full cursor-pointer" alt="user" src="../src/images/user-icon.png" />
                </div>
            </div>
    )
}

export default Header;