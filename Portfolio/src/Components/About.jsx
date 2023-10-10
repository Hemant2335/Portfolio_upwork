import React from "react";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full h-[90vh] mt-[2vh]">
      <div className="flex items-center abt-title gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiUser />
        <h2 className=" font-Jetbrains">About</h2>
      </div>
      <div className="w-full font-bold text-left text-3xl mt-[10vh] abt-title">
        <h1>Exceptional coding journeys begin</h1>
        <div className="md:flex items-center md:mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">with extraordinary</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Narratives.</h1>
        </div>
      </div>
      <div className="max-w-[80vh] text-gray-400 text-left mt-[3vh] abt-title">
        <p>
          Embarking on my journey as a freelance designer while pursuing my
          B.Tech degree at JUET, I'm eager to dive into the world of creative
          design. Although I'm new to freelancing and haven't accumulated years
          of professional experience. I'm excited to take on design challenges
          and collaborate with clients to bring their ideas to life. I believe
          in continuous learning.
        </p>
      </div>
    </div>
  );
};

export default About;
