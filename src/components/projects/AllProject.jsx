import projects from '../../data/Projects.json'
import ProjectCard from '../ui/ProjectCard'

const AllProject = () => {
  return (
    <>
      <section id='all-projects'>
        <div className='px-6 md:px-16 lg:px-50 py-10 flex flex-col items-center justify-center gap-10'>
          <p className='text-xl md:text-2xl lg:text-4xl font-bold text-shadow-lg text-shadow-[#00000045] mt-20 press-start-font'>My Projects</p>
          <ProjectCard projects={projects.projects}/>
        </div>
      </section>
    </>
  )
}

export default AllProject