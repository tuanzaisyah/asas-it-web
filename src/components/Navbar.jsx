import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 md:h-28 px-4 md:px-10 flex items-center">
      <Link to={"/"}>
        <img
          src="../../assets/img/logo.png"
          alt="logo"
          className="w-56 h-auto"
        />
      </Link>
    </div>
  );
};

export default Navbar;
