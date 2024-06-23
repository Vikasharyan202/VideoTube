
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closedSidebar } from "../utils/navbarSlice";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedSidebar())
  },[])
    return(
        <div className="flex gap-4 border border-red-400 p-4 mt-20 relative"> 
            <Sidebar />
            <Outlet />
        </div>
        
    )
}
export default Body;