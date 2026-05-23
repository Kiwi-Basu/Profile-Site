const Card = ({ data = [] }) => {
  return (
    <>
      <section id='Experience-Card'>
        <div className="">
          <div className="border w-2xl rounded-2xl border-black/20">
            <div className="ml-10 border-l-4 border-black/20 ">
              {data.map((w, i) => {
                return (
                  <div key={i} className="py-10 relative">
                    <img src={w.logo} alt={w.name} className="h-12 w-12 rounded-full bg-black/20  absolute z-10 -left-6.5 top-6 border border-black/30 shadow-lg" />

                    <div className="ml-10 pr-5 ">
                      <p className="lg:text-sm text-2xl  font-bold press-start-font">{w.name}</p>
                      <div className="flex justify-between text-gray-600/90 font-medium lg:text-md text-xl">
                        <p>{w.positions[0].title}</p>
                        <div className="flex gap-1">
                          <p>{w.positions[0].start}</p> -
                          <p>{w.positions[0].end}</p>

                        </div>
                      </div>
                      <ul className="list-disc ml-5">
                        {w.positions[0].description?.map((desc, i) => (
                          <li key={i} className="font-mono text-sm sm:text-xl xl:text-md">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <p></p>

                    </div>

                  </div>

                )
              })}

            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Card