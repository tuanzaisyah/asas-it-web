import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Note = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  return (
    <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center px-4">
      <div>
        <img
          src="../../assets/notes/note1/1.png"
          alt=""
          className="w-96 h-auto"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
            <IoMdDownload className="w-6 h-6" /> Muat Turun Nota
          </button>
          <button className="w-52 bg-slate-900 text-white-100 px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
            <MdOutlineVideoLibrary className="w-6 h-6" /> Tonton Video
          </button>
        </div>

        <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
          <FaGamepad className="w-6 h-6" /> Uji Minda
        </button>
      </div>
    </div>
  );
};

export default Note;
