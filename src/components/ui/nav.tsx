'use client'
import React, { useState, useEffect } from 'react'
import Logo from './logo'
import DeskNav from './deskNav'
import MobileNav from './MobileNav'
import { useMobile } from '@/lib/hooks/useMobile'

export default function Nav() {
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed z-50 top-0 flex justify-center md:justify-between items-baseline w-full p-4 gap-6 bg-background shadow-md transition-all duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
        {isMobile && <MobileNav />}
        <Logo />
        {!isMobile && <DeskNav />}
    </div>
  )
}


