import { IconType } from "react-icons";
import { FaPencilAlt, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

export interface FooterContent {
  footerContent: {
    contactSection: {
      header: string;
      phoneNumber: string;
      mail: string;
      icon: IconType;
    };
    findMeSection: {
      header: string;
      icon: IconType;
      links: [
        {
          icon: IconType;
          href: string;
        },
        {
          icon: IconType;
          href: string;
        }
      ];
    };
  };
  copyrightContent: {
    author: string;
    year: string;
  };
}

export const footer: FooterContent = {
  footerContent: {
    contactSection: {
      header: "Contact Me!",
      phoneNumber: "535-871-196",
      mail: "filmatkozlik@gmail.com",
      icon: FaPencilAlt,
    },
    findMeSection: {
      header: "Find Me!",
      icon: FaCode,
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
    },
  },
  copyrightContent: {
    author: "Filip Kozlik",
    year: "2024",
  },
};
