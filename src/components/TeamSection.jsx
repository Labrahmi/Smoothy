import React, { useRef, useEffect } from 'react';

function TeamSection() {
  return (
    <div>
      <div className='text-left'>
        <h1 className='py-4 text-xl lg:text-3xl font-bold'>⌘ Meet The Team</h1>
        <ul className='flex space-x-2 select-none'>
          <a href='https://profile.intra.42.fr/users/ylabrahm' className='flex hover:underline'>
            <div>ylabrahm</div>
            <div className='flex fill-white -rotate-45'><box-icon name='right-arrow-alt'></box-icon></div>
          </a>
          <span className='divide-x-2'></span>
          <a href='https://profile.intra.42.fr/users/amahdiou' className='flex hover:underline'>
            <div>drokee</div>
            <div className='flex fill-white -rotate-45'><box-icon name='right-arrow-alt'></box-icon></div>
          </a>
          <span className='divide-x-2'></span>
          <a href='https://profile.intra.42.fr/users/sbellafr' className='flex hover:underline'>
            <div>sbellafr</div>
            <div className='flex fill-white -rotate-45'><box-icon name='right-arrow-alt'></box-icon></div>
          </a>
          <span className='divide-x-2'></span>
        </ul>
      </div>
      <div className='flex py-4'></div><div className='opacity-50'><hr /></div><div className='flex py-4'></div>
    </div>
  )
}

export default TeamSection
