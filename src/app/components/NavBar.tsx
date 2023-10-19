import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='absolute top-0 w-full flex items-center gap-x-10 h-10 px-2 text-lg font-bold bg-black bg-opacity-10'>
      <div className='shrink grow'/>
      <Link className='px-4' href={'/'}>Home</Link>
      <Link className='px-4' href={'/projects'}>Projects</Link>
      <Link className='px-4' href={'/contact'}>Contact me</Link>
      <div className='shrink grow'/>
    </div>
  )
}

export default NavBar