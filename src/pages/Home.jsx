import { Slider } from "infinite-react-carousel";
import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { note } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full mt-10 pt-10 px-6 pb-16">
      <div className="flex flex-col md:flex-row md:px-11 items-center justify-center gap-6 lg:gap-16 xl:gap-24">
        <div className="md:basis-1/2 md:order-2">
          <img
            src="./assets/img/home.png"
            alt="home"
            className="w-[328px] h-auto lg:w-[400px] xl:w-auto max-w-[600px]"
          />
        </div>

        <div className="container px-4 lg:px-11 md:basis-1/2 md:order-1 ">
          <Slider arrows={false} slideToShow={1} dots={true}>
            {note.map((note) => (
              <div
                key={note.id}
                className="w-80 h-72 lg:h-80 xl:h-96 bg-white-100 p-4 lg:p-8 rounded-lg border border-white-400 flex flex-col justify-between relative"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl xl:text-2xl  font-medium">
                    {note.topic}
                  </h3>
                  <p className="xl:text-xl">{note.desc}</p>
                </div>

                <Link to={`/note/${note.id}`}>
                  <button className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 w-44 flex items-center justify-center gap-2 bg-orange py-2 rounded-3xl">
                    <MdOutlineMenuBook /> Baca Nota
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
