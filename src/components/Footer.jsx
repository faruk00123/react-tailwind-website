import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, transition } from '../utils/animations'

const Footer = () => {
  return (
    <footer className='py-8 px-4 md:px-6 border-t border-gray-800/80 bg-black'>
        <motion.div variants={fadeIn} initial="initial" animate="animate" transition={{delay: 0.6}} className='grid justify-center space-y-6 md:space-y-0 md:flex md:justify-between items-center'>
            <p className='flex justify-center items-center bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text'>&copy; 2025 Web developer & Programer</p>

            <div className='space-x-4 flex justify-center items-center'>
                <a href="https://github.com/faruk00123?tab=repositories" target='blank' className='hover:text-white text-white/75 transition-colors'>Github <span>/</span></a>
                <a href="https://www.facebook.com/md.omor.faruk.707460" target='blank' className='hover:text-white text-white/75 transition-colors'>Facebook <span>/</span></a>
                <a href="#" className='hover:text-white text-white/75 transition-colors'>Instagram</a>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer