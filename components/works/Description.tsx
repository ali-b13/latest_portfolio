

import Link from "next/link"
import Animate from "../Animate"
import MoveIcon from "../MoveIcon"
import { BsArrow90DegRight } from "react-icons/bs"


const Description = () => {
    
  return (
    <Animate>

    <div className={`md:flex md:flex-row   gap-6 w-full justify-between p-6 items-center mb-12 `}>
        <p className="text-4xl text-gray-700 font-extrabold my-6 ">Bank System </p>
        <p className="w-96 text-gray-600 text-md my-4  ">Some random description for my project that i wil be creating soon with all good stuff u=in it stay tuned hello all check out what is going on in this product</p>
        <div className="flex justify-start flex-col gap-3">
          <div className="flex gap-12">
           <p className="font-extrabold text-gray-700 ">Role</p>
           <p className="text-neutral-500">Developer</p>
         </div>
          <div className="flex gap-6">
           <p className="font-extrabold text-gray-700">Project</p>
           <p className="text-neutral-500">System design</p>
         </div>
          <div className="flex  gap-12">
           <p className="font-extrabold text-gray-700">Year</p>
           <p className="text-neutral-500">2022</p>
         </div>
         
         <Link className={`hover:bg-neutral-300 hover:transition-all hover:duration-300 hover:text-lg":null} rounded-full p-4   bg-neutral-200 self-center`} href={'/works/1'}>
         <BsArrow90DegRight />
         </Link>
        </div>
    
        
    </div>
    </Animate>
  )
}

export default Description