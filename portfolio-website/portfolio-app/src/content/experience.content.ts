import { IconType } from "react-icons";
import { JobDescriptionProps } from "../components/jobDescription/jobDescription";
import { SOCIALS } from "../utils/consts/socials";

export interface ExperienceContent {
  author: string;
  authorPosition: string;
  authorDescription: string;
  socials: Array<{ icon: IconType; href: string }>;
  jobs: Array<JobDescriptionProps>;
}

const SHORTENED_SOCIALS: Array<{ icon: IconType; href: string }> = SOCIALS.map(
  ({ icon, href }) => ({
    icon,
    href,
  })
);

export const experienceContent: ExperienceContent = {
  author: "Filip Kozlik",
  authorPosition: "Software Engineer",
  authorDescription:
    "I have been working commercially as a developer for almost 3 years, during which time I also completed my engineering and master's degree in Computer Science.",
  socials: SHORTENED_SOCIALS,
  jobs: [
    {
      jobTitle: "Software Engineer",
      jobDescription:
        "Development and maintenance of a web-based application supporting the management of machines on the production halls.",
      dates: {
        dateFrom: "2024-09",
        dateTo: "Present",
      },
      technologies: [
        "Angular",
        ".NET",
        "Typescript",
        "xUnit",
        "Kendo UI",
        "C#",
        "OPC UA",
        "SCSS",
      ],
    },
    {
      jobTitle: "Junior Software Engineer",
      jobDescription:
        "Development and maintenance of a web-based application supporting the management of machines on the production halls.",
      dates: {
        dateFrom: "2024-01",
        dateTo: "2024-09",
      },
      technologies: [
        "Angular",
        ".NET",
        "Typescript",
        "xUnit",
        "Kendo UI",
        "C#",
        "OPC UA",
        "SCSS",
      ],
    },
    {
      jobTitle: "Software Developer",
      jobDescription:
        "Development of an application to aggregate and visualize data from invoices for selected utilities, mainly Electricity and Gas.",
      dates: {
        dateFrom: "2023-09",
        dateTo: "2024-01",
      },
      technologies: [
        "Angular",
        "Azure",
        "Regex",
        "NgRx",
        "Python",
        "Microsoft SQL Server",
        "Typescript",
      ],
    },
    {
      jobTitle: "Software Developer",
      jobDescription:
        "Development of microservices-based software for managing data from real-world objects and the ability to control devices on those objects.",
      dates: {
        dateFrom: "2023-05",
        dateTo: "2023-09",
      },
      technologies: [
        "Angular",
        "Flask",
        "MongoDB",
        "Python",
        "Docker",
        "InfluxDB",
      ],
    },
    {
      jobTitle: "Junior Software Developer",
      jobDescription:
        "Create scripts to automate daily tasks in Python, Managing databases, creating queries and views, Create a web application based on the Django framework, Create scrapers, retrieving data from provided API services and data directly from HTML.",
      dates: {
        dateFrom: "2022-06",
        dateTo: "2023-05",
      },
      technologies: ["Regex", "Django", "Python", "Microsoft SQL Server"],
    },
    {
      jobTitle: "Math Tutor",
      jobDescription:
        "Solving tasks from elementary school through middle school, high school at the basic and extended level.",
      dates: {
        dateFrom: "2017-10",
        dateTo: "Present",
      },
    },
  ],
};
