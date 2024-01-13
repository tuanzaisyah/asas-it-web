import React from "react";
import { team } from "../data";

const About = () => {
  return (
    <div className="w-full h-full mt-10 pt-10 px-6 pb-16">
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-12">
        {team.map((team) => (
          <div
            key={team.id}
            className="w-80 h-80 p-10 flex flex-col items-center justify-center gap-8 bg-white-100 border border-white-400 rounded-lg"
          >
            <img
              className="w-40 h-40 rounded-full object-cover border border-white-400"
              src={team.img}
              alt="team"
            />

            <span className="text-2xl">{team.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
