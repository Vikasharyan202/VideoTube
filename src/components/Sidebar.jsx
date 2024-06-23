import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closedSidebar, toggleSidebar } from "../utils/navbarSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const isNavbarOpen = useSelector((store) => store.navbar.isNavbarOpen);
    const isSidebarOpen = useSelector((store) => store.navbar.isSidebarOpen);

    const dispatch = useDispatch();

    function handleSidebar() {
        dispatch(closedSidebar());
        dispatch(toggleSidebar());
    }

    if(isNavbarOpen) return(
        <div className="w-48 border border-blue-500 ">
            <div className="flex flex-col gap-3 ml-3"> 
                <Link to='/' onClick={handleSidebar}><button>Home</button></Link>
                <h3 className="font-bold">You &gt; </h3>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/><span>Your channel</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="History" src="https://static-00.iconduck.com/assets.00/history-icon-2048x1863-258qellh.png" /><span>History</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="Playlist" src="https://i.pinimg.com/564x/09/48/d2/0948d242f8a1e1c33b128a248806b520.jpg" /><span>Playlists</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="videos" src="https://static.vecteezy.com/system/resources/previews/007/160/087/original/video-icon-video-symbol-play-video-sign-free-vector.jpg" /><span>Your videos</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="watch" src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png" /><span>Watch later</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="liked" src="https://w7.pngwing.com/pngs/415/5/png-transparent-social-media-thumb-signal-like-button-computer-icons-symbol-thumbs-up-text-hand-rectangle-thumbnail.png" /><span>Liked videos</span></button>
            </div>
            <div className="flex flex-col gap-3 ml-3 mt-3">
                <h3 className="font-bold">Subscriptions</h3>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Akshay Sainy</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>RoadSideCoder</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Codevolution</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>J. Krishnamurti</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Peepal Farm</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Acharya Prashant</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>freeCodeCamp</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>take U forward</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Spirit Of Shabda</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Gaurav Sen</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="" src="" /><span>Programming With Mosh</span></button>
            </div>
            <div className="flex flex-col gap-3 ml-3 mt-3">
            <h3 className="font-bold">Explore</h3>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="trend" src="https://png.pngtree.com/png-vector/20231211/ourmid/pngtree-trends-icon-growth-graph-png-image_10859632.png" /><span>Trending</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="shop" src="https://w7.pngwing.com/pngs/850/336/png-transparent-shopping-cart-computer-icons-symbol-supermarket-shopping-angle-text-logo-thumbnail.png" /><span>Shopping</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="music" src="https://w7.pngwing.com/pngs/759/249/png-transparent-itunes-store-computer-icons-music-itunes-text-musician-apple-music.png" /><span>Music</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="movie" src="https://w7.pngwing.com/pngs/545/554/png-transparent-computer-icons-film-movie-projector-action-movie-angle-text-rectangle-thumbnail.png" /><span>Movies</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="live" src="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png" /><span>Live</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="game" src="https://cdn-icons-png.flaticon.com/512/8293/8293566.png" /><span>Gaming</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="news" src="https://i.pinimg.com/736x/ff/1f/5d/ff1f5d98466dc8bde35032f710581bd8.jpg" /><span>News</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="sport" src="https://w7.pngwing.com/pngs/884/966/png-transparent-computer-icons-sport-icon-design-spor-text-hand-logo.png" /><span>Sports</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="course" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D4jw3dOtUMz7DvEn9uJcpqZTKVoLpNtT_g&s" /><span>Courses</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="fashion" src="https://e7.pngegg.com/pngimages/843/229/png-clipart-computer-icons-beauty-cartoon-girl-fashion-girl-text.png" /><span>Fashion & Beauty</span></button>
                <button className="flex items-center gap-2 h-10 hover:bg-slate-100 hover:rounded-lg"><img className="w-6" alt="podcast" src="https://img.freepik.com/premium-vector/podcast-icon_861234-1271.jpg" /><span>Podcasts</span></button>
            </div>
            <div className="">copyrights</div>
        </div>
    )
    if(isSidebarOpen) return (
        <div className="flex flex-col items-center">
            <Link to='/' >
            <button className="flex flex-col justify-center items-center gap-1 h-20 w-16 hover:bg-slate-100 hover:rounded-lg"><img className="w-4" alt="home" src="https://i.pinimg.com/564x/ed/bc/bb/edbcbb66b41eb9570c7b2eeb011b7eb8.jpg" /><span className="text-xs">Home</span></button>
            </Link>
            
            <button className="flex flex-col justify-center items-center gap-1 h-20 w-16 hover:bg-slate-100 hover:rounded-lg"><img className="w-4" alt="shorts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvfNPT_G_NuKyV_RyyiTGqOtp3OBZxme25A&s" /><span className="text-xs">Shorts</span></button>
            <button className="flex flex-col justify-center items-center gap-1 h-20 w-auto hover:bg-slate-100 hover:rounded-lg"><img className="w-4" alt="subscription" src="https://cdn.iconscout.com/icon/free/png-256/free-subscriptions-1780185-1513025.png" /><span className="text-xs">Subscriptions</span></button>
            <button className="flex flex-col justify-center items-center gap-1 h-20 w-16 hover:bg-slate-100 hover:rounded-lg"><img className="w-4" alt="you" src="https://a0.anyrgb.com/pngimg/1376/154/youtube-play-button-8k-resolution-youtuber-youtube-blog-video-logos-triangle-rectangle-black.png"/><span className="text-xs">You</span></button>
        </div>
    );
}

export default Sidebar;