import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({handleScroll}) => {
    return (
      <div className='w-full h-16 flex justify-between items-center bg-slate-700 z-20 drop-shadow-lg border-b-[1px] border-slate-600'>
        <p className='text-slate-200 font-bold text-xl mx-4'>Akash Vaghela</p>
        <div className='hidden md:flex'>
        <p onClick={() => handleScroll("about")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>About</p>
          <p onClick={() => handleScroll("skills")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Skills</p>
          <p onClick={() => handleScroll("projects")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Projects</p>
          <p onClick={() => handleScroll("contact")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Contact</p>
        </div>
        <div className=' md:hidden'>
          <AiOutlineMenu className='fill-slate-300 font-bold  rounded text-4xl p-2 m-2 bg-slate-500'/>
        </div>
      </div>
    )
  }

export { Header }