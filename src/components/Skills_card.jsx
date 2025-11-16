import React, { useState } from 'react'
import skills from '../utils/skills';
import { div } from 'motion/react-client';
import { data } from 'react-router';






const Skills_card = () => {

  const [fullStackSkills, setFullStackSkills] = useState(true);
  const [databaseSkills, setDatabaseSkills] = useState(false);
  const [aiSkills, setAISkills] = useState(false);
  const [languagesSkills, setlanguagesSkills] = useState(false);

  const toggleFullStackSkills = () => {
    setFullStackSkills(!fullStackSkills);
  }

  const toggleDatabaseSkills = () => {
    setDatabaseSkills(!databaseSkills);
  }

  const toggleAISkills = () => {
    setAISkills(!aiSkills);
  }

  const toggleLanguagesSkills = () => {
    setlanguagesSkills(!languagesSkills);
  }

  return (
    <>
      <div className='mx-20 my-10'>
        <div className='lg:text-[30px] text-[50px]'>
          skills
        </div>

        <div className='gap-5 flex flex-col '>
          <div className=''>
            <p className='lg:text-[25px] text-[35px] lg:mt-5 mt-10  cursor-pointer  text-white text-shadow-lg text-shadow-[#12111148] w-fit mb-10 lg:mb-5' onClick={toggleFullStackSkills}>Full-Stack {fullStackSkills ? "▲" : "▼"} </p>
            {fullStackSkills && (
              <div className=' flex gap-4 flex-wrap mx-10  lg:mx-5'>
                {skills.fullStack.map((skill,key) => {
                  return(
                    <div key={key} 
                      className='lg:h-40 lg:w-30 h-55 w-40 border flex flex-col items-center justify-center rounded-xl hover:scale-105 duration-200 bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden skill-shine  shadow-[0_8px_32px_rgba(31,38,135,0.37)]'>
                      <img src={skill.iconUrl} alt={skill.name} className='w-30 h-30  lg:w-20 lg:h-20 inline-block my-3'/>
                      <span className="lg:text-sm text-[25px] font-light lg:font-medium">
                        {skill.name}
                      </span>
                    </div>
                  )  
                })}
              </div>
            )}
          </div>

          <div className=''>
            <p className='lg:text-[25px] text-[35px] lg:mt-5 mt-10   cursor-pointer  text-white text-shadow-lg text-shadow-[#12111148] w-fit mb-10 lg:mb-5' onClick={toggleDatabaseSkills}>DataBase {databaseSkills ? "▲" : "▼"} </p>
            {databaseSkills && (
              <div className=' flex gap-4 flex-wrap mx-5'>
                {skills.dataBase.map((skill,key) => {
                  return(
                    <div key={key} 
                      className='lg:h-40 lg:w-30 h-55 w-40 border flex flex-col items-center justify-center rounded-xl hover:scale-105 duration-200 bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden skill-shine  shadow-[0_8px_32px_rgba(31,38,135,0.37)]'>
                      <img src={skill.iconUrl} alt={skill.name} className='w-20 h-20 inline-block my-3'/>
                      <span className="lg:text-sm text-[25px] font-light lg:font-medium">
                        {skill.name}
                      </span>
                    </div>
                  )  
                })}
              </div>
            )}
          </div>

          <div className=''>
            <p  className='lg:text-[25px] text-[35px] lg:mt-5 mt-10  cursor-pointer  text-white text-shadow-lg text-shadow-[#12111148] w-fit mb-10 lg:mb-5' onClick={toggleAISkills}> AI-ML {aiSkills ? "▲" : "▼"}</p>

            { aiSkills && (
              <div className=' flex gap-4 flex-wrap mx-5'>
                {skills.ML.map((skill,key) => {
                  return(
                    <div key={key} 
                      className='lg:h-40 lg:w-30 h-55 w-40 border flex flex-col items-center justify-center rounded-xl hover:scale-105 duration-200 bg-white/10 backdrop-blur-xl border-white/20 overflow-hidden skill-shine  shadow-[0_8px_32px_rgba(31,38,135,0.37)]'>
                      <img src={skill.iconUrl} alt={skill.name} className='w-20 h-20 inline-block my-3'/>
                      <span className="lg:text-sm text-[25px] font-light lg:font-medium">
                        {skill.name}
                      </span>
                    </div>
                  )  
                })}
              </div>
            )}
          </div>
          
          {/* <div className='  '>
            <p  className='text-[25px] cursor-pointer text-white text-shadow-lg text-shadow-[#12111148] w-fit mb-5
            ' onClick={toggleLanguagesSkills}>Languages {languagesSkills ? "▲" : "▼" }</p>
            {languagesSkills && (
              <div className=' flex gap-4 flex-wrap mx-5'>
                {skills.languages.map((skill,key) => {
                  return(
                    <div key={key} 
                      className='h-40 w-30 border flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-200 bg-[#4c75d655] backdrop-blur-lg border-black/10 overflow-hidden skill-shine shadow-md shadow-[#443636]'>
                      <img src={skill.iconUrl} alt={skill.name} className='w-20 h-20 inline-block my-3'/>
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  )  
                })}
              </div>
            )}

          </div> */}
        </div>

      </div> 
    </>
  )
}

export default Skills_card