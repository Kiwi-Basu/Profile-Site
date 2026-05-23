import { motion } from "motion/react";

const ExperienceCard = ({ data = [] }) => {

  return (
    <>
      <section id='Experience-Card'>

          <div className="border w-3xl  lg:w-2xl rounded-2xl bg-white border-black/20">

            <div className="ml-6 md:ml-10 border-l-4 border-black/20">

              {data.map((w, i) => {

                return (

                  <motion.div
                    key={i}

                    initial={{
                      opacity: 0,
                      y: 20
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}

                    viewport={{ once: true }}

                    transition={{
                      duration: 0.4,
                      ease: "easeOut"
                    }}

                    className="py-6 md:py-10 relative"
                  >

                    <img
                      src={w.logo}
                      alt={w.name}
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/20 absolute z-10 -left-5 md:-left-6 top-4 md:top-6 border border-black/30 shadow-lg"
                    />

                    <div className="ml-8 md:ml-10 pr-4 md:pr-5">

                      <p className="text-[10px] md:text-xl lg:text-sm font-bold press-start-font">
                        {w.name}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600/90 font-medium gap-1 sm:gap-0 text-[10px] md:text-lg lg:text-sm my-2">

                        <p>
                          {w.positions[0].title}
                        </p>

                        <div className="flex gap-1">

                          <p>
                            {w.positions[0].start}
                          </p>

                          -

                          <p>
                            {w.positions[0].end}
                          </p>

                        </div>

                      </div>

                      <ul className="list-disc ml-5 mt-2">

                        {w.positions[0].description?.map((desc, i) => (

                          <li
                            key={i}
                            className="font-mono text-xs md:text-xl lg:text-lg text-justify"
                          >
                            {desc}
                          </li>

                        ))}

                      </ul>

                    </div>

                  </motion.div>

                )

              })}

            </div>

          </div>

      </section>
    </>
  )
}

export default ExperienceCard