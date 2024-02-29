import Image from "next/image"

const Item = ({item}:any) => {
  return (
    <div className="flex items-center   gap-4 m-3">
      <div className="min-w-32 flex gap-4">
        <Image className="h-8 w-8" src={item.icon} alt="icon"/>
        <p>{item.name}</p>
        </div> 
      <div style={{width:item.ratio*4+"px"}} className={` bg-green-400 rounded-xl p-1 text-center text-sm text-white`}>{item.ratio}%</div>
    </div>
  )
}

export default Item