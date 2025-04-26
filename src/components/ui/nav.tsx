'use client'
import React from 'react'
import Logo from './logo'
import DeskNav from './deskNav'
import { useMobile } from '@/lib/hooks/useMobile'

export default function Nav() {
  const isMobile = useMobile();
  return (
    <div className='fixed z-50 top-0 flex justify-center md:justify-between items-baseline w-full p-4 gap-6 bg-background shadow-md'>
        {/* {isMobile && <MobileNav />} */}
        <Logo />
        {!isMobile && <DeskNav />}
    </div>
  )
}


