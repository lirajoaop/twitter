import {
  faBell,
  faBolt,
  faBookmark,
  faEnvelope,
  faHashtag,
  faHome,
  faList,
  faListAlt,
  faSearch,
  faStream,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../Sidebar";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 w-4/5 bg-black z-50 flex flex-col items-start p-4">
      {/* Close menu button */}
      <button onClick={() => setIsOpen(false)} className="text-white">
        <img
          src="/images/miles-profile.png"
          alt="user profile picture"
          className="w-20 h-20 rounded-full mr-3"
        />
      </button>
      <div className="ml-3">
        <h2 className="text-xl font-bold">User</h2>
        <p className="text-slate-400">@user</p>
        {/* Follow div */}
        <div className="flex space-x-3 mb-4 ">
          <div className="flex space-x-1 mt-3">
            <p className="text-white font-bold">220</p>
            <p className="text-slate-400">Following</p>
          </div>
          <div className="flex space-x-1 mt-3">
            <p className="text-white font-bold">174</p>
            <p className="text-slate-400">Followers</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 border-b border-b-slate-200 w-full pb-4">
        {/* Menu items */}
        <NavItem icon={faUser} text="Profile" />
        <NavItem icon={faListAlt} text="Lists" />
        <NavItem icon={faStream} text="Topics" />
        <NavItem icon={faBookmark} text="Bookmarks" />
        <NavItem icon={faBolt} text="Moments" />
      </div>
      <div className="mt-4 ml-3 space-y-6 text-xl">
        <p>Settings and privacy</p>
        <p>Help Center</p>
      </div>
    </div>
  );
};
