import Animate from "@/components/Animate"
import MoveIcon from "@/components/MoveIcon"
import DisplayProject from "@/components/works/DisplayProject"
import ProjectInfo from '@/components/works/project-info' 
const Project = ({params}:{params:{projectId:string}}) => {

  return (
    <Animate>

    <section className="p-2 min-h-[60vh] w-full">
        <div className="flex flex-col gap-4 p-12 md:gap-8 ">
            <p className="text-3xl  md:text-6xl text-gray-700 font-extrabold ">Bank System Design</p>
            <p className=" w-full md:w-[50%] text-gray-400  text-lg md:text-xl  my-4">
                Some random description for my project that i
             wil be creating soon with all good stuff u=in it stay 
            tuned hello all check out what is going on in this product
              wil be creating soon with all good stuff u=in it stay 
            tuned hello all check out what is going on in this product
            </p>
            <div className="flex justify-between mt-14 ">
                  <div className="flex gap-8 ">
                     <div className="flex flex-col gap-2">
                        <p className="font-extrabold text-gray-700">Project</p>
                        <p className="text-neutral-500">System design</p>
                     </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold text-gray-700">Role</p>
                        <p className="text-neutral-500">Designer</p>
                     </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-extrabold text-gray-700">Year</p>
                        <p className="text-neutral-500">2021-2022</p>
                     </div>
                  </div>
       
            </div>
        </div>
         <DisplayProject/>
         <ProjectInfo/>
    </section>
    </Animate>
  )
}

export default Project