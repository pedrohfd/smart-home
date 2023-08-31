'use client'

import { useState } from 'react'
import { Hamburger } from '../Hamburger'
import { Menu } from '../Menu'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <header className='absolute flex items-center justify-between w-full pl-6 pr-4 tracking-wider pt-7'>
      <h1 className='text-3xl font-bold text-zinc-50'>smartHome</h1>

      <Hamburger onClick={handleOpenMenu} />

      <Menu isOpen={isOpen} />
    </header>
  )
}
