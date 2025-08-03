// "Hello World"(print)

import React, { useState } from 'react'

const Discord_Card = () => {
  const [profile_Picture, setProfile_Picture] = useState();
  const [discord_Name, setDiscord_Name] = useState();
  const [discord_Status_Custom, setDiscord_Status_Custom] = useState();
  const [discord_Username, setDiscord_Username] = useState();
  const [discord_Activity, setDiscord_Activity] = useState();
  const [discordSpoitfy, setDiscordSpoitfy] = useState();
  const [discord_Status_Active, setDiscord_Status_Active] = useState();
  const [playLofi, setPlayLofi] = useState(false);
  async function updateStatus(){
    const res = await fetch(`https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`)
    const json = await res.json();

    const data = json.data;
    const user = data.discord_user;
    

    
    //Profile picture
    const profile_pic = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    setProfile_Picture(profile_pic)

    //active status

    const statusText = {
      online: "🟢",
      idle: "🌙",
      dnd: "⛔",
      offline: "⚫"
    };
    const discord_Active_Status =data.discord_status
    setDiscord_Status_Active(`${statusText[discord_Active_Status]}`)


    // Name
    const name_discord = `${user.global_name}`
    setDiscord_Name(name_discord)

    //status
    const custom = data.activities.find(activity => activity.type == 4);
    const discord_Status =custom?.state;
    setDiscord_Status_Custom(discord_Status);

    //username
    const username_discord = `${user.username}`;
    setDiscord_Username(username_discord)

    //Activity
    let activity_discord = data.activities.find(activity =>activity.type == 0)
    setDiscord_Activity(` ${activity_discord? `🎮 ${activity_discord.name}`:""}`)
    
    //spotify
    if (data.listening_to_spotify && data.spotify) {
        const s = data.spotify;
        setDiscordSpoitfy(`${s.song?`🎵 ${s.song}`:""}`);
    }


  }
  updateStatus()
  return (
    <div style={{ backgroundImage: `url(${'/discord_card_bg.gif'})`,backgroundSize:'cover',backgroundPosition:"center",borderColor: 'rgba(163,163,163,0.475)'}}
    className=' h-[500px] w-[350px]  backdrop-blur-2xl border rounded-2xl p-5 flex flex-col items-center '>
      
      <div className="relative h-[125px] w-[125px] mt-5">
        
        <img
          src={profile_Picture}
          alt="Avatar"
          className="rounded-full border-2  p-1 h-[125px] w-[125px]"
          draggable="false"
          style={{ borderColor: 'rgba(50,46,46,0.475)' }}
          />
          <div>
            <span
              className="absolute bottom-1.5 right-1.5 flex items-center justify-center h-5 w-5 text-xs rounded-full border-2"
              style={{borderColor: 'rgba(50,46,46,0.475)',}}
            >
              {discord_Status_Active}
            </span>
          </div>
          {discord_Status_Custom && (
            <div className="absolute top-1 -right-10 bg-neutral-500 text-white text-sm px-3 py-1 rounded-xl shadow-lg after:content-[''] after:absolute after:bottom-[-13px] after:left-4 after:border-8 after:border-transparent after:border-t-neutral-500">
              {discord_Status_Custom}
            </div>
          )} 

      </div>

      <p className='font-bold text-2xl mt-2 mb-5 text-white'>{discord_Name}</p>
      <p>{discord_Status_Custom}</p>

      <div
        style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        className='border flex py-2 px-2 rounded-2xl backdrop-blur-[10px] shadow-[inset_10px_10px_20px_rgba(225,225,225,0.2)] transition-transform duration-300 ease-in-out hover:scale-105'
      >

        <img src={profile_Picture} draggable="false" alt="" className=' border-1 p-0.5 rounded-full h-[115px] w-[115px] mr-2'
        style={{borderColor:'rgba(255, 255, 255, 0.2)'}} />
        <div>

          <div className='mx-2 mt-2 text-purple-400 text-shadow-blue-700 text-shadow-md'>
            <span className='mb-1'>{discord_Name}</span>
            <span className='block'>{discord_Username}</span>
          </div>
          <div className='ml-2 mt-2  text-shadow-md'>
            <p className='text-blue-400 text-shadow-emerald-700 text-shadow-md'>{discord_Activity}</p>
            <p className='text-green-400 text-shadow-blue-300 text-shadow-md'>{discordSpoitfy?.slice(0,20)}</p>
          </div>
        </div>
      </div>
      <div className='flex m-5 self-start h-full items-end'>
        <button
  onClick={() => setPlayLofi(prev => !prev)}
  className={`border h-8 w-8 rounded flex items-center justify-center ${
    playLofi ? 'bg-neutral-500' : 'border-white'
  } transition duration-300`}
>
  🎵
</button>
      </div>
          {playLofi && (
  <audio src="Lofi.mp3" autoPlay loop hidden />
)}

    </div>
  )
}

export default Discord_Card
