
import Item from "./item"

const Skills =({title,skills}:{title:string,skills:any})=>{
    return (
        <section className="min-h-[60vh] md:min-w-[50vh] rounded-3xl p-2 bg-neutral-300/60 mt-6">
          <header className="p-2 font-extrabold text-neutral-500 text-2xl text-center  md:text-left">{title}</header>
          <div className="mt-2">
            {
                skills.map((skill:any)=>{
                 return(
                    <div key={skill.name}>
                        <Item  item={skill}/>
                    </div>
                 )
                })
            }
          </div>

        </section>
    )
}
export default Skills