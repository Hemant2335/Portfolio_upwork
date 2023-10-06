import React from 'react'
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full h-[90vh] mt-[2vh]">
      <div className="flex items-center gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiUser />
        <h2 className=" font-Jetbrains">About</h2>
      </div>
    </div>
  )
}

export default About