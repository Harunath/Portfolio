import Image from 'next/image'
import img from '../../public/static/images/mypic2.jpeg'
export default function Home() {
  return (
    <main className='h-full w-full' >
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-start lg:justify-center h-full'>
        <div className='flex flex-col lg-flex-row justify-center lg:w-1/2 p-4'>
          <p className='font-semibold text-xl sm:text-2xl lg:text-5xl'>I am</p>
          <p className=' font-bold text-2xl sm:text-4xl lg:text-7xl'>Harunath Eskuri.</p>
          <p className=' text-sm lg:text-lg font-normal lg:font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda odio optio consectetur expedita corrupti saepe, maiores quibusdam, cupiditate eaque excepturi id consequatur? Soluta repellat, vitae fugiat illo quae beatae!</p>
        </div>
        <div className='flex justify-center lg:justify-start w-full lg:w-1/4 rounded-xl'>
          <Image
              src={img}
              width={200}
              height={200}
              className=' w-1/2 lg:w-[400px] max-w-[300px] lg:max-w-[400px] rounded-2xl border-spacing-10 border-8'
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
