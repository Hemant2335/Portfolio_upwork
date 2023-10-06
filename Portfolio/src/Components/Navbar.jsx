import React from 'react'
import { FiHome } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiBriefcase } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import { FiGrid } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';
import { FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='w-full h-[5vh] flex items-center justify-center '>
        <div className='bg-[#222222] w-fit h-fit shadow-3xl p-3 rounded-3xl fixed'>
            <nav>
                <ul className='flex items-center gap-[3vh] text-lg'>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiHome/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiUser/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiBriefcase/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiBox/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiGrid/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiCompass/></li>
                    <li className='hover:text-[#097969] cursor-pointer transition-transform'><FiMessageSquare/></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar