import { useState } from "react";
import logo from "../../MicroTaskBidz.png";
import styles from "./styles";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true);
  const handleLogoutClick = () => sessionStorage.removeItem("token");
  return (
    <header className=" t-0 l-0 mb-8 w-full bg-gray-900 sm:flex  sm:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img className="h-4" src={logo} />
        </div>
        <button
          type="button"
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showHamburgerMenu ? (
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={
          !showHamburgerMenu
            ? styles.links_container
            : styles.links_container_hidden
        }
      >
        <NavLink to="/" className={styles.nav_link}>
          Home
        </NavLink>
        {props.authenticated ? (
          <NavLink
            to="/signup"
            onClick={handleLogoutClick}
            className={styles.nav_link}
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/signin" className={styles.nav_link}>
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Navbar;
