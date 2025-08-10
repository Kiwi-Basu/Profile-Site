import React, { useEffect, useState } from 'react'

import idle from '../assets/idle.svg'
import online from '../assets/online.svg'
import dnd from '../assets/dnd.svg'
import invisible from '../assets/invisible.svg'
import youtube from '../assets/youtube.svg'
import bg from '/discord_card_bg.png'

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

  useEffect(() => {
    updateStatus()
  }, [])

  return (
    <div className="bg-cover bg-center h-[581px] w-[351px] rounded-2xl drop-shadow-[0_0_3px_#afa9dd]" style={{ backgroundImage: `url(${bg})`}}>
      <div className="h-[580px] w-[350px] backdrop-blur-[1px]  border-2 rounded-2xl p-2 border-[rgba(78,226,176,0.4)] ">
        {/* Header */}
        <div className="h-[150px] w-full my-1 flex items-center">
          <div>
            <div className="relative h-[125px] w-[125px] ml-1">
              <img
                src={profile_Picture}
                alt="Avatar"
                className="rounded-full p-0.5 border-2 border-[#7d8187] h-[125px] w-[125px]"
                draggable="false"
              />
      
            </div>
          </div>
          <div className="h-full w-full  flex flex-col justify-center gap-1">
            <p className="mx-2 text-2xl font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Name}</p>
            <p className="mx-2 text-[16px] font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Username}</p>
            <div className='flex'>
              <img src={discord_Status_Active?.icon} alt={discord_Status_Active?.name} title={discord_Status_Active?.name} className='h-[24px] w-[24px] mx-2  '/>
            
              {discord_Status_Custom && (
                <p className=" text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline text-[18px] font-semibold ">
                  <span className="text-green-300 mr-3">•</span>
                  {discord_Status_Custom?.slice(0,20)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-4 flex-col">
          {/* Game Activity */}
          {discord_Activity && (
            <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border bg-[rgba(255,255,255,0.09)] py-2 px-2 rounded-2xl">
              <div className="font-semibold text-outline tracking-wide text-cyan-200 drop-shadow-[0_0_2px_#0ff]">
                <p>PLAYING A GAME</p>
              </div>
              <div className="ml-2 mt-2 flex items-center">
                {discord_Activity.image && (
                  <img
                    src={discord_Activity.image}
                    alt="Game Art"
                    className="w-16 h-16 mt-2 border-1 border-white rounded-md"
                  />
                )}
                <div>
                  <p className="text-2xl font-semibold text-outline tracking-wide text-[#ffa2a2] mx-3">{discord_Activity.name}</p>
                  <p className="mx-3 text-neutral-200 drop-shadow-[0_0_2px_#111] text-sm font-semibold">{discord_Activity.largeText}</p>
                </div>
              </div>
            </div>
          )}

          {/* Spotify */}
          {discordSpotify && (
            <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border py-2 px-2 rounded-2xl bg-[rgba(255,255,255,0.09)]">
              <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wide">
                <p>LISTENING TO SPOTIFY</p>
              </div>
              <div className="ml-2 mt-2 flex items-center">
                <img
                  src={discordSpotify.image}
                  alt={discordSpotify.song}
                  className="w-16 h-16 mt-2 rounded-md border border-white"
                />
                <div>
                  <p className="text-[#ffa2a2] tracking-w text-outline text-2xl font-semibold mx-3">{discordSpotify.song?.slice(0,20)}...</p>
                  <p className="text-neutral-200 drop-shadow-[0_0_2px_#111] font-semibold text-sm mx-3">{discordSpotify.artist}</p>
                </div>
              </div>
            </div>
          )}

          {/* YouTube */}
          {discordYouTube && (
            <div style={{ borderColor: 'rgba(0, 0, 0, 0.6)' }} className="border py-2 px-2 rounded-2xl bg-[rgba(255,255,255,0.09)]">
              <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wider">
                <p>WATCHING ON YOUTUBE</p>
              </div>
              <div className="ml-2 mt-2 flex items-center">
                <img
                  src={youtube}
                  alt={discordYouTube.title}
                  className="w-16 h-16 mt-2 rounded-md"
                />
                <div>
                  <p className="text-[#ffa2a2] tracking-wide text-outline text-[18px] font-semibold mx-3">{discordYouTube.title?.slice(0,20)}...</p>
                  <p className="text-neutral-200 drop-shadow-[0_0_2px_#111] font-semibold text-sm mx-3">{discordYouTube.channel}</p>
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
