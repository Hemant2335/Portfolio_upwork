import React from "react";
import mongo from "../Assets/mongo.png";
import react from "../Assets/react.png";
import next from "../Assets/next.svg";
import express from "../Assets/express.png";
import svelte from "../Assets/svelte.png";
import node from "../Assets/node.png";
import { FiGrid } from "react-icons/fi";

const Skills = () => {
  return (
    <div className="w-full md:h-[100vh] mt-[20vh] skill-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiGrid />
        <h2 className=" font-Jetbrains">Skills</h2>
      </div>
      <div className="w-full font-bold text-left text-3xl mt-[10vh] title skill-title">
        <div className="flex items-center mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">My</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Advantages</h1>
        </div>
      </div>

      <div className="mt-[10vh] md:w-[50vw] flex flex-col md:grid grid-cols-4 gap-[5vh] skill-title">
        <div className="md:w-fit h-fit flex flex-col md:gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={mongo} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">70%</h1>
          </div>
          <h1 className="font-bold text-xl">MongoDB</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={express} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">76%</h1>
          </div>
          <h1 className="font-bold text-xl">Express</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={react} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">90%</h1>
          </div>
          <h1 className="font-bold text-xl">React</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={svelte} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">75%</h1>
          </div>
          <h1 className="font-bold text-xl">Svelte</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={next} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">68%</h1>
          </div>
          <h1 className="font-bold text-xl">Nextjs</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={react} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">65%</h1>
          </div>
          <h1 className="font-bold text-xl">React Native</h1>
        </div>
        <div className="md:w-fit h-fit flex flex-col gap-[2vh] skill-title">
          <div className="border-2 rounded-3xl px-[6vh] py-[5vh] rounded- gap-[2vh] md:w-fit h-fit flex flex-col items-center">
            <img src={node} alt="mongo" className="h-[8vh]" />
            <h1 className="text-[#097969] text-xl font-bold">80%</h1>
          </div>
          <h1 className="font-bold text-xl">Nodejs</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
