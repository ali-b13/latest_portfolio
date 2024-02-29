import Image from 'next/image'
import React from 'react'
import dashboard from '@/public/uploads/dashDesk.jpeg'
import Animate from '../Animate'
const DisplayProject = () => {
  return (
    <Animate>

    <div className=' p-4 md:p-6 bg-gray-300/60   rounded-2xl'>
        
     <Image   className='rounded-2xl     border-2  h-full w-full object-contain  border-neutral-400/40 ' alt='work'  src={dashboard}/>
    </div>
    </Animate>
  )
}

export default DisplayProject