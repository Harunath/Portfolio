import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='absolute top-0 w-screen flex items-center justify-around sm:justify-center gap-0 gap-x-10 h-10 px-2 text-lg text-white font-bold bg-black bg-opacity-80'>
      <Link href={'/'}>Home</Link>
      <Link href={'/projects'}>Projects</Link>
      <Link href={'/contact'}>Contact me</Link>
    </div>
  )
}

export default NavBar