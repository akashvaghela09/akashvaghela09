import './App.css';
import React, { useState } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import data from "./db.json";
import { Card } from './Components/Card';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function App() {

  const [buttonHover, setButtonHover] = useState(false);

  const handleConnectHover = (para) => {
    setButtonHover(para);
  }

  const handleScroll = (para) => {
    const node = document.getElementById(para)
    scrollIntoView(node, {
      behavior: 'smooth',
      block: 'start',
      // scrollMode: 'if-needed',
    })
  }

  const handleRedirectPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

  return (
    <div className="min-h-screen bg-slate-900 h-fit flex flex-col items-center">
      <div className='w-full sticky top-0 let-0 flex justify-between items-center bg-slate-700 z-20 drop-shadow-lg border-b-[1px] border-slate-600'>
        <p className='text-indigo-300 font-bold text-xl mx-4'>Akash Vaghela</p>
        <div className='flex'>
          <p onClick={() => handleScroll("skills")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Skills</p>
          <p onClick={() => handleScroll("projects")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Projects</p>
          <p onClick={() => handleScroll("contact")} className='text-slate-300 mx-8 font-semibold p-4 cursor-pointer hover:text-indigo-400 ease-in duration-150'>Contact</p>
        </div>
      </div>
      <div className='p-10 w-4/5 h-screen flex flex-col justify-around'>
        <div className=''>
          <p className='text-6xl font-bold text-slate-300 m-2 mx-4'>Hi,</p>
          <p className='text-6xl font-bold text-slate-300 m-4'>I'm Akash Vaghela,</p>
          <p className='text-6xl font-bold text-indigo-300 m-2 mx-4 drop-shadow-lg'>Blockchain Developer.</p>
        </div>
        <div className='flex mx-2'>
          <p className='text-lg m-4 text-slate-300 w-3/4'>I'm a <span className='underline decoration-blue-500'>Blockchain enthusiast</span> and passionate Solidity <span className='underline decoration-blue-500'>Smart contract developer</span> with a problem-solving mindset. Has a 2+ years of experience in developing full-stack web apps. proficient in working with various tool sets such as HardHat, Truffle, Ganache.</p>
          <div className='w-1/4 flex flex-col justify-center items-center'>
            <label className='w-40 h-12 bg-indigo-600 mb-4 text-xl text-slate-300 flex justify-center items-center rounded cursor-pointer'>Resume</label>
            <div className='relative overflow-hidden w-40 h-12 rounded' onMouseEnter={() => handleConnectHover(true)} onMouseLeave={() => handleConnectHover(false)}>
              <div className='w-40 h-12 bg-slate-300 absolute top-0 left-0 flex justify-around items-center rounded'>
                <FaGithub onClick={() => handleRedirectPage("https://github.com/akashvaghela09")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-3xl m-1 cursor-pointer'/>
                <FaLinkedin onClick={() => handleRedirectPage("https://linkedin.com/in/akashvaghela09")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-3xl m-1 cursor-pointer'/>
                <FaDiscord onClick={() => handleRedirectPage("https://discordapp.com/users/akashvaghela09#4543")} className='fill-slate-900 hover:fill-indigo-600 ease-in duration-200 text-3xl m-1 cursor-pointer'/>
              </div>
              <p className={buttonHover === true ? 'text-slate-300 text-xl bg-indigo-600 z-10 absolute top-0 left-0 w-40 h-12 flex justify-center items-center rounded cursor-pointer ease-in-out duration-700 translate-x-40' : 'text-slate-300 text-xl bg-indigo-600 z-10 absolute top-0 left-0 w-40 h-12 flex justify-center items-center rounded cursor-pointer ease-in-out duration-1000'}>Let's Connect</p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className='w-4/5 flex flex-col py-14'>
        <p className='text-center text-3xl font-bold text-slate-300 m-4 underline decoration-6 decoration-blue-500'>Skills</p>
        <div className='flex flex-col justify-center'>
          <div className='w-full my-4'>
            <p className='text-xl font-bold text-slate-300 m-4'>Tech Stack</p>
            <div className='flex items-center flex-wrap'>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/js.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>JavScript</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/react.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>React.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/redux.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Redux</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/tailwind.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Tailwind CSS</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/solidity.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Solidity</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/ethers.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Ethers.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/node.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Node.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/mongodb.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>MongoDB</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/express.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Express.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/vercel.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Vercel</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/heroku.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Heroku</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/aws.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>AWS S3</p>
              </label>
            </div>
          </div>

          <div className='w-full my-4'>
            <p className='text-xl font-bold text-slate-300 m-4'>Tools</p>
            <div className='flex items-center flex-wrap'>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/hardhat.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>HardHat</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/truffle.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Truffle</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/ganache.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Ganache</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/remix.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Remix IDE</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/metamask.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>MetaMask</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/git.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Git</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/github.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>GitHub</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/npm.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>NPM</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/notion.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Notion</p>
              </label>
              <label className='flex bg-slate-600 items-center w-36 m-2 p-1 rounded'>
                <img src='./icons/code.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>VS Code</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className='w-4/5 flex flex-col py-14'>
        <p className='text-center text-3xl font-bold text-slate-300 m-4 underline decoration-6 decoration-blue-500'>Projects</p>
        <div className='flex flex-wrap justify-center'>
          {
            data.data.map((el, index) => {
              return <Card name={el.name} description={el.description} cover={el.cover} github={el.github} loom={el.loom} url={el.url} key={`key-${index}`} />
            })
          }
        </div>
      </div>
      <div id="contact" className='w-4/5 flex flex-col py-14 mb-28'>
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
    </div>
  );
}

export default App;
