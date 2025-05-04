import React from "react";
import bgImg from "../../assets/images/Rectangle 1.png";
import sundorbon from "../../assets/images/sundorbon.png";
import Sreemongolorbon from "../../assets/images/Sreemongol.png";
import sajek from "../../assets/images/Sajek.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Home = () => {
  return (
    <div className="h-screen relative bg-gradient-to-b from-[#000000a3] to-[#00000092]">
      <div>
        <div className="z-20 text-white pt-[220px] px-5 space-y-7  h-full flex items-center justify-around w-full">
          <div className=" space-y-6 flex-1/2">
            <h1 className="text-7xl font-bold">Cox's bazar</h1>
            <p className="text-base text-slate-200 w-1/2">
              Cox's Bazar is a city, fishing port, tourism centre and <br />{" "}
              district headquarters in southeastern Bangladesh. It is famous
              mostly for its long natural sandy beach, and it...
            </p>
            <button className="btn bg-primary outline-none border-none shadow-none">
              Booking
            </button>
          </div>
          <div className="flex-1/2 flex gap-8 overflow-hidden">
            <div className="w-[270px] h-[400px] relative overflow-hidden flex items-end justify-center">
              <img
                className="h-full w-full border-2 border-primary rounded-3xl absolute top-0 left-0 outline-hidden -z-0 object-cover"
                src={bgImg}
                alt=""
              />
              <div className="z-10 text-4xl font-bold py-5">Cox's Bazar</div>
            </div>
            <div className="w-[270px] h-[400px] relative overflow-hidden flex items-end justify-center">
              <img
                className="h-full w-full border-2 border-primary rounded-3xl absolute top-0 left-0 outline-hidden -z-0"
                src={sajek}
                alt=""
              />
              <div className="z-10 text-4xl font-bold py-5">Sajek</div>
            </div>
            <div className="w-[270px] h-[400px] relative overflow-hidden flex items-end justify-center">
              <img
                className="h-full w-full border-2 border-primary rounded-3xl absolute top-0 left-0 outline-hidden -z-0"
                src={sundorbon}
                alt=""
              />
              <div className="z-10 text-4xl font-bold py-5">Sundarban</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center flex items-center justify-center gap-4 mt-10">
        <div className="h-10 w-10 bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
          <IoIosArrowBack size={24} />
        </div>
        <span className="h-10 w-10 bg-white text-black flex items-center justify-center rounded-full cursor-pointer">
          <IoIosArrowForward size={24} />
        </span>
      </div>
      <img
        className="absolute left-0 top-0 h-full w-full -z-10"
        src={bgImg}
        alt=""
      />
    </div>
  );
};

export default Home;
