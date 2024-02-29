"use client"
import Image from 'next/image'
import React from 'react'
import imageSrc from '@/public/photo.jpg'
// import {getResumeOnClick} from '@/app/api/actions/getResume'
const TwoGridPhoto = () => {
  
  return (
    <div className='flex flex-col md:flex-row gap-5 min-h-[60vh] p-6 '>
        <div className=' bg-neutral-100/60 rounded-3xl  '>

      <Image className='h-[80vh] w-[100vw] md:w-[70vw] rounded-3xl ' src={imageSrc} alt='my photo '/>
        </div>
      <div className='bg-neutral-300/60 w-full md:w-[30%] rounded-3xl  items-center  justify-center p-2 flex flex-col'> 
       <span className='mb-4 text-3xl text-neutral-600 font-extrabold'>Ali Alamri </span>
       <span className='text-neutral-500'>Full stack developer</span>
       <a href='/cv.pdf' download  className='bg-green-400 text-white text-sm rounded-xl p-2 m-2'>Download my CV</a>
      </div>
    </div>
  )
}

export default TwoGridPhoto