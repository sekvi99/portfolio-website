import "./footer.scss";
import { footer } from "../../content/footer.content";
import Reveal from "../reveal/reveal";

const Footer = () => {
  const { footerContent } = footer;
  return (
    <footer style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      {/* Credits to Olivier Larose */}
      <div className="footer-child">
        <div className="footer-content">
          <Reveal shouldReverseColors={true}>
            <h1>{footerContent.author}</h1>
          </Reveal>
          <div className="links-container">
            {footerContent.links.map((link, index) => (
              <a href={link.href} key={index} target="_blank">
                <link.icon />
              </a>
            ))}
          </div>
          <Reveal shouldReverseColors={true}>
            <h1>{footerContent.mail}</h1>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
