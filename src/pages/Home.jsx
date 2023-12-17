import { Slider } from "infinite-react-carousel";
import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { note } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
      <div className="w-[328px] h-auto object-cover">
        <img src="./assets/img/home.png" alt="" />
      </div>

      <div className="container px-4 ">
        <Slider arrows={false} slideToShow={1} dots={true}>
          {note.map((note) => (
            <div
              key={note.id}
              className="w-80 h-64 bg-white-100 p-4 rounded-lg border border-white-400 flex flex-col justify-between relative"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium">{note.topic}</h3>
                <p>{note.desc}</p>
              </div>

              <Link to={`/note/${note.id}`}>
                <button className="absolute bottom-4 right-4 w-44 flex items-center justify-center gap-2 bg-orange py-2 rounded-3xl">
                  <MdOutlineMenuBook /> Baca Nota
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
