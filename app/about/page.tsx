import Skills from "@/components/about/skills"
import TwoGridPhoto from "@/components/about/two-grid"
import Title from "@/components/works/Title"
import { skills } from "@/lib/place-holder-data"
const aboutPage = () => {
  const description =`In the vast ocean of web development, you need a skilled navigator to chart your course to success.
 As a seasoned full-stack web developer, I bring:
-Versatility: Proficiency across a wide range of technologies, ensuring seamless integration from front to back-end.
-Agility: A knack for agile problem-solving, adapting quickly to challenges and delivering efficient solutions.
-Collaboration: Strong communication skills and a team-oriented approach, fostering a supportive environment for innovation.
-Proven Success: A track record of delivering high-quality projects on time and within budget, exceeding expectations at every turn.`
  return (
    <main className="p-6">
        <TwoGridPhoto/>
        <Skills skills={skills} title={"Technical Skills"}/>
        <Title title="Why Hire me ?" description={description}/>
    </main>
  )
}

export default aboutPage