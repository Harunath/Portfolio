import Image from 'next/image'
import img from '../../public/static/images/mypic2.jpeg'
export default function Home() {
  return (
    <main className='h-full w-full' >
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-center h-full'>
        <div className='flex flex-col lg-flex-row'>
          <p className='font-semibold text-xl lg:text-3xl'>I am</p>
          <p className=' font-bold text-2xl lg:text-5xl'>Harunath Eskuri.</p>
        </div>
        <div className='rounded-xl'>
          <Image
            src={img}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        
      </div>
      <div className='h-screen bg-yellow-200'>
        zfyfgakhgslf
      </div>
    </main>
  )
}
