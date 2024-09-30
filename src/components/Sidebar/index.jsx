import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faFeatherAlt,
  faHashtag,
  faHome,
  faSearch,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-3 rounded-full cursor-pointer xl:hover:bg-gray-600 transition duration-200 "
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-4" />
      <span className="text-xl hidden xl:inline">{text}</span>
    </div>
  );
};

export function Sidebar() {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/*  Horizontal Navbar for Mobile */}
      <div className="w-full fixed bottom-0 bg-black border-t border-gray-600 xl:hidden flex justify-around ">
        <NavItem icon={faHome} onClick={handleHomeClick} />
        <NavItem icon={faSearch} />
        <NavItem icon={faBell} />
        <NavItem icon={faEnvelope} />
      </div>

      {/* Vertical Sidebar for Desktop */}
      <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen hidden xl:block ">
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-twitter-blue text-3xl mt-4 mb-4 mx-2 "
        />
        <nav>
          <NavItem icon={faHome} text="Home" onClick={handleHomeClick} />
          <NavItem icon={faSearch} text="Explore" />
          <NavItem icon={faBell} text="Notifications" />
          <NavItem icon={faEnvelope} text="Messages" />
          <NavItem icon={faBookmark} text="Bookmarks" />
          <NavItem icon={faUserFriends} text="Communities" />
          <NavItem icon={faTwitter} text="Premium" />
          <NavItem icon={faUser} text="Profile" />
          <NavItem icon={faEllipsisH} text="More" />
        </nav>

        <button className="bg-twitter-blue text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer hover:bg-blue-600 transition duration-200">
          <FontAwesomeIcon
            icon={faFeatherAlt}
            className="text-white  inline xl:hidden "
          />
          <span className="hidden xl:inline hover:bg-twitter-blue">
            Twitter
          </span>
        </button>
      </div>
    </>
  );
}
