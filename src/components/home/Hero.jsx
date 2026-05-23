import React, { useEffect, useState } from 'react'
import { FaGhost } from "react-icons/fa";
import { MdOutlineMusicOff } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "motion/react";



const Hero = () => {
  
  const [discord_Profile_Picture , setDiscord_Profile_Picture] = useState() //pfp
  const [discord_Name, setDiscord_Name] = useState() //kiwi_hu_mai
  const [discord_Username, setDiscord_Username] = useState() //kiwi basu
  const [discord_Status_Active, setDiscord_Status_Active] = useState() // offline active idle dnd
  const [discord_Current_Activity, setDiscord_Current_Activity] = useState() //Playing,Watching,Listening,Editing
  const [discord_Spotify, setDiscord_Spotify] = useState() //Listening to Spotify

  function getAssetImage(applicationId, asset) {
    if (!asset) return null;
    if (asset.startsWith("mp:external/")) {
      const externalUrl = asset.split("/https/")[1];
        return `https://${externalUrl}`;
     } else {
         return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.png`;
      }
    }

  async function updateStatus() {
    const res = await fetch (`https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`)
    const json = await res.json()
    const data = json.data
    const user = data.discord_user

    //discord_status_active
    const statusText = {
      online : "online",
      idle : "idle",
      dnd : "dnd",
      offline : "offline"
    }
    setDiscord_Status_Active({
      icon: statusText[data.discord_status],
      name: data.discord_status
    })
    
    // picture
    const profile_pic =  `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
    setDiscord_Profile_Picture(profile_pic)

    //name
    setDiscord_Name(user.global_name)

    //username
    setDiscord_Username(user.username)

    //spotify
    if (data.listening_to_spotify && data.spotify) {
      const s = data.spotify
      setDiscord_Spotify({
        song: s.song,
        artist: s.artist,
        album: s.album,
        image: s.album_art_url,
        link: `https://open.spotify.com/track/${s.track_id}`
      })
    }
    else {
      setDiscord_Spotify(null)
    }

    //activity
    const activity = data.activities.find((a) => a.type === 0);
      if (activity) {
        setDiscord_Current_Activity({
          name: activity.name,
          details: activity.details || null,
          state: activity.state || null,
          largeText: activity.assets?.large_text || null,
          image: getAssetImage(activity.application_id, activity.assets?.large_image)
        });
      } else {
        setDiscord_Current_Activity(null)
      }


  }
  useEffect(() => {
    updateStatus()
  })
  
  return (
    <>
      <section id="Hero">
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center py-30 lg:py-20 px-6 md:px-16 lg:px-50 gap-16 lg:gap-0 press-start-font'>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex flex-col gap-10 w-full lg:w-auto'
          >

            <div className='flex flex-col gap-5'>
              <p className='md:text-4xl lg:text-5xl'>Sunish Suresh</p>
              <p className='md:text-3xl lg:text-3xl'>Also Known as Kiwi Basu </p>
            </div>

            <div>
              <p className='font-mono  md:text-3xl lg:text-xl w-full lg:w-2xl text-justify lg:text-left'>I am a Full Stack Developer and I am currently a student in India. I am passionate about creating software solutions and I am always looking for new challenges. If you have a project that you would like to work on, feel free to contact me.</p>
            </div>

            <div className='flex flex-wrap gap-x-4 gap-y-2 md:gap-2 text-4xl lg:text-2xl items-center'>
              <a href="https://www.linkedin.com/in/sunish-suresh-044926382/" target='_blank' className='group'>
                <div className='flex items-center gap-3 relative'>
                  <FaLinkedin className='group-hover:text-white duration-300 transition-all'  />
                  <p className='text-sm relative group-hover:text-white'>Linkedin
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </p>
                </div>
              </a>

              <p className='hidden md:block'>|</p>
              
              <a href="https://github.com/Kiwi-Basu" target='_blank' className='group'>
                <div className='flex items-center gap-3 relative'>
                  <TbBrandGithubCopilot className='group-hover:text-white duration-300 transition-all'  />
                  <p className='text-sm relative group-hover:text-white'>Github
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </p>
                </div>
              </a>

              <p className='hidden md:block'>|</p>

              <a href="https://instagram.com/stupidish_sunish" target='_blank' className='group'>
                <div className='flex items-center gap-3 relative'>
                  <FaInstagram className='group-hover:text-white duration-300 transition-all'  />
                  <p className='text-sm relative group-hover:text-white'>Instagram
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </p>
                </div>
              </a>
              
              <p className='hidden md:block'>|</p>
              
              <a href="mailto:sunishs9913@gmail.com" target='_blank' className='group'>
                <div className='flex items-center gap-3 relative'>
                  <SiGmail className='group-hover:text-white duration-300 transition-all'  />
                  <p className='text-sm relative group-hover:text-white'>Gmail
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </p>
                </div>
              </a>

            </div>
              
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 '>
              <div className='border w-fit px-4 py-2 rounded-[10px] border-black/30 shadow cursor-pointer hover:translate-0.5 duration-300 transition-all  text-[12px] '>Full Stack Developer</div>
              <div className='border w-fit px-4 py-2 rounded-[10px] border-black/30 shadow cursor-pointer hover:translate-0.5 duration-300 transition-all  text-[12px] '>Under Graduation (BCA)</div>
            </div>

          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className='flex flex-col gap-10 w-full sm:w-auto items-center lg:items-start'
          >
            <div className='border bg-white border-gray-700/30 rounded-xl p-2 flex flex-col gap-3 shadow-lg w-full max-w-[500px] lg:w-[315px]'>

              <div className='border-b  border-gray-700/30 flex justify-between items-center'>
                <p className=''>Status {discord_Status_Active?.name}</p>
                <div className=" w-1 h-1 rounded-full bg-black"></div>
              </div>
              
              <div className='p-2'>
                <div className='flex shadow-lg p-2 bg-white/20 border-gray-700/30 items-center gap-2 border rounded-2xl'>
                  <img src={discord_Profile_Picture} alt=""  className='h-20 w-20 border rounded-full'/>
                  <div className='flex flex-col gap-2'>
                    <p>{discord_Username}</p>
                    <p>{discord_Name}</p>
                  </div>
                </div>
              </div>
            </div>


            <div className='border bg-white w-full max-w-[500px] lg:w-[315px]  border-gray-700/30 rounded-xl p-2 flex flex-col gap-3 shadow-lg '>

              <div className='border-b border-gray-700/30 flex justify-between items-center'>
                <p className=''>Spotify</p>
                <div className=" w-1 h-1 rounded-full bg-black"></div>
              </div>
              
              <div className='p-2'>
                {discord_Spotify ?
                  (
                    <>
                      <a href={discord_Spotify?.link} target='_blank'>
                        <div className='shadow-lg flex gap-5 p-2 items-center bg-white/20 border-gray-700/30   border rounded-2xl '>
                          <img src={discord_Spotify?.image} alt=""  className='h-15 w-15 rounded-2xl'/>
                          <p className='text-[12px]'>{discord_Spotify?.song?.slice(0,20)}</p>
                        </div>
                      </a>
                    
                    </>
                  ): (
                    <>
                      <div className='shadow-lg flex gap-5 p-2 items-center bg-white/20 border-gray-700/30   border rounded-2xl '>
                        <MdOutlineMusicOff className='text-[30px]'/>
                        <p className='text-[12px]'>Currently listening Nothing</p>
                      </div>
                    </>
                  )
                }
              </div>
            </div>

            <div className='border bg-white w-full max-w-[500px] lg:w-[315px]  border-gray-700/30 rounded-xl p-2 flex flex-col gap-3 shadow-lg '>

              <div className='border-b border-gray-700/30 flex justify-between items-center'>
                <p className=''>Activity</p>
                <div className=" w-1 h-1 rounded-full bg-black"></div>
              </div>
              
              <div className='p-2'>
                <div className='flex p-2 shadow-lg  bg-white/20 border-gray-700/30 items-center gap-2 border rounded-2xl'>
                  
                  {discord_Current_Activity ? 
                    (
                      <>
                        <img src={discord_Current_Activity?.image} alt=""  className='h-20 w-20 rounded-2xl'/>
                        <div className='flex flex-col gap-2'>
                          <p className='text-[12px]'>{discord_Current_Activity?.name}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='flex gap-5 items-center'>
                          <FaGhost className='text-[30px]'/>
                          <p className='text-[12px]'>Currently Doing Nothing</p>
                          
                        </div>
                      </>
                    )
                  }

                  

                </div>
              </div>
            </div>


          </motion.div>

        </div>
        
      </section>
    </>
  )
}

export default Hero