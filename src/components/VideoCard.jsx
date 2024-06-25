/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { closedSidebar } from "../utils/navbarSlice";

const VideoCard = ({video}) => {
    // console.log(video)
    const {snippet,statistics} = video;
    const {title, channelTitle, thumbnails} = snippet;
    const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(closedSidebar())} className="h-80 w-80 rounded-lg cursor-pointer">
        <img className="h-52 rounded-xl mb-2" src={thumbnails.medium.url} />
        <div className="flex gap-2">
          <img className="w-10 h-10 rounded-full border" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" />
          <div>
            <p className="font-bold mb-2 text-gray-600">{title.slice(0, 40)}</p>
            <p className="text-sm text-gray-500">{channelTitle}</p>       
            <p className="text-sm text-gray-500">{(statistics.viewCount >= 1000000)?((statistics.viewCount/1000000).toFixed(1)+"M views"):((statistics.viewCount/1000).toFixed(0))+"K views"} </p>
          </div>         
        </div>     
    </div>
  )
}

export default VideoCard;