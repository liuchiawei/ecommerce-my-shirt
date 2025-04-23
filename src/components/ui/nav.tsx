import React from 'react'
import Logo from './logo'
import DeskNav from './deskNav'

export default function Nav() {
  return (
    <div className='flex justify-center md:justify-between items-baseline w-full h-full p-4 gap-6 shadow-md relative z-50'>
        <Logo />
        <DeskNav />
    </div>
  )
}


