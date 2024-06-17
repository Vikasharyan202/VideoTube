
const Header = () => {
    return(
        <div className="flex justify-between border border-green-300 px-4 h-20">
            <div className="flex items-center">
                <img className="w-10 h-10" alt="hamburger" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
                <img className="w-36" alt="logo" src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" />
            </div>
            <div className="flex justify-center item-center">
                <input className="w-" type="text" placeholder="Search videos"/>
                <button>Search</button>
            </div>
            <div className="right">
                <img className="w-16" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" />
            </div>
        </div>
    )
}

export default Header;