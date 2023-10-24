"use client";
import img from '../../../public/static/images/mypic2.jpeg'
import React,{useState} from 'react'
import Image from 'next/image';

function Project() {
  const [extend1,setExtend1] = useState(false)
  return (
    <div className='flex flex-col lg:flex-row w-full lg:w-1/4 p-4 bg-blue-100 rounded-2xl'>
      <div className='flex flex-col gap-4 items-center w-full lg:w-1/2'>
        <Image height={200} width={200} src={img} alt="Project 1" className='mx-auto rounded-2xl'/>
      </div>
      <div className='w-full lg:w-1/2'>
        <p className='w-fit mx-auto text-xl font-semibold'>Project title</p>
        <p className={extend1 ? 'h-44' : 'h-20 overflow-hidden' + ' w-full transition duration-500'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis, ad aut, ex repellat delectus eum corporis hic praesentium, blanditiis ipsum nesciunt. Nam molestiae nisi fugit necessitatibus praesentium suscipit.</p>
        <button onClick={()=> setExtend1(!extend1)} className='text-xs mx-auto'>View more</button>
      </div>
    </div>
  )
}

export default Project