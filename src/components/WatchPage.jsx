import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closedSidebar } from "../utils/navbarSlice";
import { useSearchParams } from "react-router-dom";

import { like, dislike, share, download, downarrow, thanks, cut, bell } from "../images/symbol";

const WatchPage = () => {

  let [searchParams] = useSearchParams();
  console.log()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedSidebar());
  }, [])

  return (
    <div className="w-full h-full">
      <iframe className="w-9/12 rounded-lg" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <h3 className="border w-9/12 h-8 font-bold flex items-center">Heading</h3>
      <div className="border w-9/12 flex justify-around items-center">
        <div className="w-4/12 flex gap-3 items-center">
          <img className="w-8 h-8 rounded-full" alt="logo" src="https://yt3.ggpht.com/H3djB_hVq1Ka1auGf5eCi-wUfwI-kctMW-skVqrXnJwAvqQxI8XSw_ErmyUMNEQmMIxcQgNhNGU=s48-c-k-c0x00ffffff-no-rj" />
          <button className="flex flex-col"><span>vikash aryan</span><span>100k subscribers</span>
          </button>
          <button className="w-auto h-8 p-2 bg-black text-white rounded-3xl flex items-center">Join</button>
          <button className="w-auto h-8 p-3 border rounded-3xl flex items-center" ><img className="w-6" alt="like" src={bell}/>Subscribe<img className="w-6" alt="like" src={downarrow}/></button>
        </div>
        <div className="w-8/12">
          <ul className="flex gap-2 justify-end ">
            <li><button className="w-auto h-8 p-3 border rounded-l-3xl flex items-center"><img className="w-6" alt="like" src={like}/></button></li>
            <li><button className="w-auto h-8 p-3 -ml-2 border rounded-r-3xl flex items-center"><img className="w-6" alt="like" src={dislike}/></button></li>
            <li><button className="w-auto h-8 p-3 border rounded-3xl flex items-center"><img className="w-6" alt="like" src={share}/>Share</button></li>
            <li><button className="w-auto h-8 p-3 border rounded-3xl flex items-center"><img className="w-6" alt="like" src={download}/>Download</button></li>
            <li><button className="w-auto h-8 p-3 border rounded-3xl flex items-center"><img className="w-6" alt="like" src={thanks}/>Thanks</button></li>
            <li><button className="w-auto h-8 p-3 border rounded-3xl flex items-center"><img className="w-6" alt="like" src={cut}/>Clip</button></li>
            <li><button className="w-8 h-8 border rounded-full flex items-center justify-center">...</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WatchPage;