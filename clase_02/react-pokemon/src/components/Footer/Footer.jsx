import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://miro.medium.com/v2/resize:fill:96:96/2*pC4Rmxr91qNGFurf7jdDaw.png"
            alt=""
          />
          <h4>ADA ITW</h4>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr />
      <p className="copyright">Todos los derechos reservados &copy; {year}</p>
    </div>
  );
};

export default Footer;
