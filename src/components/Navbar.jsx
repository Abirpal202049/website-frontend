import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import ReactSVG from "../SVG/logo512.png";

import PopUp from "./PopUp";
import Login from "./Login";

const Navbar = (props) => {
  const { setOpenPopup, openPopup } = props;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      setOpenMenu(false);
    };
    return () => {
      window.onresize = null;
    };
  });

  return (
    <div className="bg-shades-4 text-shades-0 h-20 flex justify-between items-center px-4 lg:px-12 py-2 transition duration-150 ease-in fixed inset-0">
      <Link
        to="/"
        className="h-full flex justify-center items-center cursor-pointer z-50"
      >
        <img className="h-full mr-4 py-1" src={ReactSVG} alt="" />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">AEC Coding Club</h1>
          <p className="text-sm te relative -top-1">Always Top of the Heap</p>
        </div>
      </Link>

      <div
        className="cursor-pointer z-50 lg:hidden inline-flex right-0"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <MenuIcon /> : <CloseIcon />}
      </div>

      <div
        className={
          "flex flex-col lg:flex-row justify-start items-center lg:justify-around lg:items-center gap-4 lg:gap-2 pt-28 lg:pt-0 bg-shades-4 lg:bg-transparent duration-200 ease-in fixed lg:static h-screen w-full lg:h-auto lg:w-auto right-0 " +
          (openMenu ? "top-0" : "top-full")
        }
      >
        <Link
          to="/members"
          className="px-4 py-2 hover:bg-shades-3 hover:bg-opacity-60 active:scale-90 rounded-3xl duration-150"
        >
          Members
        </Link>
        <Link
          to="/events"
          className="px-4 py-2 hover:bg-shades-3 hover:bg-opacity-60 active:scale-90 rounded-3xl duration-150"
        >
          Events
        </Link>
        <div
          className="px-4 py-2 mx-2 rounded-3xl cursor-pointer bg-shades-1 hover:bg-shades-3 text-shades-4 hover:text-shades-1 duration-150 ease-in hover:scale-x-105 active:scale-95"
          onClick={() => {
            setOpenPopup(true);
            setOpenMenu(false);
          }}
        >
          Login
        </div>
        <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <Login setOpenPopup={setOpenPopup} />
        </PopUp>
      </div>
    </div>
  );
};

export default Navbar;
