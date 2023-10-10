import React from "react";
import { FiCompass } from "react-icons/fi";
import echakran from "../assets/echakran.png";
import oeat from "../assets/oeat.png";
import onebuy from "../assets/onebuy.png";
import onewatch from "../assets/onewatch.png";

const Portfolio = () => {
  return (
    <div className="w-full h-fit mt-[20vh] port-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiCompass />
        <h2 className=" font-Jetbrains">Portfolio</h2>
      </div>
      <div className="w-full font-bold text-left text-3xl mt-[10vh] title port-title">
        <div className="flex items-center mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">My</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Projects</h1>
        </div>
      </div>

      <div className="md:w-[50vw] mt-[8vh] md:px-[8vh] flex flex-col gap-[5vh] port-title  h-full">
        <div className="w-full rounded-xl shadow-3xl port-title">
          <img
            src={echakran}
            alt="EchaKran"
            className="max-h-[100vh] w-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex gap-[2vh] port-title">
          <div className="w-full rounded-xl shadow-3xl port-title">
            <img
              src={onebuy}
              alt="EchaKran"
              className=" h-fit w-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full rounded-xl shadow-3xl port-title">
            <img
              src={onewatch}
              alt="EchaKran"
              className=" h-fit w-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full rounded-xl shadow-3xl port-title">
          <img
            src={oeat}
            alt="OEat"
            className="max-h-[100vh] w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
