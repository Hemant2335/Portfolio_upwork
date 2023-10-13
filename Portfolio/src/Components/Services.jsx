import React from 'react'
import { FiBox } from 'react-icons/fi';
import { TiVideoOutline } from 'react-icons/ti';
import { BiCode } from 'react-icons/bi';
import { MdOutlineReportProblem } from 'react-icons/md';

const Services = () => {
  return (  
    <div className="w-full h-fit mt-[30vh] srv-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiBox />
        <h2 className=" font-Jetbrains">Services</h2>
      </div>

      <div className='mt-[10vh] flex flex-col gap-[10vh] '>
      <div className='border-2 hover:border-[#097969] srv-title transition-colors md:w-[50vw] h-fit text-left p-8 rounded-xl flex justify-between items-center'>
        <div>
        <h1 className='md:text-xl font-bold'>Video Editing</h1>
        <p className='text-sm'>I created digital videos using Blender and Filmora</p>
        </div>
        <TiVideoOutline className='text-3xl text-[#097969]'/>
      </div>
      <div className='border-2 hover:border-[#097969] srv-title transition-colors md:w-[50vw] h-fit text-left p-8 rounded-xl flex justify-between items-center'>
        <div>
        <h1 className='md:text-xl font-bold'>Development</h1>
        <p className='text-sm'>I Create Website and app using MERN</p>
        </div>
        <BiCode className='text-3xl text-[#097969]'/>
      </div>
      <div className='border-2 hover:border-[#097969] srv-title transition-colors md:w-[50vw] h-fit text-left p-8 rounded-xl flex justify-between items-center'>
        <div>
        <h1 className='md:text-xl font-bold'>Problem Solver</h1>
        <p className='text-sm'>I am also good at problem solving using DSA</p>
        </div>
        <MdOutlineReportProblem className='text-3xl text-[#097969]'/>
      </div>
      </div>

    </div>
  )
}

export default Services