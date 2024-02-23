import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='text-left pt-32 flex flex-col gap-6 text-zinc-200 font-semibold'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl'><span className='text-3xl md:text-5xl lg:text-8xl text-zinc-50 hover:text-green-500 selection:text-zinc-600'>Welcome</span> to 1337 <i className=''>Web Dev Club</i></h1>
      <q className='text-3xl md:text-5xl lg:text-7xl text-zinc-200'>Talent Knows No Boundaries</q>
      <h1 className='text-3xl md:text-5xl lg:text-7xl'>Building Tomorrow's Innovators</h1>
      <p className='font-light '>Join us at the 1337 Med Web Development Club, where students collaborate on exciting web ventures. At 1337 Coding School, our Group Projects offer opportunities to work together in creating innovative websites and applications. Stay ahead in web development through expert-led workshops and talks, where you can explore new technologies and sharpen your skills. Engage in exhilarating hackathons and projects to showcase your talents and make a lasting impact in the tech community.</p>
      <div className='flex py-2'></div><div className='opacity-50'><hr /></div><div className='flex py-2'></div>
    </div>
  )
}

export default HeroSection
