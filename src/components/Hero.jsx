import React from 'react'
import {motion} from 'framer-motion'
import { fadeInUp, nameTagAnimation, transition } from '../utils/animations'

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
                <img src="https://scontent.fdac179-1.fna.fbcdn.net/v/t39.30808-6/538770017_1106445471631371_7190799827787978338_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEUY-PbJ0hmN-9EpPasP1ahkx1pAeaw60GTHWkB5rDrQX8yTxQPvj7f6rJ1ocKgELRTa3R0iaMUUctajpBVz8q4&_nc_ohc=FZzhIiQiOxAQ7kNvwHgd65A&_nc_oc=Admm-3kbzi-toOyDEjFqSj5l7J30-puCunCiGUgLrPqduHJCJtNuOdbWb7-2-1UL9LE&_nc_zt=23&_nc_ht=scontent.fdac179-1.fna&_nc_gid=BZQEA6LxpKxsSwzVag8Fug&oh=00_AfjhgmaWAKZ89mML5Yg68Jn5O9QV9deDkJiBuNkhXUGTCg&oe=692FA42C" className='w-32 h-32 rounded-full relative z-10' alt="my profle image" />
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