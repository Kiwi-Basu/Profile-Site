//"Hello World"(print)

import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBabyBottle,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYandex,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconXboxB,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-100" />
      ),
      href: "#Home",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-red-500 dark:text-red-500" />
      ),
      href: "https://youtube.com/@kiwi_the_Cutie",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-pink-500 dark:text-pink-500" />
      ),
      href: "#",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-blue-500 dark:text-blue-500" />
      ),
      href: "https://discord.com/users/714402409656483840",
    },
    {
      title: "Kiwi-Basu",
      icon: (
        <IconBrandGithub className="h-full w-full text-rose-500-500 dark:text-rose-500" />
      ),
      href: "https://github.com/Kiwi-Basu",
    },
    
  ];
  return (
    <div className=" flex items-end justify-center h-screen w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
