import React from 'react'
import { FiCompass } from 'react-icons/fi';

const Portfolio = () => {
  return (
    <div className="w-full h-[100vh] mt-[20vh] skill-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiCompass />
        <h2 className=" font-Jetbrains">Portfolio</h2>
      </div>
      <div className="w-full font-bold text-left text-3xl mt-[10vh] title skill-title">
        <div className="flex items-center mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">My</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Projects</h1>
        </div>
      </div>
    </div>
  )
}

export default Portfolio