import React from "react";
import logo from "../washington_commanders_logo_alternate_2022_sportslogosnet-2484.png";

function Nav() {
  return (
    <div className="py-6 container m-auto mb-16">
      <a href="/">
        <img src={logo} alt="logo" className="w-16 h-auto" />
      </a>
    </div>
  );
}

export default Nav;
