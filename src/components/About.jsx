import { div } from 'motion/react-client'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='border-3 w-[650px] h-[550px]  bg-[#1585b7]   rounded-xl'>

        <div className="border-10 border-[#ffdf0d] rounded-xl">
          <div className=' h-[525px] border-3 border-black rounded-[7px]'>
        
            <div className='flex flex-col items-center bg-[#1585b7] py-10 text-white  text-shadow-md text-shadow-[#463f3f] text-[25px]'>
              <span>
                HELLO THERE STRANGER
              </span>
              <span>
                I'M SUNISH SURESH
              </span>
            </div>
        
            <div className='bg-[#13b8ce] h-[250px] flex'>
              <div className="profile-stephen h-[250px] w-[250px]" />
              <div className='flex items-center gap-4 '>
                <div 
                  className='text-[12px] p-5 flex items-center text-center
                  text-shadow-2xs text-shadow-[#463f3f]
                  border-3 border-black rounded-2xl 
                  bg-[#F1AF03] h-[170px] w-[170px]
                  shadow-[inset_0_0_1px_2px_#ffffff]'>
                    
                  <div >
                    <div className='flex justify-center'>
                      
                      <div className='border flex  my-5  items-center justify-center  h-[50px] w-[50px] rounded-t-xl  rounded-e-4xl  bg-[#423838]'>
                        <div className=' h-[30px] w-[30px] rounded-xl bg-[#ffffffbc]'>
                          
                        </div>
                      </div>
                    </div>
                  <p>FULL STACK DEVELOPER</p>
                  </div>
                </div>
                <div 
                  className='text-[12px] p-5 flex items-center text-center
                  text-shadow-2xs text-shadow-[#463f3f]
                  border-3 border-black rounded-2xl 
                  bg-[#F1AF03] h-[170px] w-[170px]
                  shadow-[inset_0_0_1px_2px_#ffffff]'>
                    
                  <div >
                    <div className='flex justify-center'>
                      
                      <div className='border flex  my-5  items-center justify-center  h-[50px] w-[50px] rounded-t-xl  rounded-e-4xl  bg-[#423838]'>
                        <div className=' h-[30px] w-[30px] rounded-xl bg-[#ffffffbc]'>
                          
                        </div>
                      </div>
                    </div>
                  <p>EXPLORING ML</p>
                  </div>
                </div>
              </div>
            </div>

             <div className=''>
              <div className='my-6 text-shadow-md text-shadow-[#232222]'>
              <p className='text-white text-[25px] mx-5'>#86</p>
              <p className='text-white text-[22px]  mx-5'>A guy who loves tech</p>
            </div>
          </div>
        </div>
    
     </div> 
      </div>
    </>
  )
}

export default About