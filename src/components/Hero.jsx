import React from 'react'
import {motion} from 'framer-motion'
import { fadeInUp, nameTagAnimation, transition } from '../utils/animations'
import imge from '../assets/image/omor.png'

const Hero = () => {
  
  return (
    <div className='flex flex-col justify-center items-center min-h-[70vh] text-center'>
        {/* image and name animation */}
        <div className='relative '>
           <div className='relative mb-8'>
             {/* gradient effect */}
             <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl'></div>

             {/* static potfolio image */}
             <div className='relative'>
                <img src={imge} className='w-32 h-32 rounded-full relative z-10' alt="my profle image" />
             </div>

             {/* animated name tag */}
             <motion.div initial={nameTagAnimation.initial} animate={nameTagAnimation.animate} transition={nameTagAnimation.transition} className='absolute -top-0 -right-18 -rotate-6 z-30 bg-white text-black px-4 py-2 rounded-full shadow-lg'>
              <p className='text-sm font-medium'>Omar Faruk</p>
             </motion.div>
           </div>
        </div>


        {/* heading or title */}
        <motion.h1 variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay: 0.4}} className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl'>
          <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Building scalable</span><br />
          <span className='bg-gradient-to-r from-gray-200 via-g-300 to-gray-500 text-transparent bg-clip-text'> digital products and</span><br />
          <span className='bg-gradient-to-t from-gray-200 via-g-300 to-gray-500 text-transparent bg-clip-text'> experiences.</span>
        </motion.h1>

        {/* btn */}
        <motion.button variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay: 0.6}} className='mt-8 py-4 px-12 border border-gray-600 bg-[#1A1A1A] text-gray-600 hover:text-white transition-colors rounded-full cursor-pointer'>Latest Shots</motion.button>
    </div>
  )
}

export default Hero
