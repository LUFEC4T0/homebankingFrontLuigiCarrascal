import React from 'react'
import { Anchor } from './Anchor'
import { LINKS_HEADER } from '../utils/links'

export const Header = () => {
  return (
    <div className='flex justify-around items-center w-screen h-20 bg-indigo-500 '>
      <div className=' w-[7rem] h-[6.7rem]'>
        <img src="../public/logo.png" alt="Logo" />
      </div>
      <div className=' flex gap-[3rem]'>
      {LINKS_HEADER.map((link, index) => (
        <Anchor
          key={index}
          href={link.href}
          content={link.name}
        />
      ))}
      </div>

    </div>
  )
}

export default Header