import React, { useState } from 'react'
import idle from '../assets/idle.svg'
import online from '../assets/online.svg'
import dnd from '../assets/dnd.svg'
import invisible from '../assets/invisible.svg'
import { FaMusic } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

const Discord_Card = () => {
  const [discord_Status_Custom, setDiscord_Status_Custom] = useState()
  const [discord_Activity, setDiscord_Activity] = useState()
  const [discordSpotify, setDiscordSpotify] = useState()
  const [discord_Status_Active, setDiscord_Status_Active] = useState()
  
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
      const res = await fetch(
        `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`
      )
      const json = await res.json()
      const data = json.data
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
      }
      else {
        setDiscordSpotify(null)
      }
    }
  updateStatus()
  return (
    <>
      <div className=' h-[550px] w-[400px]    pokedex'>
        
       <div className='flex justify-center flex-col gap-2    items-center h-full '>

          <div className=' h-[140px] w-[300px] ml-2 mt-10  border-3 flex rounded-2xl items-center'>
            {discordSpotify ? 
              (
                <>
                  <div className='flex flex-col w-full  h-full'>
                  <div className='bg-[#0C7994] text-[16px] px-5 py-2 rounded-t-xl text-white'>
                    NOW LISTENING:
                  </div>
                  <div className='flex w-full h-full rounded-b-xl text-white items-center gap-5  bg-[#0889BB]'>
                    <img src={discordSpotify.image} alt={discordSpotify.song} className='h-[80px] rounded-2xl  ml-2 w-[80px]' />
                    <div className='text-[13px]'>
                      {discordSpotify.song?.slice(0,20)}
                    </div>
                  </div>
                </div>
                </>
              )
              : (
                <>
                <div className='flex flex-col w-full  h-full'>
                  <div className='bg-[#0C7994] text-[16px] px-5 py-2 rounded-t-xl text-white'>
                    NOW LISTENING:
                  </div>
                  <div className='flex w-full h-full rounded-b-xl text-white items-center gap-5  bg-[#0889BB]'>
                    <FaMusic  className='ml-5 text-[50px]'/>
                    <div>
                      CURRENTLY NONE
                    </div>
                  </div>
                </div>
              
                </>
              )
            }
          </div>

          <br />
          <div className=' h-[140px] w-[300px] ml-2 border-3 rounded-2xl flex items-center'>
            {discord_Activity ? 
              (
                <>
                  <div className='flex flex-col w-full  h-full'>
                    <div className='bg-[#0C7994] text-[14px] px-5 py-2 rounded-t-xl text-white'>
                      CURRENT ACTIVITY:
                    </div>
                    <div className='flex w-full h-full rounded-b-xl text-white items-center gap-5  bg-[#0889BB]'>
                      <img src={discord_Activity.image}  className='h-[80px] rounded-2xl  ml-2 w-[80px]' />
                      <div className='text-[19px]'>
                        {discord_Activity.name}
                        <br />
                        
                        <div className='text-[12px]'>
                        {discord_Activity.details?.slice(0,18)}</div>
                        </div>
                    </div>
                  </div>
                </>
              )
              : (
                <>
                <div className='flex flex-col w-full  h-full'>
                  <div className='bg-[#0C7994] text-[14px] px-5 py-2 rounded-t-xl text-white'>
                    CURRENT ACTIVITY:
                  </div>
                  <div className='flex w-full h-full rounded-b-xl text-white items-center gap-5  bg-[#0889BB]'>
                    <FaGamepad  className='ml-5 text-[50px]'/>
                    <div>
                      CURRENTLY NONE
                    </div>
                  </div>
                </div>
              
                </>
              )
            }
          </div>
        </div>
          {/* <div className='border backdrop-blur-xl bg-[#9c7ff32e] rounded-xl h-fit w-[350px] p-3 border-white/10 text-black shadow-lg flex flex-col items-center mb-5 shadow-[#0000007f] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-95'>
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
        </div> */}
      </div>
    </>
  )
}

export default Discord_Card






// //"Hello World"(print)
// import React, {useState } from 'react'
// import idle from '../assets/idle.svg'
// import online from '../assets/online.svg'
// import dnd from '../assets/dnd.svg'
// import invisible from '../assets/invisible.svg'
// import youtube from '../assets/youtube.svg'

