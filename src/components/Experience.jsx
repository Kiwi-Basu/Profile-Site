import work from '../data/Work.json'
import education from '../data/Education.json'
import { useState } from 'react'
import ExperienceCard from './ui/ExperienceCard'

const Experience = () => {
  
  const [activeTab,setActiveTab] = useState("work")

  return (
    
    <>
      <section id='Experience-Education'>
        <div className='flex flex-col justify-center lg:justify-between items-center py-10 lg:py-20 px-6 md:px-16 lg:px-50 gap-10 lg:gap-5'>

          <div className='relative flex gap-[10px] md:gap-5 border border-black/20 w-[332px] md:w-2xl p-[6px] md:p-2 rounded-[10px]'>

            <div className={`absolute top-1.5 md:top-2 h-[44px] w-[155px] md:w-[300px] rounded-[10px] bg-black transition-all duration-300
              ${
                activeTab === "work"
                  ? "left-[6px] md:left-2"
                  : "left-[171px] md:left-[327px]"
              }`}
            />

            <button onClick={() => setActiveTab("work")}
              className={`relative border-black/20 border press-start-font z-10 px-3 md:px-5 py-2 w-[155px] md:w-[300px] text-xs md:text-sm lg:text-base rounded-[10px] transition-all duration-300 cursor-pointer hover:shadow-lg shadow-xl
              ${
                activeTab === "work"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Work
            </button>

            
            <button
              onClick={() => setActiveTab("education")}
              className={`relative border press-start-font border-black/20 z-10 px-3 md:px-5 py-2 w-[155px] md:w-[300px] text-xs md:text-sm lg:text-base rounded-[10px] transition-all duration-300 cursor-pointer hover:shadow-lg shadow-xl
              ${
                activeTab === "education"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Education
            </button>

          </div>
          <ExperienceCard 
            data = {activeTab === "work" ? work.work : education.education }
          />


        </div>
      </section>
    </>
    
  )
}

export default Experience