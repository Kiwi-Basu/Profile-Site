import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[900px] flex flex-col items-center text-center px-4">

        <p className="
          text-white 
          font-bold
          text-shadow-2xs text-shadow-black 
          mt-20 lg:mt-5 
          text-[60px] lg:text-[40px] 
          leading-tight 
          drop-shadow-[4px_4px_0px_rgba(0,0,0,0.35)]
        ">
          Hello There Stranger,<br />I'm Sunish Suresh
        </p>

        <p className="
          lg:mt-6 mt-12 lg:mb-10  mb-20
          text-white 
          font-semibold 
          text-[38px] lg:text-[26px] 
          drop-shadow-[3px_3px_0px_rgba(255,255,255,0.4)]
        ">
          <span className="underline decoration-white  decoration-[4px] text-black  underline-offset-4">
            Full-Stack Developer
          </span>

          <span className="mx-2 text-shadow-2xs text-shadow-black">+</span>

          <span className="underline decoration-[4px] decoration-white text-black  underline-offset-4">
            Exploring Machine Learning
          </span>
        </p>

        <div className="
          text-white 
          text-[42px] lg:text-[23px] 
          lg:leading-relaxed 
          lg:tracking-wide 
          drop-shadow-[3px_3px_0px_rgba(0,0,0,0.35)]
          lg:max-w-[700px] max-w-[900px]
          lg:mb-10 mb-20
          text-shadow-2xs text-shadow-black
        ">
          A person who loves tech and experimenting with different things in the tech.
          Like building different projects, experimenting with OS, tweaking with hardware
          and all.
        </div>

      </div>
    </div>
  )
}

export default About