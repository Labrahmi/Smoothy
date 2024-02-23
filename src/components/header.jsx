import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex justify-between py-2 text-lg select-none'>
      <Link className='' to="/">
        <span className='text-zinc-50'>1337</span>
        <span className='text-green-500 font-thin'>MWC</span>
      </Link>
      <a target='_blank' className='font-thin' href='https://1337.ma/'>1337.ma</a>
    </header>
  )
}

export default Header
