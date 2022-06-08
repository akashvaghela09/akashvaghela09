import React from 'react'
import { BsGithub, BsGlobe } from "react-icons/bs";
import { SiLoom } from "react-icons/si";

const Card = ({ name, description, cover, github, url, loom }) => {

    const handleRedirectPage = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className='bg-slate-500 w-96 m-4 rounded-lg'>
            <img className='w-full rounded-t' src={cover} alt="cover" />
            <div>
                <p className='text-slate-200 text-xl font-bold mx-4 my-2'>{name}</p>
                <p className='text-slate-300 mx-4 my-2'>{description}</p>
                <div className='flex w-full'>
                    <div className='cursor-pointer p-2 bg-slate-700 w-full hover:bg-indigo-600 ease-in duration-200 flex flex-col items-center rounded-bl-lg' onClick={() => handleRedirectPage(github)}>
                        <BsGithub className='fill-slate-200 text-xl'/>
                        <p className='text-sm text-slate-200'>Code</p>
                    </div>
                    <div className='cursor-pointer p-2 bg-slate-700 w-full hover:bg-indigo-600 ease-in duration-200 flex flex-col items-center' onClick={() => handleRedirectPage(url)}>
                        <BsGlobe className='fill-slate-200 text-xl'/>
                        <p className='text-sm text-slate-200'>Preview</p>
                    </div>
                    <div className='cursor-pointer p-2 bg-slate-700 w-full hover:bg-indigo-600 ease-in duration-200 flex flex-col items-center rounded-br-lg' onClick={() => handleRedirectPage(loom)}>
                        <SiLoom className='fill-slate-200 text-xl'/>
                        <p className='text-sm text-slate-200'>Loom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Card }