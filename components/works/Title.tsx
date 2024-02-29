import Animate from "../Animate"

const Title = ({title,description}:{title:string,description:string}) => {
  return (
    <Animate>

    <div className='w-full flex text-center my-12'>
        <div className='md:h-[30vh] flex flex-col items-end gap-12 m-12'>
            <p className='self-center  text-4xl text-gray-700 font-extrabold '>{title}</p>
            <p className=' md:text-end md:w-[60%] text-lg text-neutral-500'>{description}</p>
        </div>
    </div>
    </Animate>
  )
}

export default Title