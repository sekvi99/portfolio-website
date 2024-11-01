import "./socials.scss";
import { SOCIALS } from "../../utils/consts/socials";

const Socials: React.FC = (): JSX.Element => {
  return (
    <div className="socials-container">
      {SOCIALS.map((social, index) => (
        <a
          key={index}
          className={social.className}
          href={social.href}
          target={social.target}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
