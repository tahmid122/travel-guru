import React from "react";
import bgImg from "../../assets/images/Rectangle 1.png";

const Destination = () => {
  return (
    <div className="h-screen relative bg-gradient-to-b from-[#000000a3] to-[#00000092]">
      <div>
        <div className="z-20 text-white pt-[220px] px-5 space-y-7  h-full flex items-center justify-around w-full">
          <div className=" space-y-6 flex-1/2">
            <h1 className="text-7xl font-bold">Cox's bazar</h1>
            <p className="text-base text-slate-200 w-3/4">
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
            <button className="btn bg-primary outline-none border-none shadow-none">
              Booking
            </button>
          </div>
          <div className="flex-1/2">
            <form className="bg-white p-5 rounded text-black w-1/2 mx-auto space-y-5">
              <div>
                <label htmlFor="origin" className="text-base font-medium">
                  Origin
                </label>{" "}
                <br />
                <input
                  className="border p-3 bg-[#F2F2F2] text-black border-none outline-none rounded w-full mt-2"
                  type="text"
                  name="origin"
                  id=""
                />
              </div>
              <div>
                <label htmlFor="origin" className="text-base font-medium">
                  Destination
                </label>{" "}
                <br />
                <input
                  className="border p-3 bg-[#F2F2F2] text-black border-none outline-none rounded w-full mt-2"
                  type="text"
                  name="origin"
                  id=""
                />
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <label htmlFor="origin" className="text-base font-medium">
                    From
                  </label>{" "}
                  <br />
                  <input
                    className="border p-3 bg-[#F2F2F2] text-black border-none outline-none rounded w-full mt-2"
                    type="text"
                    name="origin"
                    id=""
                  />
                </div>
                <div>
                  <label htmlFor="origin" className="text-base font-medium">
                    To
                  </label>{" "}
                  <br />
                  <input
                    className="border p-3 bg-[#F2F2F2] text-black border-none outline-none rounded w-full mt-2"
                    type="text"
                    name="origin"
                    id=""
                  />
                </div>
              </div>
              <button className="w-full btn bg-primary shadow-neutral border-none">
                Start Booking
              </button>
            </form>
          </div>
        </div>
      </div>

      <img
        className="absolute left-0 top-0 h-full w-full -z-10"
        src={bgImg}
        alt=""
      />
    </div>
  );
};

export default Destination;
