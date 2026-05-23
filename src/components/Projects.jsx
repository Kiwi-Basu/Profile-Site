import { CiStar } from "react-icons/ci";
import ProjectCard from "./ui/ProjectCard";
import projects from "../data/Projects.json"
const Projects = () => {
  return (
    <>
      <section id='Projects'>
        <div className='px-6 md:px-16 lg:px-50 py-10 flex flex-col items-center justify-center'>

          <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 mb-10">
            <div className="flex gap-3 md:gap-5 items-center">
              <CiStar className="text-3xl md:text-5xl "/>
              <p className='press-start-font text-lg md:text-2xl lg:text-3xl font-bold text-shadow-lg text-shadow-[#00000045]'>Featured Project</p>

            </div>
            <p className="text-base md:text-xl lg:text-2xl cursor-pointer underline text-shadow-md hover:text-shadow-lg hover:text-shadow-[#1111115a] transition-all duration-300">view all projects</p>
          </div>

          <ProjectCard projects={projects.projects?.slice(0,3)}/>
          

          
        </div>
      </section>
    </>
  )
}

export default Projects