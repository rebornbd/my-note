import { IconType } from 'react-icons/lib';
import {
  LinkedinIcon,
  DiscordIcon,
  GithubIcon,
  StackoverflowIcon,
  FacebookIcon,
  InstagramIcon,
} from "../components/Icons";


export interface socialProps {
  title: string;
  icon: IconType;
  link: string;
  className: string;
}

export const SOCIALS: Array<socialProps> = [
  {
    title: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/dipta.bd/",
    className: "instagram"
  },
  {
    title: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/dipta.dhar.bd/",
    className: "facebook"
  },
  {
    title: "Github",
    icon: GithubIcon,
    link: "https://github.com/rebornbd",
    className: "github"
  },
  {
    title: "Linkedin",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/diptadhar/",
    className: "linkedin"
  },
  {
    title: "Stackoverflow",
    icon: StackoverflowIcon,
    link: "https://stackoverflow.com/users/13161183",
    className: "stackoverflow"
  },
  {
    title: "Discord",
    icon: DiscordIcon,
    link: "https://discord.com/users/901771209929289798",
    className: "discord"
  },
];
