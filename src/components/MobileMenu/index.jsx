import {
  faBell,
  faBookmark,
  faClose,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../Sidebar";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null; // Retorna nada se o menu estiver fechado

  return (
    <div className="fixed inset-y-0 left-0 w-4/5 bg-black  z-50  flex flex-col items-start p-4">
      {/* Botão para fechar o menu */}
      <button onClick={() => setIsOpen(false)} className="mb-4 text-white">
        <img
          src="src\assets\Default-Profile-Picture.png"
          alt="user profile picture"
          className="w-12 h-12 rounded-full mr-3"
        />
      </button>

      {/* Itens do menu */}
      <NavItem icon={faHome} text="Home" />
      <NavItem icon={faSearch} text="Explore" />
      <NavItem icon={faBell} text="Notifications" />
      <NavItem icon={faEnvelope} text="Messages" />
      <NavItem icon={faBookmark} text="Bookmarks" />
      <NavItem icon={faUser} text="Profile" />
    </div>
  );
};
