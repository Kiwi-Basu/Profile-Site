import skills from '../data/Skills.json'

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
            <p className='press-start-font text-3xl md:text-4xl lg:text-5xl'>
              Skills
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-10'>

            {skills.skills.map((category, i) => (
              <div
                key={i}
                className='flex flex-col gap-10 items-center'
              >

                <div className='border border-black/10 px-8 py-3 rounded-full shadow-lg bg-white'>
                  <p className='press-start-font text-sm'>
                    {category.category}
                  </p>
                </div>

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
                      <div key={index} className={`${size} ${rotation} relative border border-black/10 shadow-xl bg-white hover:rotate-0 hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-4`}>
                        <img 
                          src={skill.image}
                          alt={skill.name}
                          className='h-14 w-14 object-contain relative transition-all duration-500'
                        />

                        <p className='font-mono text-center text-sm relative  px-4'>{skill.name}</p>

                      </div>
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