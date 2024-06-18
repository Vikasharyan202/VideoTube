import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
    return(
        <div className="flex gap-4 border border-red-400 p-4 mt-20 relative"> 
            <Sidebar />
            <MainContainer />
        </div>
        
    )
}
export default Body;