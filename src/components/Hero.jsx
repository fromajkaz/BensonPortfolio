import React from 'react'
import { FaDownload } from "react-icons/fa";
import benson from "../assets/benson.webp"

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold'>BENSON <br /> LANGFORD</h1>
        <div className='mt-8'>
          <a href="/Benson-Langford.pdf" download target='_blank' rel='noopener noreferrer' className='flex items-center rounded-xl bg-lime-300 p-2 px-3  font-medium  text-black hover:bg-lime-400'>
            <span>Resume.pdf</span>
            <FaDownload className='ml-2' />
          </a>
        </div>
        <div className='w-full'>
          <img src={benson} alt="" className='mt-8 h-96 w-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
