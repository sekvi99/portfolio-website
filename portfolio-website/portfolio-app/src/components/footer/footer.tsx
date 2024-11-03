import "./footer.scss";
import { footer } from "../../content/footer.content";

const Footer = () => {
  const { footerContent, copyrightContent } = footer;
  const { contactSection, findMeSection } = footerContent;
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-section">
          <span>
            <h1>{contactSection.header}</h1>
            <contactSection.icon className="footer-header-icon" />
          </span>
          <h2>Phone Number: {contactSection.phoneNumber}</h2>
          <h2>E-mail: {contactSection.mail}</h2>
        </div>
        <div className="find-me-section">
          <span>
            <h1>{findMeSection.header}</h1>
            <findMeSection.icon className="footer-header-icon" />
          </span>
          <div className="links-container">
            {findMeSection.links.map((link, index) => (
              <a
                key={index}
                className="footer-link"
                href={link.href}
                target="_blank"
              >
                <link.icon className="footer-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="copyright-content">
        <div>
          ©
          <div>
            <p>{copyrightContent.author}</p>
            <p>{copyrightContent.year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
