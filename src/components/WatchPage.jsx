import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closedSidebar } from "../utils/navbarSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOBY_ID_API } from "../utils/constants";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

import { like, dislike, share, download, downarrow, thanks, cut, bell } from "../images/symbol";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    dispatch(closedSidebar());
  }, [dispatch]);

  useEffect(() => {
    const videoId = searchParams.get("v");
    if (videoId) {
      getVideoById(videoId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (video && video.snippet) {
      getChannelData(video.snippet.channelId);
    }
  }, [video]);
  
  const getVideoById =  async (videoId) => {
    const data = await fetch(YOUTUBE_VIDEOBY_ID_API +videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  }

  const getChannelData = async (channelId) => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId);
    const json = await data.json();
    setChannelData(json.items[0]);
  }
 
  if(!video) return;
  if(!channelData) return;

  return (
    <div className="w-full h-full">
      <iframe className="w-9/12 rounded-lg" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <h3 className="my-2 w-9/12 h-8 text-xl font-bold flex items-center">{video?.snippet?.title}</h3>
      <div className="w-9/12 flex justify-around items-center">
        <div className="w-4/12 flex gap-3 items-center">
          <img className="w-10 h-10 border rounded-full" alt="logo" src={channelData?.snippet?.thumbnails?.medium?.url} />
          <button className="flex flex-col"><span className="font-bold">{channelData?.snippet?.title}</span><span className="text-xs">{channelData?.statistics?.subscriberCount >= 1000000 ?((channelData?.statistics?.subscriberCount/1000000)+"M") :((channelData?.statistics?.subscriberCount/1000)+"k")} subscribers</span>
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
      <div className="mt-4">
        <CommentsContainer videoId={searchParams.get("v")}/>
      </div>
    </div>
  )
}

export default WatchPage;