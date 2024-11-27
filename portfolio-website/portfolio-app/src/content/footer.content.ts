import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export interface FooterContent {
  footerContent: {
    author: string;
    links: Array<{ icon: IconType; href: string }>;
    mail: string;
  };
}

export const footer: FooterContent = {
  footerContent: {
    author: "Filip Kozlik",
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/sekvi99",
      },
      {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/filip-koźlik-666625289/",
      },
    ],
    mail: "filmatkozlik@gmail.com",
  },
};
