import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className='w-4/5 flex flex-col pt-8 py-4'>
        <p className='text-center text-3xl font-bold text-slate-300 m-4 underline decoration-6 decoration-blue-500'>Skills</p>
        <div className='flex flex-col justify-center'>
          <div className='w-full my-4'>
            <p className='text-xl font-bold text-slate-300 m-4 text-center'>Tech Stack</p>
            <div className='flex items-center justify-center flex-wrap'>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/js.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>JavScript</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/react.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>React.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/redux.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Redux</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/tailwind.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Tailwind CSS</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/solidity.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Solidity</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/ethers.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Ethers.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/node.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Node.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/mongodb.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>MongoDB</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/express.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Express.js</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/vercel.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Vercel</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/heroku.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Heroku</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/aws.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>AWS S3</p>
              </label>
            </div>
          </div>

          <div className='w-full my-4'>
            <p className='text-xl font-bold text-slate-300 m-4 text-center'>Tools</p>
            <div className='flex items-center justify-center flex-wrap'>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/hardhat.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>HardHat</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/truffle.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Truffle</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/ganache.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Ganache</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/remix.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Remix IDE</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/metamask.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>MetaMask</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/git.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Git</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/github.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>GitHub</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/npm.png' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>NPM</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/notion.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>Notion</p>
              </label>
              <label className='flex bg-slate-600 items-center w-32 md:w-36 m-1 md:m-2 p-1 rounded'>
                <img src='./icons/code.jpg' className='rounded w-8 h-8 m-1' alt="javascript" />
                <p className='text-sm text-slate-300 ml-2'>VS Code</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
}

export { Skills }