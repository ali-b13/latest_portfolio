import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col  gap-6 md:flex-row p-16 mt-6 md:items-center items-start bg-neutral-100 justify-between">
       <p className="text-4xl md:text-7xl w-[25rem] font-extrabold">
        Let&apos;s Work Together
       </p>
       <div className="flex flex-col align-middle  md:flex-row gap-6">
           <p className="text-neutral-500">aliiskran004@gmail.com</p>
           <Link className="text-blue-500" href={"https://linkedin/12"}>LinkedIn</Link>
            <Link className="text-blue-500" href={"https://linkedin/12"}>Twitter</Link>
             <Link className="text-blue-500" href={"https://linkedin/12"}>Github</Link>
       </div>
    </footer>
  )
}

export default Footer