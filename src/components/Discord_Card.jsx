//"Hello World"(print)
import React, {useState } from 'react'
import idle from '../assets/idle.svg'
import online from '../assets/online.svg'
import dnd from '../assets/dnd.svg'
import invisible from '../assets/invisible.svg'
import youtube from '../assets/youtube.svg'

const Discord_Card = () => {
  const [profile_Picture, setProfile_Picture] = useState()
  const [discord_Name, setDiscord_Name] = useState()
  const [discord_Status_Custom, setDiscord_Status_Custom] = useState()
  const [discord_Username, setDiscord_Username] = useState()
  const [discord_Activity, setDiscord_Activity] = useState()
  const [discordSpotify, setDiscordSpotify] = useState()
  const [discord_Status_Active, setDiscord_Status_Active] = useState()
  // const [playLofi, setPlayLofi] = useState(false)
  const [discordYouTube, setDiscordYouTube] = useState(null)

  async function updateStatus() {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`
    )
    const json = await res.json()
    const data = json.data
    const user = data.discord_user

    // Profile picture
    const profile_pic = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    setProfile_Picture(profile_pic)

    // Active status
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

    // Name, Username, Custom Status
    setDiscord_Name(user.global_name)
    setDiscord_Username(user.username)

    const custom = data.activities.find((activity) => activity.type === 4)
    setDiscord_Status_Custom(custom?.state)

    // Game / App Activity
    const activity = data.activities.find((a) => a.type === 0)
    if (activity) {
      setDiscord_Activity({
        name: activity.name,
        details: activity.details || null,
        state: activity.state || null,
        largeText: activity.assets?.large_text || null,
        image: activity.assets?.small_image
          ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`
          : null,
        startTime: activity.timestamps?.start || null
      })
    } else {
      setDiscord_Activity(null)
    }

    // Spotify
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

    // YouTube Activity
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
    <div className = "flex justify-center lg:mt-3 mt-20 ">
        <div className="lg:h-[547px] lg:w-[350px] lg:rounded-2xl lg:p-3 lg:backdrop-brightness-100 lg:border bg-[rgba(20,113,195,0.25)]
          h-[1100px] w-[700px] border-4 rounded-4xl p-5 backdrop-blur-[10px] border-r-white/10 border-t-white/10 border-l-white/30 border-b-white/20 lg:bg-[rgba(255,255,255,0.01)]">
          {/* Header */}

          <div className="lg:h-[150px] lg:my-1
            h-[300px]  w-full my-2  flex items-center">
            <div>
              <div className=" lg:h-[125px] lg:w-[125px] lg:ml-1
              h-[250px] w-[250px] ml-2 ">
                <img
                  src={profile_Picture}
                  alt="Avatar"
                  className="rounded-full p-0.5 border-2 border-[#7d8187] lg:h-[125px] lg:w-[125px]
                  h-[250px] w-[250px]
                  "
                  draggable="false"
                />
        
              </div>
            </div>
            <div className="h-full w-full  flex flex-col justify-center gap-1">
              <p className="lg:mx-2 lg:text-2xl
              mx-8 text-5xl font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Name}</p>
              <p className="lg:mx-2 lg:text-[16px]
              mx-8 text-[32px] font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Username}</p>
              <div className='flex'>
                <img src={discord_Status_Active?.icon} alt={discord_Status_Active?.name} title={discord_Status_Active?.name} className='lg:h-[24px] lg:w-[24px] lg:mx-2 h-[40px] ml-8 '/>
              
                {discord_Status_Custom && (
                  <p className="text-[25px] text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline font-semibold lg:text-[18px] ">
                    <span className="text-green-300 mr-5 lg:mr-3">•</span>
                    {discord_Status_Custom?.slice(0,20)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex gap-8 flex-col lg:gap-4">

            {/* Game Activity */}

            {discord_Activity && (
              <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5 
              lg:p-2 lg:rounded-2xl
              ">
                <div className="font-semibold text-outline tracking-wide text-cyan-200 drop-shadow-[0_0_2px_#0ff]">
                  <p className='lg:text-[16px] text-3xl'>PLAYING A GAME</p>
                </div>
                <div className="ml-2 mt-2 flex items-center">
                  {discord_Activity.image && (
                    <img
                      src={discord_Activity.image}
                      alt="Game Art"
                      className="lg:w-14 lg:h-14 mt-2
                      w-32 h-32 border-1 border-white rounded-md"
                    />
                  )}
                  <div>
                    <p className="text-5xl font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6 
                      lg:mx-3 lg:text-[18px]">
                      {discord_Activity.name}
                    </p>
                    <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
                    lg:mx-3 lg:text-sm">{discord_Activity.largeText}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Spotify */}
            {discordSpotify && (
              <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5
              lg:p-2 lg:rounded-2xl
              ">
                <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wide">
                  <p className='lg:text-[16px] text-3xl'>LISTENING TO SPOTIFY</p>
                </div>
                <div className="ml-2 mt-2 flex items-center">
                  <img
                    src={discordSpotify.image}
                    alt={discordSpotify.song}
                    className="lg:w-14 lg:h-14 mt-2 
                    w-32 h-32 rounded-md border border-white"
                  />
                  <div>
                    <p className="text-5xl font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6
                      lg:mx-3 lg:text-[18px]">{discordSpotify.song?.slice(0,20)}...</p>
                    <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
                    lg:mx-3 lg:text-sm">{discordSpotify.artist?.slice(0,20)}...</p>
                  </div>
                </div>
              </div>
            )}

            {/* YouTube */}
            {discordYouTube && (
              <div style={{ borderColor: 'rgba(0, 0, 0, 0.6)' }}className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5
              lg:p-2 lg:rounded-2xl
              ">
                <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wider">
                  <p className='lg:text-[16px] text-3xl'>WATCHING ON YOUTUBE</p>
                </div>
                <div className="ml-2 mt-2 flex items-center">
                  <img
                    src={youtube}
                    alt={discordYouTube.title}
                    className="lg:w-14 lg:h-14 
                    w-32 h-32 mt-2 rounded-md"
                  />
                  <div>
                    <p className="text-[40px] font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6
                      lg:mx-3 lg:text-[18px]">{discordYouTube.title?.slice(0,20)}...</p>
                    <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
                    lg:mx-3 lg:text-sm">{discordYouTube.channel}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lofi Button */}
          {/* <div className="flex m-5 self-start h-full items-end">
            <button
              onClick={() => setPlayLofi((prev) => !prev)}
              className={`border h-8 w-8 rounded flex items-center justify-center ${
                playLofi ? 'bg-neutral-500' : 'border-white'
              } transition duration-300`}
            >
              🎵
            </button>
          </div>
          {playLofi && <audio src="src/assets/Lofi.mp3" autoPlay loop hidden />} */}
        </div>
    </div>
  )
}

export default Discord_Card
