import React, { use } from "react";
import whiteLogo from "../assets/images/white-logo.png";
import blackLogo from "../assets/images/black-logo.png";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
const NavBar = () => {
  const { signOutUser, user } = use(AuthContext);
  const { pathname } = useLocation();
  const handleSignOut = () => {
    signOutUser()
      .then(() => alert("Sign out successful"))
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/news"}>News</NavLink>
      </li>
      <li>
        <NavLink to={"/destination"}>Destination</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar ${
        pathname === "/" || pathname === "/destination"
          ? "bg-transparent text-white fixed border-b  border-b-slate-400"
          : "bg-white text-black"
      } shadow-sm p-5  z-10  `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-between gap-6">
          <Link to={"/"} className="w-full">
            <img
              className="h-14 object-cover"
              src={
                pathname === "/" || pathname === "/destination"
                  ? whiteLogo
                  : blackLogo
              }
              alt=""
            />
          </Link>
          <label className=" outline-none flex gap-3 items-center border p-2 border-slate-300 rounded">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="w-[300px] outline-none focus:outline-none"
              type="search"
              required
              placeholder="Search your destination"
            />
          </label>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-primary outline-none border-none shadow-none"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="btn bg-primary outline-none border-none shadow-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
