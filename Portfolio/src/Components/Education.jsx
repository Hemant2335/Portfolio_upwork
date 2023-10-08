import React from "react";
import { FiBriefcase } from "react-icons/fi";

const Education = () => {
  return (
    <div className="w-full h-[90vh] mt-[2vh] edu-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiBriefcase />
        <h2 className=" font-Jetbrains">Resume</h2>
      </div>

      <div className="w-full font-bold text-left text-3xl mt-[10vh] title edu-title">
        <div className="flex items-center mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">Education &</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Experience</h1>
        </div>
      </div>

      <div className="flex items-center gap-[5vh] mt-[8vh] edu-edu">
        <div className="h-[60vh] flex flex-col justify-between  edu-edu items-center">
          <div className="w-[1.5vh] h-[1.5vh] rounded-[50%] bg-yellow-500"></div>
          <div className=" w-0 border-2 border-gray-400 rounded-lg h-[20vh]"></div>
          <div className="w-[1.5vh] h-[1.5vh] rounded-[50%] bg-red-500"></div>
          <div className=" w-0 border-2 border-gray-400 rounded-lg h-[20vh]"></div>
          <div className="w-[1.5vh] h-[1.5vh] rounded-[50%] bg-green-500"></div>
        </div>

        <div className="min-w-[80vh] h-fit text-left flex flex-col gap-[15vh] ">
          <div>
          <h2 className="">2022 - present</h2>
          <h1 className="text-xl font-bold">Bachelor of Technology</h1>
          <p className="text-gray-400">Jaypee University of Engineering and Technology , Guna</p>
          </div>
          <div>
          <h2 className="">2021 - 2022</h2>
          <h1 className="text-xl font-bold">Higher Secondary Education</h1>
          <p className="text-gray-400">Kendriya Vidyalaya No.1 Delhi Cantt , New Delhi</p>
          </div>
          <div className="">
          <h2 className="">2019 - 2020</h2>
          <h1 className="text-xl font-bold">High School Education</h1>
          <p className="text-gray-400">Kendriya Vidyalaya Mhow, Indore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
