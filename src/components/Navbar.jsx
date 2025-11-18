import React from "react";

const SocialItem = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/kiwi-basu",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: "https://cdn.simpleicons.org/instagram/ffffff",
    link: "https://instagram.com/stupidish_sunish",
  },
  {
    name: "Discord",
    icon: "https://cdn.simpleicons.org/discord/ffffff",
    link: "https://discord.com/users/714402409656483840",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-center bg-[#d54242]  py-2">
  <div className="pixel-frame flex gap-6">
    
    {SocialItem.map((item) => (
      <a href={item.link} target="_blank" key={item.name}>
        <div className="pixel-button">
          <img src={item.icon} className="w-7 h-7" alt={item.name} />
        </div>
      </a>
    ))}

  </div>
</div>

  );
};

export default Navbar;
