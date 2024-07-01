import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";


import React from 'react'
import Button from "./button";

export default function Social() {
    return <div className="flex items-center flex-wrap gap-3 ">{social.map((social, i) => (
        <Button key={i} link={social.link} isIcon >
            <span className="w-7 h-7 grid place-items-center" >
                {social.icon}
            </span>
      </Button>
  ))}</div>;
}


const social = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/mamush-meshesha-25a829223/",
    username: "mamush-meshesha",
  },
  {
    icon: <FaTelegram className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/mamush-meshesha-25a829223/",
    username: "@mam1620shgmail",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/Mamush-Meshesha",
    username: "Mamush-Meshesha",
  },
];

