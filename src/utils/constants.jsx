const GOOGLE_API_KEY = "AIzaSyC1SJkyOiaBp-Nu83lh-_vvvrl-6S4AhKo";

export const YOUTUBE_VIDEOLIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const AUTO_COMPLETE_YOUTUBE_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY;

export const YOUTUBE_VIDEOBY_ID_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key="+GOOGLE_API_KEY+"&id=";

export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+GOOGLE_API_KEY+"&id=";