import skills from '../../data/Skills.json'
import { motion } from "motion/react"

const randomSizes = [
  "w-[180px] h-[180px] rounded-full",
  "w-[220px] h-[140px] rounded-[40px]",
  "w-[160px] h-[220px] rounded-[50px]",
  "w-[200px] h-[200px] rounded-[30px]",
  "w-[260px] h-[150px] rounded-full",
  "w-[170px] h-[170px] rounded-[20px]",
]

const randomRotations = [
  "rotate-[-6deg]",
  "rotate-3",
  "rotate-6",
  "rotate-[-3deg]",
  "rotate-2",
]

const Skills = () => {
  return (
    <>
      <section id='Skills'>

        <div className='px-6 md:px-16 lg:px-50 py-10 overflow-hidden'>

          <div className='flex justify-center mb-12 md:mb-20 lg:mb-24'>
            <p className='press-start-font text-lg md:text-2xl lg:text-3xl font-bold text-shadow-lg text-shadow-[#00000045]'>
              Skills
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-10'>

            {skills.skills.map((category, i) => (
              <div
                key={i}
                className='flex flex-col gap-10 items-center'
              >

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='border border-black/10 px-8 py-3 rounded-full shadow-lg bg-white'
                >
                  <p className='press-start-font text-sm'>
                    {category.category}
                  </p>
                </motion.div>

                <div className='flex flex-wrap justify-center gap-8 max-w-5xl'>

                  {category.items.map((skill, index) => {

                    const size =
                      randomSizes[
                      (index + i) % randomSizes.length
                      ]

                    const rotation =
                      randomRotations[
                      (index + i) % randomRotations.length
                      ]

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
                        className={`${size} ${rotation} relative border border-black/10 shadow-xl bg-white hover:rotate-0 hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-4`}
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className='h-14 w-14 object-contain relative transition-all duration-500'
                        />

                        <p className='font-mono text-center text-sm relative  px-4'>{skill.name}</p>

                      </motion.div>
                    )
                  })}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  )
}

export default Skills