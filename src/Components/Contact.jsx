import React from 'react';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Contact = ({ handleRedirectPage }) => {
    return (
        <div id="contact" className='w-4/5 flex flex-col py-4 mb-28'>
        <p className='text-center text-3xl font-bold text-slate-300 m-4 underline decoration-6 decoration-blue-500'>Contact</p>
        <div className='flex justify-center m-4'>
          <label onClick={() => handleRedirectPage("https://github.com/akashvaghela09")} className='cursor-pointer p-4 mx-3 rounded bg-slate-600 hover:bg-indigo-600 ease-in duration-200'>
            <FaGithub className='fill-slate-300 text-4xl' />
          </label>
          <label onClick={() => handleRedirectPage("https://linkedin.com/in/akashvaghela09")} className='cursor-pointer p-4 mx-3 rounded bg-slate-600 hover:bg-indigo-600 ease-in duration-200'>
            <FaLinkedin className='fill-slate-300 text-4xl' />
          </label>
          <label onClick={() => handleRedirectPage("https://discordapp.com/users/akashvaghela09#4543")} className='cursor-pointer p-4 mx-3 rounded bg-slate-600 hover:bg-indigo-600 ease-in duration-200'>
            <FaDiscord className='fill-slate-300 text-4xl' />
          </label>
          <label onClick={() => handleRedirectPage("mailto:akashvaghela09@gmail.com")} className='cursor-pointer p-4 mx-3 rounded bg-slate-600 hover:bg-indigo-600 ease-in duration-200'>
            <SiGmail className='fill-slate-300 text-4xl' />
          </label>
          <label onClick={() => handleRedirectPage("https://twitter.com/akashvaghela09")} className='cursor-pointer p-4 mx-3 rounded bg-slate-600 hover:bg-indigo-600 ease-in duration-200'>
            <FaTwitter className='fill-slate-300 text-4xl' />
          </label>
        </div>
      </div>
    )
}
export { Contact }