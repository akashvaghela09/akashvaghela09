import React from 'react';
import { Card } from './Card';
import data from "..//db.json";

const Projects = () => {
    return (
        <div id="projects" className='w-4/5 flex flex-col py-4'>
        <p className='text-center text-3xl font-bold text-slate-300 m-4 underline decoration-6 decoration-blue-500'>Projects</p>
        <div className='flex flex-wrap justify-center'>
          {
            data.data.map((el, index) => {
              return <Card name={el.name} description={el.description} cover={el.cover} github={el.github} loom={el.loom} url={el.url} key={`key-${index}`} />
            })
          }
        </div>
      </div>
    )
}

export { Projects }