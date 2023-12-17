import React from "react";
import { TiHome } from "react-icons/ti";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center px-4">
      <div>
        <video
          src="../../assets/videos/sample.mp4"
          alt=""
          className="w-96 h-auto"
          controls
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <Link to={"/"}>
            <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
              <TiHome className="w-6 h-6" /> Laman Utama
            </button>
          </Link>

          <button className="w-52 bg-slate-900 text-white-100 px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
            <MdOutlineMenuBook className="w-6 h-6" /> Baca Nota
          </button>
        </div>

        <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
          <FaGamepad className="w-6 h-6" /> Uji Minda
        </button>
      </div>
    </div>
  );
};

export default Video;
