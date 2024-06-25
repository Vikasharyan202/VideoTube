/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOLIST_API } from "../utils/constants";
import Comment from "./Comment";


const CommentsContainer = ({videoId}) => {

    const [videos, setVideos] = useState([]);
    const [currentVideoId, setCurrentVideoId] = useState("");

    useEffect(() => {
        setCurrentVideoId(videoId);
    }, [])

    useEffect(() => {
        getYoutubeVideos();
    }, []);

    const  getYoutubeVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOLIST_API);
        const json = await data.json();
        setVideos(json.items)
    }

  return (
    <div>
        {videos.length > 0 && <Comment vId={currentVideoId}/> }
    </div>
  )
}

export default CommentsContainer;