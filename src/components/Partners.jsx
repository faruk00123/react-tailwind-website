import React from 'react'
import logoc from "../assets/compani-logo/Batman-Logo-tumb-1.png"
import logod from "../assets/compani-logo/images (1).png"
import logoa from "../assets/compani-logo/Amazon-Logo-tumb.png"
import logof from "../assets/compani-logo/Nike-Logo-tumb.jpg"
import logog from "../assets/compani-logo/image_1532370530_PUupRl8PHyZvMCs2KRMuskJdYeyqW3IeacT72WYE.png"
import logoh from "../assets/compani-logo/NBC-logo-content.jpg"
import logoe from "../assets/compani-logo/images.png"


const Partners = () => {
    const compani = [
        {name: "logoa",img: logoa},
        {name: "logoc",img: logoc},
        {name: "logod",img: logod},
        {name: "logoe",img: logoe},
        {name: "logof",img: logof},
        {name: "logog",img: logog},
        {name: "logoh",img: logoh}
    ]
    const duplicate = [...compani, ...compani]
  return (
    <div className='mt-20 relative overflow-hidden bg-white py-12'>
        <div className='flex animate-marquee whitespace-nowrap overflow-x-hidden'>
            {
                duplicate.map((pat, index) => (
                    <img key={index} src={pat.img} alt={duplicate.name} className='h-10 text-black mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100'/>
                ))
            }

            {
                duplicate.map((pat, index) => (
                    <img key={`duplicate-${index}`} src={pat.img} alt={duplicate.name} className='text-black h-10 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100'/>
                ))
            }
        </div>
    </div>
  )
}

export default Partners