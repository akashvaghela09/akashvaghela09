import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const About = ({ handleRedirectPage }) => {

    const [buttonHover, setButtonHover] = useState(false);
    const resumelink = "https://docs.google.com/document/d/1JuXJvV17xwZEcJQ_R05WrC4lDvPAx6salb_XUETL02c/edit?usp=sharing"

    const handleConnectHover = (para) => {
        setButtonHover(para);
    }

    return (
        <div id="about" className='w-full md:w-4/5 h-fit md:min-h-screen flex flex-col items-center md:items-start justify-around'>
            <div className='p-5 mt-4 md:mt-0 w-fit md:w-4/5'>
                <p className='text-3xl md:text-6xl font-bold text-slate-300 m-2 mx-4'>Hi,</p>
                <p className='text-3xl md:text-6xl font-bold text-slate-300 m-4'>I'm Akash Vaghela,</p>
                <p className='text-3xl md:text-6xl font-bold text-indigo-300 m-2 mx-4 drop-shadow-lg'>Blockchain Developer.</p>
            </div>
            <div className=' w-full flex md:mx-2 flex-col md:flex-row'>
                <p className='p-10 text-sm md:text-lg md:m-4 text-slate-300 w-full md:w-3/4'>I'm a <span className='underline decoration-blue-500'>Blockchain enthusiast</span> and passionate Solidity <span className='underline decoration-blue-500'>Smart contract developer</span> with a problem-solving mindset. Has a 2+ years of experience in developing full-stack web apps. proficient in working with various tool sets such as HardHat, Truffle, Ganache.</p>
                <div className='w-full md:w-1/4 flex md:flex-col justify-center items-center gap-4'>
                    <label onClick={() => handleRedirectPage(resumelink)} className='w-2/5 md:w-40 h-12 bg-indigo-600 md:mb-4 md:text-xl text-slate-300 flex justify-center items-center rounded cursor-pointer'>Resume</label>
                    <div className='relative overflow-hidden w-2/5 md:w-40 h-12 rounded' onMouseEnter={() => handleConnectHover(true)} onMouseLeave={() => handleConnectHover(false)}>
                        <div className='w-full h-12 bg-slate-300 absolute top-0 left-0 flex justify-around items-center rounded'>
                            <FaGithub onClick={() => handleRedirectPage("https://github.com/akashvaghela09")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-2xl md:text-3xl m-1 cursor-pointer' />
                            <FaLinkedin onClick={() => handleRedirectPage("https://linkedin.com/in/akashvaghela09")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-2xl md:text-3xl m-1 cursor-pointer' />
                            <FaDiscord onClick={() => handleRedirectPage("https://discordapp.com/users/akashvaghela09#4543")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-2xl md:text-3xl m-1 cursor-pointer' />
                        </div>
                        <p className={buttonHover === true ? 'text-slate-300 md:text-xl bg-indigo-600 z-10 absolute top-0 left-0 w-full h-12 flex justify-center items-center rounded cursor-pointer ease-in-out duration-700 translate-x-52 md:translate-x-40' : 'text-slate-300 md:text-xl bg-indigo-600 z-10 absolute top-0 left-0 w-full h-12 flex justify-center items-center rounded cursor-pointer ease-in-out duration-1000'}>Let's Connect</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { About }