import { IconType } from "react-icons";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export interface SocialLink {
  className: string;
  href: string;
  target: string;
  icon: IconType;
}

export const SOCIALS: Array<SocialLink> = [
  {
    className: "social-link",
    href: "https://github.com/sekvi99",
    target: "_blank",
    icon: FaGithub
  },
  {
    className: "social-link",
    href: "https://www.linkedin.com/in/filip-koźlik-666625289/",
    target: "_blank",
    icon: CiLinkedin
  },
];
