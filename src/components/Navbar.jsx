import React from 'react'

const Navbar = () => {
  return (
    <>
      <section id='Navbar'>
        <div className='relative flex justify-center '>
          <div className='fixed z-10 top-2 left-1/2 -translate-x-1/2  px-4 py-2 flex items-center justify-center gap-2 border-1 border-black/20 rounded-xl bg-white/90'>
            <p className='press-start-font  md:text-3xl lg:text-sm bg-white px-5 py-1 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 border border-black/10'>Home</p>
            <p className='press-start-font  md:text-3xl lg:text-sm bg-white px-5 py-1 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 border border-black/10'>Projects</p>
          </div>
          
        </div>

      </section>
    </>
    
  )
}

export default Navbar