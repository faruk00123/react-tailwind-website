import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='flex justify-between items-center p-6 relative border-b border-gray-600'>
        <div className='flex items-center gap-1.5'><span className='p-2 bg-white/10 rounded-full'><CiMail className='text-white'/></span> <span className={`${isMenuOpen ? "hidden":"block"} md:block`}>omar013faruka@gmail.com</span></div>
        
        {/* mobile menu button */}
        <div className='md:hidden z-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5":""}`}></div>
            <div className={`w-6 h-0.5 my-1.5 bg-gray-300 transition-all ${isMenuOpen ? "opacity-0":""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5":""}`}></div>
        </div>
        
        {/* desktop navigation */}
        <div className='hidden md:block'>
          <nav>
            <ul className='flex space-x-6'>
                <li><a href="https://github.com/faruk00123?tab=repositories" target='blank' className='text-gray-300 hover:text-white'>Github <span className='ml-1.5 text-gray-300'>/</span></a></li>
                <li><a href="https://www.facebook.com/md.omor.faruk.707460" target='blank' className='text-gray-300 hover:text-white'>Facebook <span className='ml-1.5 text-gray-300'>/</span></a></li>
                <li><a href="3" className='text-gray-300 hover:text-white'>Instagram</a></li>
            </ul>
          </nav>
        </div>

        {/* mobile navigation menu */}
        <nav className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen? "translate-x-0":"translate-x-full"} flex items-center justify-center z-40`}>
          <ul className='flex flex-col space-y-8 text-center'>
            <li>
                <a href="https://github.com/faruk00123?tab=repositories" target='blank' onClick={() => setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl'>Github</a>
            </li>

            <li>
                <a href="https://www.facebook.com/md.omor.faruk.707460" target='blank' onClick={() => setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl'>Facebook</a>
            </li>

            <li>
                <a href="#" onClick={() => setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl'>Instagram</a>
            </li>
          </ul>
        </nav>

        {/* overlay */}
        {
            isMenuOpen && (
                <div className='fixed md:hidden inset-0 bg-black/50 z-30' onClick={() => setIsMenuOpen(false)}></div>
            )
        }
    </header>
  )
}

export default Navbar