// const Discord_Card = () => {
//   const [profile_Picture, setProfile_Picture] = useState()
//   const [discord_Name, setDiscord_Name] = useState()
//   const [discord_Status_Custom, setDiscord_Status_Custom] = useState()
//   const [discord_Username, setDiscord_Username] = useState()
//   const [discord_Activity, setDiscord_Activity] = useState()
//   const [discordSpotify, setDiscordSpotify] = useState()
//   const [discord_Status_Active, setDiscord_Status_Active] = useState()
//   // const [playLofi, setPlayLofi] = useState(false)
//   const [discordYouTube, setDiscordYouTube] = useState(null)
//   function getAssetImage(applicationId, asset) {
//   if (!asset) return null;

//   // Handle Discord's "media proxy" external URLs
//   if (asset.startsWith("mp:external/")) {
//     const externalUrl = asset.split("/https/")[1];
//     return `https://${externalUrl}`;
//   }

//   // Handle regular Discord CDN assets
//   return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.png`;
// }

  

//   async function updateStatus() {
//     const res = await fetch(
//       `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_DISCORD_ID}`
//     )
//     const json = await res.json()
//     const data = json.data
//     const user = data.discord_user

//     // Profile picture
//     const profile_pic = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
//     setProfile_Picture(profile_pic)

//     // Active status
//     const statusText = {
//       online: online,
//       idle: idle,     
//       dnd: dnd,
//       offline: invisible
//     }
//     setDiscord_Status_Active({
//   icon: statusText[data.discord_status],
//   name: data.discord_status,
// })

//     // Name, Username, Custom Status
//     setDiscord_Name(user.global_name)
//     setDiscord_Username(user.username)

//     const custom = data.activities.find((activity) => activity.type === 4)
//     setDiscord_Status_Custom(custom?.state)

//     // Game / App Activity
//     // Game / App Activity
// const activity = data.activities.find((a) => a.type === 0);
// if (activity) {
//   setDiscord_Activity({
//     name: activity.name,
//     details: activity.details || null,
//     state: activity.state || null,
//     largeText: activity.assets?.large_text || null,
//     image: getAssetImage(activity.application_id, activity.assets?.large_image) 
//   });
// } else {
//   setDiscord_Activity(null);
// }


//     // Spotify
//     if (data.listening_to_spotify && data.spotify) {
//       const s = data.spotify
//       setDiscordSpotify({
//         song: s.song,
//         artist: s.artist,
//         album: s.album,
//         image: s.album_art_url
//       })
//     } else {
//       setDiscordSpotify(null)
//     }

//     // YouTube Activity
//     const youtubeActivity = data.activities.find((a) => a.name === "YouTube")
//     if (youtubeActivity) {

//       setDiscordYouTube({
//         title: youtubeActivity.details || "Unknown Title",
//         channel: youtubeActivity.state || "Browsing Youtube",
//       })
//     } else {
//       setDiscordYouTube(null)
//     }
//   }

//   updateStatus()

//   return (
//     <div className = "flex justify-center lg:mt-3 mt-20 ">
//         <div className="lg:h-[547px] lg:w-[350px] lg:rounded-2xl lg:p-3 lg:backdrop-brightness-100 lg:border bg-[rgba(20,113,195,0.25)]
//           h-[1100px] w-[700px] border-4 rounded-4xl p-5 backdrop-blur-[10px] border-r-white/10 border-t-white/10 border-l-white/30 border-b-white/20 lg:bg-[rgba(255,255,255,0.01)]">
//           {/* Header */}

//           <div className="lg:h-[150px] lg:my-1
//             h-[300px]  w-full my-2  flex items-center">
//             <div>
//               <div className=" lg:h-[125px] lg:w-[125px] lg:ml-1
//               h-[250px] w-[250px] ml-2 ">
//                 <img
//                   src={profile_Picture}
//                   alt="Avatar"
//                   className="rounded-full p-0.5 border-2 border-[#7d8187] lg:h-[125px] lg:w-[125px]
//                   h-[250px] w-[250px]
//                   "
//                   draggable="false"
//                 />
        
