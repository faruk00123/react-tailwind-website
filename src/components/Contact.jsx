import React from 'react'
import { LuHandshake } from 'react-icons/lu'
import {motion} from 'framer-motion'
import { fadeInUp, transition } from '../utils/animations'

const Contact = () => {
  return (
    <section className='py-32 px-4 md:px-6 bg-[#0F0F0F]/80'>
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay: 0.3}} className='max-w-6xl flex flex-col justify-center items-center space-y-5 mx-auto text-center'>
           <LuHandshake className='text-7xl text-teal-500 bg-gray-600 py-3 rounded-full'/>
           <div className='text-xl'><span className='bg-gradient-to-r from-teal-400 via-violet-400 to-orange-400 text-transparent bg-clip-text'>Tell me about your next</span><br /><span className='bg-gradient-to-r from-green-400 via-blue-400 to-pink-500 text-transparent bg-clip-text'> project</span></div>
           <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay: 0.5}} className='md:gap-6 mt-8 grid md:grid-cols-2 md:mx-auto'>
            <a href="mailto:omar013faruka@gmail.com" target='blank' className='bg-white mx-auto cursor-pointer py-2 px-6 rounded-full text-black hover:bg-black hover:text-white transition-all duration-300 text-lg'>Email Me</a>
            <a href="https://wa.me/01328086411" target='blank' className='bg-black mx-auto cursor-pointer mt-6 md:mt-0 py-2 px-6 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-lg'>WhatsApp</a>
           </motion.div>
        </motion.div>
    </section>
  )
}

export default Contact