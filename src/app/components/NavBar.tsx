import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='absolute top-0 w-screen flex items-center justify-around sm:justify-normal gap-0 lg:gap-x-10 h-10 px-2 text-lg font-bold bg-black bg-opacity-10'>
      <div className='shrink grow hidden sm:block'/>
      <Link href={'/'}>Home</Link>
      <Link href={'/projects'}>Projects</Link>
      <Link href={'/contact'}>Contact me</Link>
      <div className='shrink grow  hidden sm:block'/>
    </div>
  )
}

export default NavBar