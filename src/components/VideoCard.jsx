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
            <p className="font-bold mb-2 text-gray-700">{title.slice(0, 40)}</p>
            <p>{channelTitle}</p>       
            <p>{(Math.floor((statistics.viewCount/1000000)*10)/10)} M Views </p>
          </div>         
        </div>     
    </div>
  )
}

export default VideoCard;