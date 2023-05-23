import React from "react";
import { profile, menu, darkToggle } from "../assets";

const Header = () => {
  return (
    <Header className="flex justify-between">
      <img src={profile} alt="profile" className="rounded-md w-7 h-7" />
      <div>
        <img src={darkToggle} alt="profile" className="rounded-md w-7 h-7" />
        <img src={menu} alt="profile" className="rounded-md w-7 h-7" />
      </div>
    </Header>
  );
};

export default Header;
