import React from 'react'
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBriefcase } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {

  const scrollview = (id)=>{
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className='w-full h-[5vh] flex items-center justify-center '>
        <div className='bg-[#222222] w-fit h-fit shadow-3xl p-3 title rounded-3xl fixed z-10'>
            <nav>
                <ul className='flex items-center gap-[3vh] text-lg'>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-home' onClick={()=>scrollview("Home")}><FiHome/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-About' onClick={()=>scrollview("About")}><FiUser/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-Education' onClick={()=>scrollview("Education")}><FiBriefcase/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-services' onClick={()=>scrollview("Services")}><FiBox/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-skill' onClick={()=>scrollview("Skills")}><FiGrid/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-project' onClick={()=>scrollview("Portfolio")}><FiCompass/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform nav-msg' onClick={()=>scrollview("Contact")}><FiMessageSquare/></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar