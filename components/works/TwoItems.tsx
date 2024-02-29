import React from 'react'
import DisplayProject from './DisplayProject'

const TwoItems = () => {
  return (
    <div className='flex  flex-col md:flex-row gap-3'>
      <DisplayProject/>
      <DisplayProject/>
    </div>
  )
}

export default TwoItems