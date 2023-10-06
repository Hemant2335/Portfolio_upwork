import React from 'react'
import profile from '../assets/profile.jpg'
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';

function Profile() {
  return (
    <div className='md:w-[60vh] md:h-[85vh] top-[10yuhjm,vh] p-4 shadow-3xl rounded-md bg-[#222222] fixed right-[10vh]'>
        
        {/* Name and Title */}
        <div className='flex justify-between items-center'>
            <h1 className=' font-Jetbrains font-bold text-2xl'>DO_ONE</h1>
            <h2 className=' font-Jetbrains'> Full_stack_Developer</h2>
        </div>
        
        {/* Profile Image */}
        <div className="flex w-full max-h-[50vh] mt-[2vh]">
          <img
            src={profile}
            alt="profile"
            className="max-h-[100vh] w-full object-cover object-top rounded-xl"
          />
        </div>

        {/* About */}
        <div className='mt-[2vh]'>
          <h2 className=' font-Jetbrains font-bold text-lg'>Console.log("Nishant_Kumar")</h2>
          <h2 className=' font-Jetbrains font-semibold'>function Current("Btech Student JUET")</h2>
        </div>

        {/* Social Media */}

        <div className='mt-[2vh] text-sm text-gray-400 flex gap-[2vh] justify-center'>
          <div className='border-2 border-gray-400 p-2 rounded-3xl'><FiGithub/></div>
          <div className='border-2 border-gray-400 p-2 rounded-3xl'><FiLinkedin/></div>
          <div className='border-2 border-gray-400 p-2 rounded-3xl'><FiInstagram/></div>
        </div>

        {/* Hire upwork */}
        <div className='flex w-full justify-between px-[2vh]'>
        <button className='w-full flex items-center gap-[1vh] justify-center font-bold font-Jetbrains mt-[3vh] p-2 rounded-lg bg-[#097969]'>
          <FiMessageSquare/>
          Hire_Me
        </button>
        </div>


        
    </div>
  )
}

export default Profile