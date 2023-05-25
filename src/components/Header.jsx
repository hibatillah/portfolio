import React from "react";
import { profile, menu, darkToggle, grainy } from "../assets";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 select-none">
        <a href="/">
          <img
            src={profile}
            alt="logo"
            className="w-8 h-8 rounded-lg pointer-events-none"
          />
        </a>
        <div className="flex items-center gap-6">
          <img
            src={darkToggle}
            alt="darkmode-toggle"
            className="w-6 h-6 press"
          />
          <img src={menu} alt="menu-toggle" className="w-7 h-7 press" />
        </div>
      </header>
      <img
        src={grainy}
        alt="grainy-background"
        className="w-full bg-cover h-52 select-none pointer-events-none"
      />
    </>
  );
};

export default Header;
