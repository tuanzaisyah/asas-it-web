import React from "react";
import { Link } from "react-router-dom";

const QuizResult = ({ result, retry }) => {
  return (
    <div className="w-full h-full mt-10 pt-10 px-6 pb-0">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-96 md:w-[650px] lg:w-[800px] xl:w-[1000px] h-[550px] xl:h-[650px] bg-white-100 border border-white-400 p-4 rounded-2xl">
          <img
            className="w-44 xl:w-64"
            src="../../assets/img/medal.png"
            alt=""
          />

          <h3 className="text-3xl xl:text-4xl font-medium mt-8">Tahniah!!!</h3>
          <p className="text-xl xl:text-2xl text-center mt-8">
            Anda berjaya menjawab <b>{result.correct} </b>
            dari <b>{result.total}</b> soalan dengan betul
          </p>

          <div className="flex gap-4 mt-12">
            <button
              onClick={retry}
              className="bg-slate-900 text-white-200 lg:text-xl rounded-full px-6 py-2"
            >
              Main Semula
            </button>
            <Link to={"/"}>
              <button className="bg-orange text-slate-900 lg:text-xl rounded-full px-12 py-2">
                Tamat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