//               </div>
//             </div>
//             <div className="h-full w-full  flex flex-col justify-center gap-1">
//               <p className="lg:mx-2 lg:text-2xl
//               mx-8 text-5xl font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Name}</p>
//               <p className="lg:mx-2 lg:text-[16px]
//               mx-8 text-[32px] font-semibold text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline">{discord_Username}</p>
//               <div className='flex'>
//                 <img src={discord_Status_Active?.icon} alt={discord_Status_Active?.name} title={discord_Status_Active?.name} className='lg:h-[24px] lg:w-[24px] lg:mx-2 h-[40px] ml-8 '/>
              
//                 {discord_Status_Custom && (
//                   <p className="text-[25px] text-pink-300 drop-shadow-[0_0_3px_#f0f] text-outline font-semibold lg:text-[18px] ">
//                     <span className="text-green-300 mr-5 lg:mr-3">•</span>
//                     {discord_Status_Custom?.slice(0,20)}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex gap-8 flex-col lg:gap-4">

//             {/* Game Activity */}

//             {discord_Activity && (
//               <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5 
//               lg:p-2 lg:rounded-2xl
//               ">
//                 <div className="font-semibold text-outline tracking-wide text-cyan-200 drop-shadow-[0_0_2px_#0ff]">
//                   <p className='lg:text-[16px] text-3xl'>PLAYING A GAME</p>
//                 </div>
//                 <div className="ml-2 mt-2 flex items-center">
//                   {discord_Activity.image && (
//                     <img
//                       src={discord_Activity.image}
//                       alt="Game Art"
//                       className="lg:w-14 lg:h-14 mt-2
//                       w-32 h-32 border-1 border-white rounded-md"
//                     />
//                   )}
//                   <div>
//                     <p className="text-5xl font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6 
//                       lg:mx-3 lg:text-[18px]">
//                       {discord_Activity.name}
//                     </p>
//                     <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
//                     lg:mx-3 lg:text-sm">{discord_Activity.largeText}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Spotify */}
//             {discordSpotify && (
//               <div style={{ borderColor: 'rgba(0, 0, 0, 0.7)' }} className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5
//               lg:p-2 lg:rounded-2xl
//               ">
//                 <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wide">
//                   <p className='lg:text-[16px] text-3xl'>LISTENING TO SPOTIFY</p>
//                 </div>
//                 <div className="ml-2 mt-2 flex items-center">
//                   <img
//                     src={discordSpotify.image}
//                     alt={discordSpotify.song}
//                     className="lg:w-14 lg:h-14 mt-2 
//                     w-32 h-32 rounded-md border border-white"
//                   />
//                   <div>
//                     <p className="text-5xl font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6
//                       lg:mx-3 lg:text-[18px]">{discordSpotify.song?.slice(0,20)}...</p>
//                     <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
//                     lg:mx-3 lg:text-sm">{discordSpotify.artist?.slice(0,20)}...</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* YouTube */}
//             {discordYouTube && (
//               <div style={{ borderColor: 'rgba(0, 0, 0, 0.6)' }}className="border bg-[rgba(255,255,255,0.09)] rounded-4xl p-5
//               lg:p-2 lg:rounded-2xl
//               ">
//                 <div className="font-semibold text-cyan-200 drop-shadow-[0_0_2px_#0ff] text-outline tracking-wider">
//                   <p className='lg:text-[16px] text-3xl'>WATCHING ON YOUTUBE</p>
//                 </div>
//                 <div className="ml-2 mt-2 flex items-center">
//                   <img
//                     src={youtube}
//                     alt={discordYouTube.title}
//                     className="lg:w-14 lg:h-14 
//                     w-32 h-32 mt-2 rounded-md"
//                   />
//                   <div>
//                     <p className="text-[40px] font-semibold text-outline tracking-wide text-[#ffa2a2] mx-6
//                       lg:mx-3 lg:text-[18px]">{discordYouTube.title?.slice(0,20)}...</p>
//                     <p className="mx-6 text-neutral-200 drop-shadow-[0_0_2px_#111] text-3xl font-semibold 
//                     lg:mx-3 lg:text-sm">{discordYouTube.channel}</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Discord_Card
