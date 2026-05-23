import { FaInstagram } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";



const Contact = () => {
  return (
    <>
      <section id='Contact'>
        <div className='flex flex-col justify-center items-center gap-10 px-50 py-10'>
          <div className="flex flex-col items-center">
            <p className='press-start-font text-5xl'>Get in Touch</p>
            <p className='mt-5 text-xl text-shadow-sm'>If you'd like to get in touch with me, feel free to reach out to me and I'll get back to you whenever I can.</p>

          </div>
          
          <div className="flex gap-5 ">
          
            <div className=" flex flex-col gap-5">

              <motion.a 
                initial={{x: -150,y: 0}}
                whileInView={{x: 0,y: 0}}
                viewport={{once : true}}
                transition={{duration: 1,type: "spring",stiffness: 150}}
                href="https://instagram.com/stupidish_sunish" target="_blank">
                <div className="flex items-center justify-center border h-[150px] w-[150px] rounded-2xl shadow-lg border-black/20 cursor-pointer">
                  <FaInstagram className="text-5xl text-[#ee16d1] "/>
                </div>
              </motion.a>
              <motion.a
                initial ={{x : 0,y : 150}}
                whileInView ={{x : 0,y : 0 }}
                viewport={{once : true}}
                transition={{duration : 1, type : "spring",stiffness : 150}}
                href="https://github.com/Kiwi-Basu" target="_blank">
                <div className="flex items-center justify-center border h-[150px] w-[150px] rounded-2xl shadow-lg border-black/20 cursor-pointer">
                  <TbBrandGithubCopilot className="text-5xl text-[#000000] "/>
                </div>

              </motion.a>

            </div>

            <div className="flex flex-col gap-5">

              <motion.a 
                initial={{x: 0,y: -150}}
                whileInView={{x: 0,y: 0}}
                viewport={{once : true}}
                transition={{duration: 1,type: "spring",stiffness: 150}}
                href="https://www.linkedin.com/in/sunish-suresh-044926382/" target="_blank">
                <div className="flex items-center justify-center border h-[200px] w-[200px] rounded-2xl shadow-lg border-black/20 cursor-pointer">
                  <FaLinkedin className="text-5xl text-[#410ae6] "/>
                </div>
              </motion.a>
            
              <motion.a 
                initial={{x: 150,y: 0}}
                whileInView={{x: 0,y: 0}}
                viewport={{once : true}}
                transition={{duration: 1,type: "spring",stiffness: 150}}
                href="mailto:sunishs9913@gmail.com" target="_blank">
                <div className="flex items-center justify-center border h-[100px] w-[200px] rounded-2xl shadow-lg border-black/20 cursor-pointer">
                  <SiGmail className="text-5xl text-[#9c1515] "/>
                </div>
              </motion.a>
            
            </div>
          
          
          </div>    
        
        </div>

      </section>
    </>
  )
}

export default Contact