import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/navbarSlice";

const Header = () => {

    const dispatch = useDispatch();

    function navbarHandler() {
        dispatch(toggleSidebar())
    }
    return(
        <div className="bg-slate-100 flex justify-between items-center border border-green-300 px-4 h-20 w-full fixed top-0 left-0">
            <div className="w-40 h-12 flex justify-between items-center ">
                <img onClick={navbarHandler} className="w-10 h-10 cursor-pointer hover:bg-gray-200 rounded-full" alt="hamburger" src="../src/images/hamburger.webp" />
                <img className="w-28 h-20 cursor-pointer" alt="logo" src="../src/images/YouTube-Logo.png" />
            </div>
            <div className="w-9/12 h-12 flex justify-center items-center">
                <input className="w-9/12 h-full border rounded-l-3xl outline-none p-3" type="text" placeholder="Search videos"/>
                <button className="w-1/12 h-full border rounded-r-3xl bg-slate-100">🔍 </button>
            </div>
            <div className="w-1/12 right flex justify-center items-center">
                <img className="w-16 border rounded-full cursor-pointer" alt="user" src="../src/images/user-icon.png" />
            </div>
        </div>
    )
}

export default Header;