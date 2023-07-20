import React, { useState, useEffect } from "react";
import { profile, menu, darkToggle, grainy } from "../assets";
import { NavLink } from "react-router-dom";

const Navigasi = ({ handle }) => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Bookmarks", path: "/bookmarks" },
  ];

  return (
    <ul className="w-full font-outfit md:flex md:gap-2">
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            isActive
              ? "text-primary md:font-medium md:rounded-lg md:bg-primary md:text-white"
              : "text-grey-dark"
          }
        >
          <li
            onClick={handle}
            className="text-lg/loose flex justify-center items-center gap-2 group/menu md:px-4 md:py-0.5 md:rounded-lg md:hover:bg-primary/80 md:hover:text-white md:active:bg-primary"
          >
            {item.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 transition-all group-hover/menu:translate-x-1 md:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => setOpenMenu(!openMenu)

  // darkmode toggle
  const activeTheme = document.documentElement.getAttribute("class");
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    console.log("🚀 ~ file: Menu.jsx:8 ~ Menu ~ activeTheme:", activeTheme);
    document.documentElement.setAttribute("class", theme);
  }, [theme, activeTheme]);
  
  return (
    <>
      <div className="relative">
        <header className="absolute w-full bg-white flex items-center justify-between px-4 py-3 select-none z-10 md:px-6 md:py-4 lg:px-12">
          <a href="/">
            <img
              src={profile}
              alt="logo"
              className="w-8 h-8 rounded-lg pointer-events-none md:w-10 md:h-10"
            />
          </a>
          <div className="flex items-center gap-6">
            <img
              src={darkToggle}
              alt="darkmode-toggle"
              className="w-6 h-6 press"
              onClick={handleTheme}
            />
            <img
              src={menu}
              alt="menu-toggle"
              className="w-7 h-7 press"
              onClick={handleMenu}
            />
          </div>
        </header>
        <nav
          className={`${
            openMenu ? "top-14 " : "-top-40"
          } absolute left-0 z-0 w-full px-4 py-6 flex justify-center bg-white border-y border-grey-light transition-all ease-out duration-300`}
        >
          <Navigasi handle={handleMenu} />
        </nav>
      </div>
      <img
        src={grainy}
        alt="grainy-background"
        className="w-full bg-cover h-52 md:h-64 select-none pointer-events-none"
      />
    </>
  );
};

export default Header;
