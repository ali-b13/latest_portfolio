import React from 'react'
import DisplayProject from './DisplayProject'
import Description from './Description'
import Animate from '../Animate'

const WorkComponent = ({number}:any) => {

  return (
    <Animate>

    <div  className='relative h-fit w-full mb-6 '>
        <p id='project' className=' absolute -top-64 left-10   text-[18rem] font-extrabold text-slate-600/45 -z-40'>0{number}</p>
        <DisplayProject/>
        <Description/>
        
    </div>
    </Animate>
  )
}

export default WorkComponent