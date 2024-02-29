"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BsArrow90DegRight, BsArrowDown } from "react-icons/bs"
type IconProps={
    id:string,
    isHome?:boolean
}
const MoveIcon = ({id,isHome}:IconProps) => {
  return (
    <Link href={id} onClick={(e)=>{

        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
    }}  className={`${isHome ?"hover:bg-neutral-300 hover:transition-all hover:duration-300 hover:text-lg":null} rounded-full p-4   bg-neutral-200 self-center`}>
       <BsArrowDown />
    </Link>
  )
}

export default MoveIcon