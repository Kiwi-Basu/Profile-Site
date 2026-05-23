import work from '../../data/Work.json'
import education from '../../data/Education.json'
import { useState } from 'react'
import ExperienceCard from '../ui/ExperienceCard'
import { motion } from "motion/react"

const Experience = () => {

  const [activeTab, setActiveTab] = useState("work")

  return (

    <>
      <section id='Experience-Education'>
        <div className='flex flex-col justify-center lg:justify-between items-center py-10 lg:py-20 px-6 md:px-16 lg:px-50 gap-10 lg:gap-5'>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='relative flex gap-[10px] md:gap-5 border bg-white border-black/20 lg:w-2xl w-3xl p-[6px] md:p-2 rounded-[10px]'
          >

            <div className={`absolute top-1.5 md:top-2 h-[44px]  w-[calc(50%-11px)] md:w-[calc(50%-18px)] rounded-[10px] bg-black transition-all duration-300
              ${activeTab === "work"
                ? "left-[6px] md:left-2"
                : "left-[calc(50%+5px)] md:left-[calc(50%+10px)]"
              }`}
            />

            <button onClick={() => setActiveTab("work")}
              className={`w-1/2 relative border-black/20 border press-start-font z-10 py-2 text-xs md:text-sm lg:text-base rounded-[10px] transition-all duration-300 cursor-pointer hover:shadow-lg shadow-xl
              ${activeTab === "work" 
                  ? "text-white"
                  : "text-black"
                }`}
            >
              Work
            </button>


            <button
              onClick={() => setActiveTab("education")}
              className={`w-1/2 relative border press-start-font border-black/20 z-10 py-2 text-xs md:text-sm lg:text-base rounded-[10px] transition-all duration-300 cursor-pointer hover:shadow-lg shadow-xl
              ${activeTab === "education"
                  ? "text-white"
                  : "text-black"
                }`}
            >
              Education
            </button>

          </motion.div>
          <ExperienceCard
            key={activeTab}
            data={activeTab === "work" ? work.work : education.education}
          />


        </div>
      </section>
    </>

  )
}

export default Experience