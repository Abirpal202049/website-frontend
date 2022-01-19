import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import ReactSVG from "../SVG/Logo.svg";

import { Global } from "./GlobalProvider";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { openLoginPopup, openLogoutPopup, adminToken } = useContext(Global);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1024) setMenu(false);
    };

    return () => {
      window.onresize = null;
    };
  });

  return (
    <nav className="bg-shades-4 text-shades-0 h-20 flex justify-between items-center px-4 lg:px-12 py-2 transition ease-in fixed inset-0 select-none">
      <Link to="/" className="h-full flex justify-center items-center z-10">
        <img className="h-full py-1" src={ReactSVG} alt="" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">AEC Coding Club</h1>
          <p className="text-sm relative -top-1">Always Top of the Heap</p>
        </div>
      </Link>

      <button
        className="lg:hidden text-2xl bg-shades-1 text-shades-4 h-10 aspect-square grid place-items-center rounded-full z-10"
        onClick={() => setMenu(!menu)}
      >
        <svg
          className={`h-2/3 mx-auto transition transform ${
            menu ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d={
              menu
                ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            }
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          "flex flex-col lg:flex-row justify-start items-center lg:justify-around lg:items-center gap-4 lg:gap-2 pt-28 lg:pt-0 bg-shades-4 lg:bg-transparent ease-in fixed lg:static duration-150 h-screen w-full lg:h-auto lg:w-auto right-0 " +
          (menu ? "top-0" : "top-full")
        }
        onClick={() => setMenu(false)}
      >
        <Link
          to="/members"
          className="px-4 py-2 hover:bg-shades-3 hover:bg-opacity-60 active:scale-90 rounded-3xl"
        >
          Members
        </Link>
        <Link
          to="/events"
          className="px-4 py-2 hover:bg-shades-3 hover:bg-opacity-60 active:scale-90 rounded-3xl"
        >
          Events
        </Link>

        <button
          className="px-4 py-2 mx-2 rounded-3xl bg-shades-1 hover:bg-shades-0 text-shades-4 text-lg font-semibold ease-in hover:scale-x-105 active:scale-95"
          onClick={adminToken ? openLogoutPopup : openLoginPopup}
        >
          {adminToken ? "Logout" : "Login"}
        </button>
      </div>

      <Login />
      <Logout />
    </nav>
  );
};

export default Navbar;
