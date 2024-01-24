"use client"

import React from 'react'
import { useResponsive } from '@/zustand-store/use-responsive';

const NavButton = () => {
    const {  onOpen } = useResponsive();
  return (
    <button
    onClick={() => onOpen()}
    className="rounded-md bg-white  py-2 text-sm font-medium
   transition hover:bg-slate-100 hover:text-slate-900  sm:hidden   "
  >
    SHOP
  </button>
  )
}

export default NavButton

