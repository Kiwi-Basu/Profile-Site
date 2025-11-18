import React, { useState } from 'react'
import skills from '../utils/skills';
import { IoMdStar } from "react-icons/io";
import { div } from 'motion/react-client';
import { data } from 'react-router';




const Skills_card = () => {

  const [activeSkill, setActiveSkill] = useState("fullstack");


  const toggleFullStackSkills = () => setActiveSkill("fullstack");

  const toggleDatabaseSkills = () => setActiveSkill("database");

  const toggleAISkills = () => setActiveSkill("ai");

  // const toggleLanguagesSkills = () => setActiveSkill("languages");

  return (
    <>
      <div className = "h-[200px] w-[1090px] border-3 rounded-2xl ">
        <div className='h-full w-full border-5 border-[#FBFB09] rounded-2xl'>
          <div className='h-full w-full border-3 rounded-2xl flex'>
            <div className=' h-full w-[200px] bg-[#C53A2A] flex flex-col px-3 '>
              <div className='h-[40px] flex items-center justify-center w-full   my-5'>
                < IoMdStar className='text-[50px] text-yellow-400'/>
                <p className='text-[30px] relative top-1.5 text-white'>#86</p>
              </div>
              <div className='text-[20px] text-white text-shadow-md text-shadow-[#2f2d2d]'>
                <p className='text-center'>DEVELOPER</p>
                <p className='text-center'>/HUMAN</p>
              </div>
            </div>

            <div className='h-full bg-[#087897] w-full'>
              <p className='text-white text-[23px] mx-5 my-3'>SUNISH SURESH AKA KIWI </p>
              <div className='flex justify-between mx-5 text-white text-[17px] text-shadow-md text-shadow-[#2f2d2d8d] '>
                <p>ABILITY : MULTI-TASKING</p>
                <p>ABILITY: PROCRASTINATION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* skills */}
      <div className='flex justify-evenly  w-[1090px] my-10'>
        <button
          onClick={toggleFullStackSkills}
          className={`
            w-[230px] border-3 my-3 px-5 py-2 rounded-xl 
            text-shadow-md text-shadow-[#463f3f74]
            transition-all duration-200 ease-in-out
            active:scale-95 active:translate-y-[2px]
            ${activeSkill === "fullstack"
              ? "bg-[#F9BE00] border-black scale-105 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              : "bg-[#d3c06a] opacity-60 border-gray-700 shadow-none"}
          `}
        >
          FULL STACK
        </button>
        <button
          onClick={toggleDatabaseSkills}
          className={`
            w-[230px] border-3 my-3 px-5 py-2 rounded-xl 
            text-shadow-md text-shadow-[#463f3f74]
            transition-all duration-200 ease-in-out
            active:scale-95 active:translate-y-[2px]
            ${activeSkill === "database"
              ? "bg-[#F9BE00] border-black scale-105 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              : "bg-[#d3c06a] opacity-60 border-gray-700 shadow-none"}
          `}
        >
          DATABASE
        </button>
        <button
          onClick={toggleAISkills}
          className={`
            w-[230px] border-3 my-3 px-5 py-2 rounded-xl 
            text-shadow-md text-shadow-[#463f3f74]
            transition-all duration-200 ease-in-out
            active:scale-95 active:translate-y-[2px]
            ${activeSkill === "ai"
              ? "bg-[#F9BE00] border-black scale-105 shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              : "bg-[#d3c06a] opacity-60 border-gray-700 shadow-none"}
          `}
        >
          AI
        </button>

      </div>
      
      <div className='h-[150px] w-[1090px]  flex justify-evenly items-center  my-5'>
        {activeSkill === "fullstack" &&(
          <>
            {skills.fullStack.map((skill,key) => {
              return (
                <div key = {key} className=''>
                  <div className='border-3 border-black rounded-2xl w-[150px] text-center text-white pixel-rounded '>
                    <p className=' rounded-t-xl h-[30px] border-2 border-b-transparent  border-[#ffffff76]  flex items-center justify-center py-5' style={{backgroundColor: skill.color}}>
                      {skill.name}
                    </p>
                    <p className='bg-[#17475D]  rounded-b-xl h-[30px] flex items-center justify-center py-5'>
                      {skill.type}
                    </p>
                  </div>
                </div>
              )
            })}
          </>
        )}
        {activeSkill === "database" && (
          <>
            {skills.dataBase.map((skill,key) => {
              return (
                <div key = {key} className=''>
                  <div className='border-3 border-black rounded-2xl w-[150px] text-center text-white pixel-rounded '>
                    <p className=' rounded-t-xl h-[30px] border-2 border-b-transparent  border-[#ffffff76]  flex items-center justify-center py-5' style={{backgroundColor: skill.color}}>
                      {skill.name}
                    </p>
                    <p className='bg-[#17475D] border-2 border-t-transparent  border-[#ffffff76]   rounded-b-xl h-[30px] flex items-center justify-center py-5'>
                      {skill.type}
                    </p>
                  </div>
                </div>
              )
            })}
          </>
        )}
        {activeSkill === "ai" && (
          <>
            {skills.ML.map((skill,key) => {
              return (
                <div key = {key} className=''>
                  <div className='border-3 border-black rounded-2xl w-[150px] text-center text-white pixel-rounded '>
                    <p className=' rounded-t-xl h-[30px] border-2 border-b-transparent  border-[#ffffff76]  flex items-center justify-center py-5' style={{backgroundColor: skill.color}}>
                      {skill.name}
                    </p>
                    <p className='bg-[#17475D]  rounded-b-xl h-[30px] flex items-center justify-center py-5'>
                      {skill.type}
                    </p>
                  </div>
                </div>
              )
            })}
          </>
        )}

      </div>

    
      
    </>
  )
}

export default Skills_card
