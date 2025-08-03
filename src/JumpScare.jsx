//"Hello World"(print)
import React, { useEffect, useState, useRef } from "react";

const JumpScare = () => {
  const [musicPlay, setMusicPlay] = useState(false);
  const [showJumpScare, setShowJumpScare] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let jumpscareTimer;
    let hideTimer;

    if (musicPlay) {

      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(console.error);
      }

      jumpscareTimer = setTimeout(() => {
        setShowJumpScare(true);
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(console.error);
        }

        hideTimer = setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
          setShowJumpScare(false);
        }, 2000);
      }, 8000);
    }

    return () => {
      clearTimeout(jumpscareTimer);
      clearTimeout(hideTimer);
    };
  }, [musicPlay]);

  if (!musicPlay) {
    return (
      <button
        onClick={() => setMusicPlay(true)}
        className="fixed inset-0 z-30 h-screen w-full bg-black text-white text-4xl flex justify-center items-center"
      >
        Tap to Start
      </button>
    );
  }

  return (
    <div>
      <video className="h-screen w-screen fixed z-30 inset-0"
        ref={videoRef}
        src={import.meta.env.VITE_VIDEO}
                loop
        autoPlay
        playsInline
        style={{ display: showJumpScare ? "block" : "none" }}
      />
    </div>
  );
};

export default JumpScare;
