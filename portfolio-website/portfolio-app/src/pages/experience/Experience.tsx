import "./experience.scss";
import { experienceContent } from "../../content/experience.content";
import JobDescription from "../../components/jobDescription/jobDescription";
import Lottie from "lottie-react";
import CoderWithCat from "../../assets/animations/experience-animation.json";

const Experience: React.FC = (): JSX.Element => {
  return (
    <div className="experience-section">
      <div className="hero-container">
        <div className="hero-information">
          <h1 className="header-experience">{experienceContent.author}</h1>
          <h2>{experienceContent.authorPosition}</h2>
          <h3>{experienceContent.authorDescription}</h3>
          <Lottie animationData={CoderWithCat} />
          <div className="socials-experience-container">
          {experienceContent.socials.map((social, index) => (
            <a key={index} href={social.href} target="_blank">
              <social.icon />
            </a>
          ))}
        </div>
        </div>
      </div>
      <div className="experience-container">
        <h1 className="header-experience">Experience</h1>
        <div className="jobs-container">
          {experienceContent.jobs.map((job, index) => (
            <JobDescription props={job} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
