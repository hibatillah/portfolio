import React from "react";
import { profile, menu, darkToggle, grainy } from "../assets";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3">
        <img src={profile} alt="logo" className="w-8 h-8 rounded-lg" />
        <div className="flex items-center gap-6">
          <img
            src={darkToggle}
            alt="darkmode-toggle"
            className="w-6 h-6 press"
          />
          <img src={menu} alt="menu-toggle" className="w-6 h-6 press" />
        </div>
      </header>
      <div className="relative">
        <img
          src={grainy}
          alt="grainy-background"
          className="w-full bg-cover h-52"
        />
        <div className="absolute left-4 -bottom-10 w-28 h-28 overflow-hidden border-4 border-white rounded-full shadow-xl">
          <img
            src={profile}
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
