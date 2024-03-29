import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-20 md:h-28 px-4 md:px-10 flex items-center justify-between">
      <Link to={"/"}>
        <img
          src="../../assets/img/logo.png"
          alt="logo"
          className="w-72 md:w-96 h-auto"
        />
      </Link>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl  hover:text-orange cursor-pointer md:hidden"
      >
        <BiMenu />
      </div>

      <ul
        className={`flex flex-col items-center md:flex-row gap-0 md:gap-8  md:pb-0 py-28 md:pt-0  absolute top-0 left-0 md:static bg-orange md:bg-white-200 w-full md:w-auto text-center transition-all duration-300 ease-in-out md:transition-none ${
          menuOpen ? "top-0" : "top-[-490px]"
        }`}
      >
        <AiOutlineClose
          onClick={() => setMenuOpen(!menuOpen)}
          className=" text-2xl absolute right-6 top-4 cursor-pointer hover:text-white-200 md:hidden"
        />

        <li className="my-4">
          <Link to={"/about"}>
            <a
              className="text-xl hover:text-white-200 md:hover:text-orange font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Tentang Kami
            </a>
          </Link>
        </li>
        <li className="my-4">
          <a
            className="text-xl hover:text-white-200 md:hover:text-orange font-medium"
            href="../../assets/usermanual.pdf"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            Panduan Pengguna
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
