import React from "react";
import { Link } from "react-router-dom";

const JoinScreen = ({ start }) => {
  return (
    <div className="w-full h-full  mt-10 pt-10 px-6 pb-16">
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 md:w-[650px] lg:w-[800px] xl:w-[1000px] h-[550px] xl:h-[650px] bg-white-100 border border-white-400 p-4 rounded-2xl flex flex-col justify-between">
          <div className="">
            <h1 className="font-medium text-2xl lg:text-3xl pb-4">
              Arahan Kuiz
            </h1>

            <hr className="w-full border-white-400" />

            <ol className="flex flex-col gap-4 xl:gap-8 mt-4 xl:text-xl">
              <li>
                1. Anda mempunyai masa <b>30 saat</b> sahaja bagi setiap soalan.
              </li>
              <li>
                2. Anda hanya boleh memilih <b>satu jawapan</b> sahaja.
              </li>
              <li>
                3. Anda tidak boleh memilih jawapan lagi setelah masa tamat.
              </li>
              <li>
                4. Anda tidak boleh keluar dari kuiz apabila tekan butang{" "}
                <b>MULA</b>.
              </li>
            </ol>
          </div>
          <div>
            <hr className="w-full border-white-400" />
            <div className="flex items-center md:items-end justify-center md:justify-end gap-3 lg:gap-6 pt-4">
              <Link to={"/"}>
                <button className="uppercase bg-slate-900 text-white-200 lg:text-xl rounded-full px-8 py-1">
                  Tamat
                </button>
              </Link>
              <button
                onClick={start}
                className="uppercase bg-orange text-slate-900 lg:text-xl rounded-full px-8 py-1"
              >
                Mula
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinScreen;
