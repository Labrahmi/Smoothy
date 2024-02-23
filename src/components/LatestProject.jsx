import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rhub from '../assets/R_Hub.png'

function LatestProjects() {
  return (
    <div className='text-left'>
      <h1 className='py-3 text-xl lg:text-3xl font-bold'>⌘ latest Project</h1>
      <div className=''>
        <div id='image-container' className='rounded-2xl overflow-hidden cursor-pointer border border-zinc-600 select-none hue-rotate-30'>
          <Link to="/r-hub"><img src={rhub} alt='imagex' className='flex grayscale opacity-9- hover:opacity-100 hover:grayscale-0 transition-all duration-500 ease-in-out' /></Link>
        </div>
        <div className='flex py-6'></div>
      </div>
    </div>
  )
}

export default LatestProjects
