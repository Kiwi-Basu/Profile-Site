//"Hello World"(print)

import About from './components/About';
import idle from './assets/idle.svg'
import online from './assets/online.svg'
import dnd from './assets/dnd.svg'
import invisible from './assets/invisible.svg'
import youtube from './assets/youtube.svg'
import Writer from './components/Writer';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Skills_card from './components/Skills_card';

const App = () => {
    const [profile_Picture, setProfile_Picture] = useState()
    const [discord_Name, setDiscord_Name] = useState()
    const [discord_Status_Custom, setDiscord_Status_Custom] = useState()
    const [discord_Username, setDiscord_Username] = useState()
    const [discord_Activity, setDiscord_Activity] = useState()
    const [discordSpotify, setDiscordSpotify] = useState()
    const [discord_Status_Active, setDiscord_Status_Active] = useState()
    const [discordYouTube, setDiscordYouTube] = useState(null)

    function getAssetImage(applicationId, asset) {
      if (!asset) return null;

      if (asset.startsWith("mp:external/")) {
        const externalUrl = asset.split("/https/")[1];
        return `https://${externalUrl}`;
      }

      return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.png`;
    }

    async function updateStatus() {
      const res = await fetch(
        `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`
      )
      const json = await res.json()
      const data = json.data
      const user = data.discord_user

      const profile_pic = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
      setProfile_Picture(profile_pic)

      const statusText = {
        online: online,
        idle: idle,
        dnd: dnd,
        offline: invisible
      }

      setDiscord_Status_Active({
        icon: statusText[data.discord_status],
        name: data.discord_status,
      })

      setDiscord_Name(user.global_name)
      setDiscord_Username(user.username)

      const custom = data.activities.find((activity) => activity.type === 4)
      setDiscord_Status_Custom(custom?.state)

      const activity = data.activities.find((a) => a.type === 0);
      if (activity) {
        setDiscord_Activity({
          name: activity.name,
          details: activity.details || null,
          state: activity.state || null,
          largeText: activity.assets?.large_text || null,
          image: getAssetImage(activity.application_id, activity.assets?.large_image)
        });
      } else {
        setDiscord_Activity(null);
      }

      if (data.listening_to_spotify && data.spotify) {
        const s = data.spotify
        setDiscordSpotify({
          song: s.song,
          artist: s.artist,
          album: s.album,
          image: s.album_art_url
        })
      } else {
        setDiscordSpotify(null)
      }

      const youtubeActivity = data.activities.find((a) => a.name === "YouTube")
      if (youtubeActivity) {
        setDiscordYouTube({
          title: youtubeActivity.details || "Unknown Title",
          channel: youtubeActivity.state || "Browsing Youtube",
        })
      } else {
        setDiscordYouTube(null)
      }
    }

    updateStatus()

    return (
      <>
        {/* Monitor */}
        <Navbar />
        <div>
          <div className='lg:flex lg:m-5 gap-10 lg:min-h-screen lg:overflow-visible hidden'>

            <div className='w-[700px] sticky top-60 h-full '>
              <div className='border backdrop-blur-xl bg-[#9c7ff32e] rounded-xl h-fit w-[350px] p-3 border-white/10 text-black shadow-lg flex flex-col items-center mb-5 shadow-[#0000007f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-95'>
               {discordSpotify ? (
                  <>
                    <p className='text-2xl ml-1.3 mb-5 self-start'>
                      {discordSpotify.song}
                    </p>
                    <div className='h-fit w-fit rounded-4xl p-1 border border-white/10 shadow-lg shadow-[#0000007f] bg-[#ffffff8c]'>
                      <img
                        src={discordSpotify.image}
                        alt={discordSpotify.song}
                        className='h-[300px] w-[300px] rounded-4xl'
                      />
                    </div>
                    <p className='text-xl mt-5 ml-1.3 self-start'>
                      {discordSpotify.artist?.slice(0, 20)}...
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/727/727240.png"
                      alt="No music"
                      className="h-24 w-24 opacity-70 mb-3"
                    />
                    <p className="text-lg font-semibold opacity-80 text-white text-shadow-lg text-shadow-[#0000007f]  ">
                      Not listening right now
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-col w-full'>
              <About />
              <Skills_card />
              <Writer />
            </div>

            <div className='sticky top-60 flex flex-col gap-3 right-10 z-1 h-fit w-[450px]'>

              <div>
                <div className='border-1 rounded-xl h-45 w-[450px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300  flex items-center border-white/20 bg-[#d3dce737] text-white shadow-md shadow-[#0000007f]'>
                  <div className='border p-1 mx-5 flex justify-center border-white/20 bg-[#ffffff3b]  items-center rounded-full shadow-md shadow-[#0000007f]'>
                    <img
                      src={profile_Picture}
                      alt="Profile"
                      className="w-32 h-32 rounded-full"
                      draggable={false}
                    />
                  </div>

                  <div className='flex flex-col'>
                    <span className='lg:text-[40px] text-black letter-spacing-1 font-semibold  text-shadow-lg text-shadow-[#ffffff]'>
                      {discord_Name}
                    </span>
                    <p className='text-xl flex text-black  gap-5'>{discord_Username} 
                      <img
                      src={discord_Status_Active?.icon}
                      alt={discord_Status_Active?.name}
                      className='h-5 w-5 mt-2'
                    />
                    </p>

                    <p className='text-black border rounded-full px-2 bg-white/20 border-transparent   mt-3  w-fit'>{discord_Status_Custom}</p>

                    
                  </div>
                </div>
              </div>

              <br />

              <div>
                <div className='border-1 rounded-xl h-50 w-[450px] flex items-center px-5 border-white/20 bg-[#d3dce737] text-white shadow-md shadow-[#0000007f] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300  text-shadow-2xs text-shadow-[#0000007f]'>
                {discord_Activity ? (
                  <>
                  
                    <div className='flex justify-center items-center border rounded-4xl'>
                      <img
                        src={discord_Activity?.image}
                        alt=""
                        className='h-40 p-1 border-white/20  w-40 rounded-4xl shadow-md shadow-[#0000007f]'
                      />
                    </div>

                    <div>
                      <span className='lg:text-3xl font-semibold text-white ml-5'>
                        {discord_Activity?.name}
                      </span>

                      <br /><br />

                      <p className='font-light text-xl text-white ml-5'>
                        {discord_Activity?.details?.slice(0, 18)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                  <img
                      src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
                      alt="No activity"
                      className="h-24 w-24 opacity-70 mb-3"
                    />
                    <p className="text-lg font-semibold opacity-80 text-white text-shadow-lg text-shadow-[#0000007f]  ">
                      Currently not doing anything
                    </p>
                  </>
                )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Phone */}
        <div className='lg:hidden'>
          <About />
          <Skills_card />
          <div className='flex justify-center my-5'>
            <div >
                <div className='border-1 rounded-3xl h-65 w-[550px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300  flex items-center border-white/20 bg-[#d3dce737] text-white shadow-md shadow-[#0000007f]'>
                  <div className='border p-1 mx-5 flex justify-center border-white/20 bg-[#ffffff3b]  items-center rounded-full shadow-md shadow-[#0000007f]'>
                    <img
                      src={profile_Picture}
                      alt="Profile"
                      className="w-55 h-55 rounded-full"
                      draggable={false}
                    />
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-[40px] text-black letter-spacing-1 font-semibold  text-shadow-lg text-shadow-[#ffffff]'>
                      {discord_Name}
                    </span>
                    <p className='text-2xl flex text-black  gap-5'>{discord_Username} 
                      <img
                      src={discord_Status_Active?.icon}
                      alt={discord_Status_Active?.name}
                      className='h-5 w-5 mt-2'
                    />
                    </p>

                    <p className='text-black border rounded-full px-2 bg-white/20 border-transparent   mt-3  w-fit'>{discord_Status_Custom}</p>

                    
                  </div>
                </div>
              </div>
          </div>
          {discordSpotify &&(
            <>
            <div className='w-full flex justify-center my-10'>
              <div className='border w-fit p-4 border-white/20 bg-[#d3dce737] text-white shadow-md shadow-[#0000007f]   rounded-2xl'>
                  <p className='text-5xl ml-1.3 mb-5 text-black   self-start'>
                    {discordSpotify.song}
                  </p>
                  <div className='h-fit w-fit rounded-4xl p-1 border border-white/10 shadow-lg shadow-[#0000007f] bg-[#ffffff8c]'>
                    <img
                      src={discordSpotify.image}
                      alt={discordSpotify.song}
                      className='h-[400px] w-[400px] rounded-4xl'
                    />
                  </div>
                  <p className='text-3xl text-black  mt-5 ml-1.3 self-start'>
                    {discordSpotify.artist?.slice(0, 20)}...
                  </p>
              </div>
            </div>
            </>
          )}
          {discord_Activity &&(
            <>
            <div className='w-full flex justify-center my-10'>
              <div className='border flex gap-5  w-fit p-4 border-white/20 bg-[#d3dce737] text-white shadow-md shadow-[#0000007f]   rounded-2xl'>
                  
                  <div className='h-fit w-fit rounded-4xl p-1 border border-white/10 shadow-lg shadow-[#0000007f] bg-[#ffffff8c]'>
                    <img
                      src={discord_Activity?.image}
                      alt={discord_Activity?.name}
                      className='h-40 w-40 rounded-4xl'
                    />
                  </div>
                  <div className='my-5' >
                    <p className='text-5xl text-black  ml-1.3 mb-5 self-start'>
                      {discord_Activity?.name}
                    </p>
                    <p className='text-3xl mt-5 ml-1.3   self-start'>
                      {discord_Activity?.details?.slice(0, 18)}
                    </p>
                  </div>
              </div>
            </div>
            </>
          )}
        </div>
{/* 
        <div className=" flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingDockDemo />
          </div>
        </div> */}
{/* 
        <div className='flex justify-center mt-10 mb-20 '>
          <Writer />
          <Writer />
          <Writer />
          <Writer />
        </div> */}

      </>
    );
};

export default App;
