import React, { useState } from "react";

const SocialItem = [
  { 
    name: "GitHub", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/kiwi-basu"
  },
  { 
    name: "LinkedIn", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://linkedin.com"
  },
  { 
    name: "Instagram", 
    icon: "https://cdn.simpleicons.org/instagram/111111",
    link: "https://instagram.com/stupidish_sunish"
  },
  { 
    name: "Discord", 
    icon: "https://cdn.simpleicons.org/discord/111111",
    link: "https://discord.com/users/714402409656483840" 
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center my-10">
      <div className="flex bg-transparent border border-white/10 lg:py-2 py-5  rounded-full lg:w-[350px] w-[600px] lg:gap-4 gap-10  justify-center shadow-[0_8px_8px_rgba(31,38,135,0.37)] backdrop-blur-xl">

        {SocialItem.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            className={`
              flex items-center gap-2 lg:px-3 lg:py-2 rounded-full transition-all duration-300
              ${hovered === item.name ? "bg-[#ffffff2a] w-50 h-auto   lg:w-32 underline decoration-white tracking-wide   shadow-md shadow-[#56545254]" : "lg:w-13 w-20"}
            `}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={item.icon} className="lg:h-8 lg:w-8 w-15 h-15" alt={item.name} />

            {hovered === item.name && (
              <span className="text-black lg:text-sm text-2xl  transition-all duration-300 whitespace-nowrap">
                {item.name}
              </span>
            )}
          </a>
        ))}

      </div>
    </div>
  );
};

export default Navbar;
