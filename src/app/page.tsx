"use client";
import Image from 'next/image'
import img from '../../public/static/images/mypic2.jpeg'
import Project from '@/app/components/Project';
import { useState } from 'react';
export default function Home() {
  const [extend1,setExtend1] = useState(false)
  return (
    <main className='h-full w-full' >
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-start sm:justify-center h-full'>
        <div className='flex flex-col lg-flex-row justify-center w-1/2 p-4'>
          <p className='font-semibold text-xl sm:text-2xl lg:text-5xl'>I am</p>
          <p className=' font-bold text-2xl sm:text-4xl lg:text-7xl'>Harunath Eskuri.</p>
          <p className=' text-sm lg:text-lg font-normal lg:font-medium mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda odio optio consectetur expedita corrupti saepe, maiores quibusdam, cupiditate eaque excepturi id consequatur? Soluta repellat, vitae fugiat illo quae beatae!</p>
        </div>
        <div className='flex justify-center lg:justify-start w-full lg:w-1/4 rounded-xl'>
          <Image
              src={img}
              width={200}
              height={200}
              className='w-1/2 lg:w-[400px] max-w-[300px] lg:max-w-[400px] rounded-2xl border-spacing-10 border-8'
              alt="Picture of the author"
            />
        </div>
        
      </div>
      <div className='h-screen p-10'>
        <div className='mt-4 w-full'>
          <p className=' text-5xl font-bold'>Projects</p>
          <div className=' flex flex-col lg:flex-row p-4 gap-4 mt-6 bg-blue-100 rounded-2xl'>
            <Image height={200} width={200} src={img} alt="Project 1"/>
            <div className='my-auto'>
              <p className='text-xl font-semibold'>Project title</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam asperiores quae dolorem nobis distinctio iste assumenda, repellendus quaerat dolor, ab maxime eligendi, accusamus molestiae quo tempora quibusdam quasi quod.</p>
            </div>
          </div>
          <div className=' flex flex-col-reverse lg:flex-row p-4 gap-4 mt-5 bg-blue-100 rounded-2xl'>
            <div className='my-auto'>
              <p className='text-xl font-semibold'>Project title</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nam asperiores quae dolorem nobis distinctio iste assumenda, repellendus quaerat dolor, ab maxime eligendi, accusamus molestiae quo tempora quibusdam quasi quod.</p>
            </div>
            <Image height={200} width={200} src={img} alt="Project 1"/>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between mt-5'>
            {/* <Project/> */}
          </div>
        </div>
      </div>
      <div className='h-screen p-10'>
        
      </div>
    </main>
  )
}
