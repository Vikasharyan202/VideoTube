/* eslint-disable react/prop-types */
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import { useState, useEffect } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplayIcon from '@mui/icons-material/Replay';

const Comment = ( {vId} ) => {
    const commentsDataURL = YOUTUBE_COMMENTS_API + "&textFormat=plainText&part=snippet&videoId="+vId+"&maxResults=100";
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        getVideosComments();
    }, [])

    const getVideosComments = async () => {
        const data = await fetch(commentsDataURL);
        const json = await data.json();
        setCommentData(json.items);
    }

    return(
        <div>   
            <h2 className="text-3xl font-bold">{commentData.length} Comments</h2>
            {(commentData.length > 0) && (commentData.map((comment) => (
                <div key={comment.id} className="ml-4 flex gap-4 p-4">
                    <img className="w-10 h-10 rounded-full cursor-pointer" alt="user" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl
} />
                    <div>
                        <p className="cursor-pointer">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                        <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                        <ul className="flex gap-5">
                            <li><ThumbUpOffAltIcon /></li>
                            <li><ThumbDownOffAltIcon /></li>
                            <li><ReplayIcon /></li>
                        </ul>
                    </div>               
                </div>
            )))}
        </div>
    )
}

export default Comment;