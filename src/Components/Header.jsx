import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ handleScroll }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = (para) => {
    handleScroll(para);
    setMenuToggle(false);
  }
  return (
    <div className='w-full h-16 flex justify-between items-center bg-slate-700 z-20 drop-shadow-lg border-b-[1px] border-slate-600'>
      <p className='text-slate-200 font-bold text-xl mx-4'>Akash Vaghela</p>
      <div className='hidden md:flex'>
        <p onClick={() => handleScroll("about")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>About</p>
        <p onClick={() => handleScroll("skills")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Skills</p>
        <p onClick={() => handleScroll("projects")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Projects</p>
        <p onClick={() => handleScroll("contact")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Contact</p>
      </div>
      <div className='relative md:hidden'>
        {
          menuToggle === true ?
            <AiOutlineClose onClick={() => setMenuToggle(false)} className='fill-slate-300 font-bold  rounded text-4xl p-2 m-2 bg-slate-500' />
            :
            <AiOutlineMenu onClick={() => setMenuToggle(true)} className='fill-slate-300 font-bold  rounded text-4xl p-2 m-2 bg-slate-500' />
        }
      </div>
      <div className={menuToggle === true ? "absolute top-16 left-0 w-full h-fit overflow-hidden" : "absolute top-[-300px] left-0 w-full h-fit overflow-hidden"}>
          <div className='h-fit ease-in duration-1000'>
            <div className={menuToggle === true ? "ease-in duration-[400ms]" : "translate-x-[100vw]"}>
              <p onClick={() => handleMenuClick("about")} className="text-center text-slate-300 p-4 font-bold hover:underline bg-slate-800 hover:bg-slate-700 border-slate-600">About</p>
            </div>
            <div className={menuToggle === true ? "ease-in duration-500" : "translate-x-[100vw]"}>
              <p onClick={() => handleMenuClick("skills")} className="text-center text-slate-300 p-4 font-bold hover:underline bg-slate-800 hover:bg-slate-700 border-slate-600">Skills</p>
            </div>
            <div className={menuToggle === true ? "ease-in duration-[600ms]" : "translate-x-[100vw]"}>
              <p onClick={() => handleMenuClick("projects")} className="text-center text-slate-300 p-4 font-bold hover:underline bg-slate-800 hover:bg-slate-700 border-slate-600">Projects</p>
            </div>
            <div className={menuToggle === true ? "ease-in duration-700" : "translate-x-[100vw]"}>
              <p onClick={() => handleMenuClick("contact")} className="text-center text-slate-300 p-4 font-bold hover:underline bg-slate-800 hover:bg-slate-700 border-slate-600">Contact</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export { Header }