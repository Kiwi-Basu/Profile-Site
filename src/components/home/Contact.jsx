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
            <p className='press-start-font text-5xl text-shadow-lg text-shadow-[#00000045]'>Get in Touch</p>
            <p className='mt-5 text-xl text-shadow-sm'>If you'd like to get in touch with me, feel free to reach out to me and I'll get back to you whenever I can.</p>

          </div>

          <div className="flex gap-5 ">

            <div className=" flex flex-col gap-5">

              <motion.a
                initial={{ x: -100, y: 0 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                href="https://instagram.com/stupidish_sunish" target="_blank">
                <div className="flex bg-white dark:bg-black items-center justify-center border h-[150px] w-[150px] rounded-2xl shadow-lg dark:shadow-white/10 border-black/20 dark:border-white/20 cursor-pointer hover:scale-105 transition-all duration-300" >
                  <FaInstagram className="text-5xl text-[#ee16d1] " />
                </div>
              </motion.a>
              <motion.a
                initial={{ x: 0, y: 100 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                href="https://github.com/Kiwi-Basu" target="_blank">
                <div className="flex bg-white dark:bg-black items-center justify-center border h-[150px] w-[150px] rounded-2xl shadow-lg dark:shadow-white/10 border-black/20 dark:border-white/20 cursor-pointer hover:scale-105 transition-all duration-300">
                  <TbBrandGithubCopilot className="text-5xl text-[#111111]dark:text-[#ffffff] " />
                </div>

              </motion.a>

            </div>

            <div className="flex flex-col gap-5">

              <motion.a
                initial={{ x: 0, y: -100 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                href="https://www.linkedin.com/in/sunish-suresh-044926382/" target="_blank">
                <div className="flex bg-white dark:bg-black items-center justify-center border h-[200px] w-[200px] rounded-2xl shadow-lg dark:shadow-white/10 border-black/20 dark:border-white/20 cursor-pointer hover:scale-105 transition-all duration-300">
                  <FaLinkedin className="text-5xl text-[#410ae6] " />
                </div>
              </motion.a>

              <motion.a
                initial={{ x: 100, y: 0 }}
                whileInView={{ x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
                href="mailto:sunishs9913@gmail.com" target="_blank">
                <div className="flex bg-white dark:bg-black items-center justify-center border h-[100px] w-[200px] rounded-2xl shadow-lg dark:shadow-white/10 border-black/20 dark:border-white/20 cursor-pointer hover:scale-105 transition-all duration-300">
                  <SiGmail className="text-5xl text-[#9c1515] " />
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