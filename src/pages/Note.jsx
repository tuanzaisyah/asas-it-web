import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { note } from "../data";
import { Slider } from "infinite-react-carousel";

const Note = () => {
  const location = useLocation();
  const noteId = parseInt(location.pathname.split("/")[2], 10);

  const selectedNote = note.find((n) => n.id === noteId);

  return (
    <div className="w-full h-full mt-20 pt-20 px-6 pb-0">
      <div className=" flex flex-col gap-12 items-center justify-center px-4">
        <div className="container max-w-[1040px]">
          <Slider arrows={true} slideToShow={1} dots={true}>
            {selectedNote?.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Image ${i + 1}`}
                className="w-auto h-auto"
              />
            ))}
          </Slider>
        </div>

        <div className="flex flex-col md:flex-row lg:justify-between gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <a
              className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg"
              href={selectedNote.note}
            >
              <IoMdDownload className="w-6 h-6" /> Muat Turun Nota
            </a>

            <Link to={`/video/${noteId}`}>
              <button className="w-52 bg-slate-900 text-white-100 px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
                <MdOutlineVideoLibrary className="w-6 h-6" /> Tonton Video
              </button>
            </Link>
          </div>

          <button className="w-52 bg-orange px-6 py-4 flex items-center justify-center gap-2 rounded-lg">
            <FaGamepad className="w-6 h-6" /> Uji Minda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
