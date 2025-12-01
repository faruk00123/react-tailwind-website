import { GoPencil } from 'react-icons/go'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaLaptopCode } from "react-icons/fa";

import {delay, motion} from 'framer-motion'
import { fadeInUp, transition } from '../utils/animations';

const cart = [
    {
    icon: <GoPencil className='text-4xl' />,
    title: "UX & UI",
    description: "Crafting intuitive and visually engaging user experiences for products."
    },

    {
    icon: <IoPhonePortraitOutline className='text-4xl' />,
    title: "Web & Mobile App",
    description: "Building high-performance web and mobile applications for modern users."
    },

   {
    icon: <MdOutlineDesignServices className='text-4xl' />,
    title: "Design & Creative",
    description: "Delivering unique, creative, and impactful design solutions across platforms."
   },

   {
    icon: <FaLaptopCode className='text-4xl' />,
    title: "Development",
    description: "Developing fast, secure, and scalable digital solutions for businesses."
   }
]

const Services = () => {
  return (
    <section className='py-20 px-4 md:px-6 bg-[#0D0D0D]'>
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay: 0.3}}  className='max-w-6xl mx-auto text-center mb-16'>
            <h2 className='text-2xl md:text-3xl mb-4'><span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Collaborate with brands and brands and agencies to</span><br /><span className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 text-transparent bg-clip-text   bg-gradient-to-t from-red-100 via-red-200 to-red-300 text-transparent bg-clip-text bg-gradient-to-l from-green-100 via-green-300 to-green-400 text-transparent bg-clip-text'> create impactful results.</span></h2>
        </motion.div>

        <div className='grid  md:px-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center'>
            {
                cart.map((ca, index) => {
                    return(
                        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{...transition.default, delay:index + 0.1}} key={index} className='py-15 px-6'>
                            <div className=' bg-white/20 flex hover:scale-110 transition-all duration-300 hover:cursor-pointer flex-col justify-center min-h-80 px-3 space-y-3 rounded-lg'>
                            <p className='text-cyan-500'>{ca.icon}</p>
                            <h3 className='bg-gradient-to-r text-2xl from-pink-300 via-pink-400 to-pink-600 text-transparent bg-clip-text'>{ca.title}</h3>
                            <p className='bg-gradient-to-r from-gray-200 via-green-300 to-blue-500 text-transparent bg-clip-text'>{ca.description}</p>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services