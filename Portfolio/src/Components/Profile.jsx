import React from 'react'
import profile from '../assets/profile.jpg'
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';

function Profile() {
  return (
    <div className='md:w-[60vh] md:h-[85vh] md:mt-0 mt-[10vh] md:top-[10vh] p-4 shadow-3xl rounded-lg bg-[#222222] md:fixed right-[10vh] z-10 profile'>
        
        {/* Name and Title */}
        <div className='md:flex text-left justify-between items-center'>
            <h1 className=' font-Jetbrains font-bold text-2xl'>DO_ONE</h1>
            <h2 className=' font-Jetbrains'> Full_stack_Developer</h2>
        </div>
        
        {/* Profile Image */}
        <div className="flex w-full max-h-[50vh] mt-[2vh] p-4 opacity-80">
          <img
            src={profile}
            alt="profile"
            className="max-h-[100vh] w-full object-cover object-top rounded-xl"
          />
        </div>

        {/* About */}
        <div className='mt-[2vh]'>
          <h2 className=' font-Jetbrains font-bold md:text-lg'>Console.log("Nishant_Kumar")</h2>
          <h2 className=' font-Jetbrains font-semibold'>function Current("Btech Student JUET")</h2>
        </div>

        {/* Social Media */}

        <div className='mt-[2vh] text-sm text-gray-400 flex gap-[2vh] justify-center'>
          <div className='border-2 cursor-pointer hover:text-[#097969] hover:border-[#097969] border-gray-400 p-2 rounded-3xl'><a href="https://github.com/Hemant2335" target='_blank'><FiGithub/></a></div>
          <div className='border-2 cursor-pointer hover:text-[#097969] hover:border-[#097969] border-gray-400 p-2 rounded-3xl'><a href="https://www.linkedin.com/in/nishant-kumar-b198b822b/" target='_blank'><FiLinkedin/></a></div>
          <div className='border-2 cursor-pointer hover:text-[#097969] hover:border-[#097969] border-gray-400 p-2 rounded-3xl'><a href="https://www.instagram.com/_nishant1_kumar/" target='_black'><FiInstagram/></a></div>
        </div>

        {/* Hire upwork */}
        <div className='flex w-full justify-between px-[2vh]'>
        <button className='w-full flex items-center hover:scale-105 transition-transform hover:border-2 gap-[1vh] justify-center font-bold font-Jetbrains mt-[3vh] p-2 rounded-lg bg-[#097969]'>
          <FiMessageSquare/>
          <a href="https://www.upwork.com/freelancers/~01db9c69e1826a0f56" target='_blank'>Hire_Me</a>
        </button>
        </div>


        
    </div>
  )
}

export default Profile