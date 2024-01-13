import React from "react";
import { TiHome } from "react-icons/ti";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { note } from "../data";

const Video = () => {
  const location = useLocation();
  const videoId = parseInt(location.pathname.split("/")[2], 10);
  const selectedVideo = note.find((n) => n.id === videoId);

  const prevPage = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-full mt-10 pt-10 px-6 pb-16">
      <div className=" flex flex-col gap-12 items-center justify-center px-4">
        <div className="max-w-[1040px]">
          <video
            src={selectedVideo?.video}
            alt=""
            className=" h-auto"
            controls
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Link to={"/"}>
              <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
                <TiHome className="w-6 h-6" /> Laman Utama
              </button>
            </Link>

            <button
              onClick={prevPage}
              className="w-52 bg-slate-900 text-white-100 px-6 py-4 flex items-center justify-center gap-2 rounded-lg"
            >
              <MdOutlineMenuBook className="w-6 h-6" /> Baca Nota
            </button>
          </div>

          <Link to={`/quiz/${videoId}`}>
            <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
              <FaGamepad className="w-6 h-6" /> Uji Minda
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
