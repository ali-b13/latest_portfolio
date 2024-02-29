import React from 'react'
import Title from './Title'
import DisplayProject from './DisplayProject'
import TwoItems from './TwoItems'

const projectInfo = () => {
    const info={title:"Context",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste voluptates harum ipsum, reiciendis perferendis possimus perspiciatis tempore repudiandae natus sit explicabo non maxime odio culpa quam soluta, debitis rerum?"}
  return (
    <div className='w-full flex flex-col my-12'>
        <Title title={info.title} description={info.description}/>

        <DisplayProject/>
         <Title title={info.title} description={info.description}/>
         <TwoItems/>
          <Title title={info.title} description={info.description}/>

        
    </div>
  )
}

export default projectInfo