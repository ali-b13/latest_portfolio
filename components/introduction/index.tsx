"use client";
import MoveIcon from "../MoveIcon"
import Animate from '../Animate'
const Introduction = () => {
  
  return (
          <Animate>
    <div className="flex  h-[55rem] mb-24 p-6  md:p-14  transition-opacity duration-1000 ease-in-out  transform translate-y-5 ">
        <div className="hidden md:flex m-4  flex-col items-start w-full   font-extrabold reveal">

       <p className="w-[65%] text-gray-900 text-7xl p-2 shadow-sm  ">Hello — I am Ali.</p>
       <p className="w-[60%] text-gray-900 text-7xl  pb-6">A Full Stack Developer.</p>
       <p className="w-[60%] text-neutral-500 text-lg p-2  ">Experienced Full Stack Developer proficient
         in both front-end and back-end technologies crafting
          seamless use experiences and robust functionality</p>
    </div>

      <div className=" flex md:hidden flex-col items-start w-full  font-extrabold  ">
       <p className=" text-gray-900 text-5xl p-2 shadow-sm w-full ">Hello - I&apos;m Ali.</p>
       <p className=" text-gray-900 text-5xl p-2 pb-6 w-full">A Full Stack Developer.</p>
       <p className=" text-gray-600 text-lg p-2 font-semibold w-full mr-6">Experienced Full Stack Developer proficient
         in both front-end and back-end technologies crafting
          seamless use experiences and robust functionality</p>
    </div>
    <MoveIcon isHome id={"project"}/>
    </div>

          </Animate>
  )
}

export default Introduction