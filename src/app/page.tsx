import Image from 'next/image'
import img from '../../public/static/images/mypic2.jpeg'
export default function Home() {
  return (
    <main className='h-full' >
      <div className='flex items-center justify-center h-full'>
        <p className='font-semibold text-3xl'>I am <span className=' font-bold text-5xl'>Harunath Eskuri.</span></p>
        <div className='rounded-xl'>
          <Image
            src={img}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        
      </div>
      <div className='h-full bg-yellow-200'>
      </div>
    </main>
  )
}
