import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOLIST_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getYoutubeVideos();
    }, []);

    const  getYoutubeVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOLIST_API);
        const json = await data.json();
        setVideos(json.items)
        console.log(json)
    }
  return (
    <div className="mt-4 flex justify-center flex-wrap gap-6 ">
        {videos.length > 0 && videos.map((video) => <Link to={'/watch?v=' + video.id} key={video.id}><VideoCard video={video}/></Link>)}
    </div>
  )
}

export default VideoContainer;