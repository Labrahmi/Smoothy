import React, { useRef, useEffect } from 'react';
import rhub from '../assets/R_Hub.png'

function ClubValues() {
  return (
    <div>
      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='cursor-pointer bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
          <h1 className='text-3xl font-bold text-left text-zinc-300'>Group Projects</h1>
          <div className='text-left font-light'>Collaborate on exciting web ventures with us at the 1337 Web Development Club. Work together to create innovative websites and applications.</div>
        </div>
        <div className='cursor-pointer bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
          <h1 className='text-3xl font-bold text-left text-zinc-300'>Workshops</h1>
          <div className='text-left font-light'>Stay ahead in web development with expert-led workshops and talks at our club. Explore new technologies and hone your skills.</div>
        </div>
        <div className='cursor-pointer bg-black bg-opacity-15 hover:bg-opacity-30 text-slate-100 flex gap-2 flex-col p-6 py-8 rounded-xl border border-zinc-600 transition-all ease-in-out duration-150'>
          <h1 className='text-3xl font-bold text-left text-zinc-300'>Hackathons</h1>
          <div className='text-left font-light'>Join our exhilarating hackathons and projects. Showcase your talents and make an impact in the tech community.</div>
        </div>
      </div>
      <div className='flex py-4'></div><div className='opacity-50'><hr /></div><div className='flex py-4'></div>
    </div>
  )
}

export default ClubValues
