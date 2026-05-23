import { FaLink } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";

const ProjectCard = ({projects = []}) => {
  return (
    <>
      <section id="Project-Card">
        <div>
          <div className=''>
            
            {projects.map((project,i) => (
              <div key={i} className={`flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-20 py-10 lg:py-20 ${i %2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                <a href={project.links[0].live} target="_blank" className={`w-full lg:w-1/2 hover:transform-gpu transition-all duration-400 ${i %2 === 0 ? 'lg:[transform:perspective(1200px)_rotateY(12deg)_rotateX(4deg)]' : 'lg:[transform:perspective(1200px)_rotateY(-12deg)_rotateX(4deg)]'}`}>
                  <div className={`border-2 border-black/20 ${i %2 === 0 ? 'border-r-white/5 border-t-white/5' : 'border-l-white/5 border-t-white/5'}  rounded-3xl p-1 `}>
                    <img src={project.image} alt={project.name} className='w-full rounded-3xl border border-white/10 shadow-2xl' />
                  </div>
                </a>
                
                <div className='w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8'>
                  
                  <div className=' flex flex-col gap-5 border-black/20 rounded-2xl'>
                    <p className='text-xl md:text-5xl lg:text-3xl font-medium press-start-font'>{project.name}</p> 
                    <p className='text-sm md:text-3xl lg:text-[18px] text-justify font-mono'>{project.description}</p>
                    
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((stack,i) => (
                        <p key={i} className='border lg:px-2 lg:py-1 py-2 px-5 rounded-4xl text-2xl lg:text-sm border-black/10 shadow cursor-pointer hover:shadow-2xl duration-300 transition-all'>{stack}</p>
                      ))}

                    </div>
                  </div>
                  
                <div className='border p-4 md:p-5 flex flex-col sm:flex-row items-center gap-3 border-black/20 rounded-2xl'>

                  {project.links[0]?.live && (
                    <a
                      href={project.links[0].live}
                      target='_blank'
                      className={`flex items-center justify-center gap-2 border border-black/20 px-5 py-2 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                        ${
                          project.links[0]?.live && project.links[0]?.git
                            ? "w-full sm:w-1/2"
                            : "w-full"
                        }`
                      }
                    >
                      <FaLink className='text-xl' />
                      <p className='text-xl'>Live</p>
                    </a>
                  )}

                  {project.links[0]?.git && (
                    <a
                      href={project.links[0].git}
                      target='_blank'
                      className={`flex items-center justify-center gap-2 border border-black/20 px-5 py-2 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                        ${
                          project.links[0]?.live && project.links[0]?.git
                            ? "w-full sm:w-1/2"
                            : "w-full"
                        }`
                      }
                    >
                      <TbBrandGithubCopilot className='text-lg' />
                      <p className='text-xl'>GitHub</p>
                    </a>
                  )}

                </div>
                
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard